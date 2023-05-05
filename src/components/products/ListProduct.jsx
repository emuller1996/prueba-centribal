import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/api.service";
import { createUserAdapter } from "../../adapters/user.adapter";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/states/userSlice";
import { createProducts } from "../../redux/states/productSlice";
import { createProductsAdapter } from "../../adapters/products.adapter";
import { Link } from "react-router-dom";

export default function ListProduct(){

    const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProductC();
  }, []);

  const getAllProductC = async () => {
    setLoading(true);
    dispatch(createProducts(createProductsAdapter(await getAllProducts())));
    setLoading(false);
  };


    return(<>
    <div class="container mt-4">
        <div class="card text-start">
          <div class="card-body">
          <Link to={'/create'} type="button" class="btn btn-primary mb-2">Crear Producto</Link>

            <div class="table-responsive">
              <table
                class="table table-striped
                  table-hover	
                  table-bordered
                  table-primary
                  align-middle"
              >
                <thead class="table-light">
                  <tr>
                    <th>Referencia</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>#</th>

                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  {!loading &&
                    products.map((p) => (
                      <tr class="table-secondary">
                        <td scope="row">{p.Referencia}</td>
                        <td className="text-start">{p.Nombre}</td>
                        <td>{p.Descripcion}</td>
                        <td>{p.Precio}</td>
                        <td>
                          <button type="button" class="btn btn-secondary btn-sm">Ver</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>)
}