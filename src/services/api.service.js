import axios from 'axios';

const URL_API ="http://localhost:3004";


export const getAllProducts = async()=>{
    return  await axios.get(`${URL_API}/productos`);
}

export const createProduct = async (product) => {

    return await axios.post(`${URL_API}/productos`,product);
}