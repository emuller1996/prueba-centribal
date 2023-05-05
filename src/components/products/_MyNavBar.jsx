import React from "react";
import { NavLink } from "react-router-dom";

export default function MyNavBar() {
  return (
    <ul class="nav justify-content-center bg-dark ">
      <li class="nav-item ">
        <NavLink to={'/'}  exact  activeClassName="active fw-bold" className="nav-link text-white fw-normal" >
        Productos
        </NavLink>
        
      </li>

      <li class="nav-item ">
        <NavLink to={'/pedidos'}   activeClassName="active fw-bold" className="nav-link text-white fw-normal" >
        Pedidos
        </NavLink>
        
      </li>
      
    </ul>
  );
}
