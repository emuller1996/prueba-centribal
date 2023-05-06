import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getPedidoById } from "../../services/api.service";

export default function DetallePedido() {
  const params = useParams();
  const history = useHistory();

  const [detallePedido, setDetallePedido] = useState({});

  useEffect(() => {
    getPedidoByID();
  }, []);

  const getPedidoByID = async () => {
    const result = await getPedidoById(params.idPedido);
    console.log(result.data);
    setDetallePedido(result.data);
  };
  return (
    <>
      <div class="container mt-4">
        <div class="card text-start">
          <div class="card-body">

          <div className="d-flex">
          <h4 class="card-title w-100">Detalle Pedido # {params.idPedido}</h4>

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




            <p class="card-text">
              Total sin Impuesto : {detallePedido.TotalSinImpuesto}{" "}
            </p>
            <p class="card-text">
              Total con Impuesto : {detallePedido.TotalConImpuesto}{" "}
            </p>
            <div class="row justify-content-center align-items-center g-2">
              {detallePedido.Productos &&
                detallePedido.Productos.map((p) => (
                  <div class="col-12">
                    <div class="card text-start">
                      <div class="card-body">
                        <p class="card-text">{p.Nombre}</p>
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
