// definimos clase productManager

class ProductManager {
    constructor() {
        this.products = [];
    }


//metodo getproducts para retornar arreglo de productos

getProducts = () => {
    return this.products;

}

// metodo addProduct para almacenar productos en nuestro arreglo, con parametros

addProduct = (title,description,price,thumbnail,code,stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: [] //products array vacio
    }

    if (this.products.length === 0) {
        product.id = 1
    } else {
        product.id = this.products [this.products.length-1].id + 1
    }


    //push del producto

    this.products.push(product)
}

getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product => product.id === idProduct);

        if (productIndex === -1){
        console.log("Not Found");
        return;
    }
    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log("producto agregado");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};
const manejadorProductos = new ProductManager ();

manejadorProductos.addProduct ('Malbec Reserva', 'Frutal', 8000,'sin imagen', 'mbc123', 100);
manejadorProductos.addProduct ('Cabernet Reserva', 'Suave', 7000,'sin imagen', 'cbr123', 300);
manejadorProductos.addProduct ('Torrontes Reserva', 'Estacionado', 6000,'sin imagen', 'trr123', 200);

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);

console.log(manejadorProductos.getProducts());