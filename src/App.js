import logo from "./logo.svg";
import "./App.css";
import ProductosComponent from "./pages/Productos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CreateProducts from "./components/products/CreateProduct";
import MyNavBar from "./components/products/_MyNavBar";
import ListaPedido from "./components/pedidos/ListaPedido";
import CrearPedido from "./components/pedidos/CrearPedido";
import EditarProducto from "./components/products/EditProduct";
import DetallePedido from "./components/pedidos/DetallePedido";

function App() {
  return (
    <>
      <Router>
        <MyNavBar />

        <Switch>
          
          <Route exact path="/pedidos/crear">
            <CrearPedido />
          </Route>

          <Route exact path="/pedidos">
            <ListaPedido />
          </Route>

          <Route exact path="/detalle/:idPedido">
            <DetallePedido />
          </Route>

          <Route exact path="/producto/:id">
            <EditarProducto />
          </Route>
          <Route exact path="/create">
            <CreateProducts />
          </Route>
          <Route exact strict path="/">
            <ProductosComponent />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
