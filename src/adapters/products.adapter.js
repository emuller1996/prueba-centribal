export const createProductsAdapter = ( products) =>{
    return  products.data.map(p=> ({
        Referencia :p.id,
        Nombre :p.Nombre,
        Descripcion :p.Descripcion,
        Precio : p.Precio
    }));
}


export const sendProductsAdapter = ( product) => {


    return ({
        Nombre : product.Nombre,
        Referencia : product.Referencia,
        Descripcion : product.Descripcion,
        Precio : parseInt(product.Precio),
        Impuesto : (parseFloat(product.Impuesto)/100)
    })
}