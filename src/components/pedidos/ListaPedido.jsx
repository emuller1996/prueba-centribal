import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPedidos } from "../../services/api.service";
import { createPedidos } from "../../redux/states/pedidosSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ListaPedido() {
  const pedidosList = useSelector((state) => state.pedidos);
  const dispacth = useDispatch();
  useEffect(() => {
    getTodosPedido();
  }, []);

  const getTodosPedido = async () => {
    const result = await getAllPedidos();
    console.log(result.data);

    dispacth(createPedidos(result.data));
  };

  return (
    <>
      <div class="container mt-4">
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title text-center">Lista Pedidos</h4>
            <Link to={"/pedidos/crear"} class="btn btn-primary mb-3">
              CREAR PEDIDO
            </Link>

            <div class="row justify-content-center align-items-center g-2">
              {pedidosList &&
                pedidosList.map((c) => (
                  <div class="col-12">
                    <div class="card text-start">
                      <div class="card-body row">
                        <p class="card-text m-0 col"> ID : {c.id}</p>
                        <p class="card-text m-0 col">{c.TotalConImpuesto}</p>
                        <p class="card-text m-0 col">{c.TotalSinImpuesto}</p>
                        <div className="col">
                            <Link to={`/detalle/${c.id}`} class="btn btn-secondary">VER</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
