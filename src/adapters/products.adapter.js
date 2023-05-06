export const createProductsAdapter = ( products) =>{
    return  products.data.map(p=> ({
        id:p.id,
        Referencia :p.Referencia,
        Nombre :p.Nombre,
        Descripcion :p.Descripcion,
        Precio : p.Precio,
        Impuesto : p.Impuesto
    }));
}


export const sendProductsAdapter = ( product) => {


    return ({
        Nombre : product.Nombre,
        Referencia : product.Referencia,
        Descripcion : product.Descripcion,
        Precio : parseInt(product.Precio),
        Impuesto : (parseFloat(product.Impuesto)/100),
        id : product.id ? product.id : 0, 
    })
}

export const createProductoAdapter = ( product) => {


    return ({
        Nombre : product.Nombre,
        Referencia : product.Referencia,
        Descripcion : product.Descripcion,
        Precio : parseInt(product.Precio),
        Impuesto : (parseFloat(product.Impuesto)*100),
        id : product.id
    })
}