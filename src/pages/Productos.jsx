import React from "react";
import ListProduct from "../components/products/ListProduct";
import { Switch, Route } from "react-router-dom";
import CreateProducts from "../components/products/CreateProduct";
export default function ProductosComponent() {
  return (
    <>
      <ListProduct />
    </>
  );
}
