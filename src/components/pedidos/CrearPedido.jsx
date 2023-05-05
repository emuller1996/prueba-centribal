import React, { useEffect, useState } from "react";
import ListProduct from "../products/ListProduct";
import { createProductsAdapter } from "../../adapters/products.adapter";
import { getAllProducts } from "../../services/api.service";

export default function CrearPedido() {
  const [ProductosAll, setProductosAll] = useState([]);

  useEffect(() => {
    getProductsAll();

    return () => {
      console.log("DESMONTE");
    };
  }, []);

  const getProductsAll = async () => {
    setProductosAll(createProductsAdapter(await getAllProducts()));
  };

  return (
    <>
      <div class="container mt-4">
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title">Crear Pedido</h4>

            <div class="row justify-content-center align-items-center">
              <div class="col-md-6">

                <div className="row g-2">
                    { ProductosAll &&  ProductosAll.map( p => (
                    <div className="col-6">
                        <div class="card text-start">
                          <div class="card-body">
                            <p class="card-text">{p.Nombre}</p>
                          </div>
                        </div>
                    </div>

                    ))} 
                </div>
              </div>
              <div class="col-md-6">Column</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
