import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getProductById, updateProductById } from "../../services/api.service";
import {
  createProductoAdapter,
  sendProductsAdapter,
} from "../../adapters/products.adapter";

export default function EditarProducto() {
  const params = useParams();

  const [productInput, setProductInput] = useState({});

  const history = useHistory();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    console.log(params.id);

    const result = await getProductById(params.id);
    console.log(createProductoAdapter(result.data));
    setProductInput(createProductoAdapter(result.data));
  };

  const HandleInputProduct = (e) => {
    setProductInput({
      ...productInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormProducto = (e) => {
    e.preventDefault();

    console.log(sendProductsAdapter(productInput));

    try {
      const result = updateProductById(
        sendProductsAdapter(productInput),
        productInput.id
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="container mt-4">
        <div class="card text-start">
          <div class="card-body">
            <div className="d-flex">
              <h4 class="card-title w-100">Crear Producto</h4>
              <div
                class="float-end btn btn-danger"
                onClick={() => {
                  history.goBack();
                }}
              >
                {" "}
                Atras
              </div>
            </div>

            <form onSubmit={handleFormProducto} className="w-50">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Referencia"
                  name="Referencia"
                  placeholder=" "
                  value={productInput.Referencia}
                  onChange={HandleInputProduct}
                />
                <label for="Referencia">Referencia </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  name="Nombre"
                  placeholder=" "
                  value={productInput.Nombre}
                  onChange={HandleInputProduct}
                />
                <label for="nombre">Nombre </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Precio"
                  name="Precio"
                  placeholder=" "
                  value={productInput.Precio}
                  onChange={HandleInputProduct}
                />
                <label for="Precio">Precio </label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Impuesto"
                  name="Impuesto"
                  placeholder=" "
                  value={productInput.Impuesto}
                  onChange={HandleInputProduct}
                />
                <label for="Impuesto">Impuesto </label>
              </div>

              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="Descripcion"
                  name="Descripcion"
                  onChange={HandleInputProduct}
                  value={productInput.Descripcion}
                ></textarea>
                <label for="Descripcion">Descripcion</label>
              </div>

              <div class="form-floating mb-3 text-center">
                <input
                  type="submit"
                  class="btn btn-success mt-3"
                  id="Referencia"
                  name="Referencia"
                  placeholder=" "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
