import axios from 'axios';

const URL_API ="http://localhost:3004";


export const getAllProducts = async()=>{
    return  await axios.get(`${URL_API}/productos`);
}

export const createProduct = async (product) => {

    return await axios.post(`${URL_API}/productos`,product);
}

export const getProductById = async (id) => {
    return  await axios.get(`${URL_API}/productos/${id}`);
}

export const updateProductById = async (product,id) => {
    return  await axios.put(`${URL_API}/productos/${id}`,product);
}

export const createPedido = async(pedido)=>{
    return await axios.post(`${URL_API}/pedidos`,pedido);
}

export const getAllPedidos = async () => {
    return await axios.get(`${URL_API}/pedidos`);
}

export const getPedidoById =async (id) => {
    return await axios.get(`${URL_API}/pedidos/${id}`);
}