import React from "react";
import { Link } from "react-router-dom";

export default function ListaPedido() {
  return (
    <>
      <div class="container mt-4">
        
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title text-center">Lista Pedidos</h4>
            <Link to={'/pedidos/crear'} class="btn btn-primary mb-3">CREAR PEDIDO</Link>
            
            <div class="row-cols-md-2 row-cols-xl-3 justify-content-center align-items-center g-2">
                <div class="col">
                    <div class="card text-start">
                      <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Body</p>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
