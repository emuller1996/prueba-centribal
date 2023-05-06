import React, { useEffect, useState } from "react";
import ListProduct from "../products/ListProduct";
import { createProductsAdapter } from "../../adapters/products.adapter";
import { createPedido, getAllProducts } from "../../services/api.service";
import { useHistory } from "react-router-dom";

export default function CrearPedido() {
  const [ProductosAll, setProductosAll] = useState([]);
  const [ProductosSelected, setProductosSelected] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalImpuesto, setTotalImpuesto] = useState(0);

  const history =  useHistory();

  useEffect(() => {
    getProductsAll();

    return () => {
      console.log("DESMONTE");
    };
  }, []);



  useEffect(()=>{
    setTotal(
        ProductosSelected.reduce(
          (accumulator, currentValue) => (accumulator + currentValue.Precio),
          0
        )
      );
      setTotalImpuesto(
          ProductosSelected.reduce(
            (accumulator, currentValue) => (accumulator + currentValue.Precio + ( currentValue.Precio * currentValue.Impuesto )),
            0
          )
        );

  },[ProductosSelected])

  const getProductsAll = async () => {
    setProductosAll(createProductsAdapter(await getAllProducts()));
  };

  const hadleCheckProducoSelect = (e) => {
    console.log(e);

    const ProductoIn = ProductosSelected.find((t) => t === e);
    if (ProductoIn) {
      setProductosSelected(ProductosSelected.filter((t) => t !== e));
    } else {
      setProductosSelected([...ProductosSelected, e]);
    }

    
  };

  const onSavePedido = async()=>{
    const pedido = Object.assign({Productos : ProductosSelected} , { TotalSinImpuesto : total, TotalConImpuesto : totalImpuesto })
    
    
    
    try {

        createPedido(pedido)
        alert("pedido hecho!")
        history.goBack();
    } catch (error) {
        console.log(error)
    }
    
    console.log(pedido)

  }

  return (
    <>
      <div class="container mt-4">
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title">Crear Pedido</h4>

            <div class="row justify-content-center align-items-center">
              <div class="col-md-6">
                <div className="row g-2">
                  {ProductosAll &&
                    ProductosAll.map((p) => (
                      <div className="col-6">
                        <div class="card text-start">
                          <div class="card-body">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                name="productosAll"
                                value={p.Referencia}
                                id={p.Referencia}
                                onClick={() => hadleCheckProducoSelect(p)}
                              />
                              <label
                                class="form-check-label"
                                for={p.Referencia}
                              >
                                {p.Nombre}
                                <p>${p.Precio}</p>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div class="col-md-6">
                {ProductosSelected.length === 0 && (
                  <p> No ha Seleccionado Productos</p>
                )}
                <p>
                Total : $ {total}
                </p>

                <p>
                Total con Impuesto: $ {totalImpuesto}
                </p>

                <button type="button" onClick={onSavePedido} disabled={ProductosSelected.length===0} class="btn btn-primary">GUARDAR PEDIDO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
