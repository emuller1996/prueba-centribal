import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { sendProductsAdapter } from "../../adapters/products.adapter";
import { createProduct } from "../../services/api.service";

export default function CreateProducts() {
  const [productInput, setProductInput] = useState({});

  const history = useHistory();

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
      createProduct(sendProductsAdapter(productInput));
      history.goBack();
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
