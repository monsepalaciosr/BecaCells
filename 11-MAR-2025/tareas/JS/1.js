// Sistema de inventario de una tienda
// Crea un arreglo de objetos donde cada objeto represente un producto con nombre, precio y stock. Luego, muestra en consola los productos con stock disponible.
const Productos = [
    {nombre: 'Leche', precio: 25, disponbile: true},
    {nombre: 'Refresco', precio: 30, disponbile: false},
    {nombre: 'Sopa', precio: 15, disponbile: true},
    {nombre: 'Cheetos', precio: 20, disponbile: true},
    {nombre: 'Agua', precio: 10, disponbile: false}
];

Productos.forEach(function(producto) {
    if(producto.disponbile === true) {
        console.table(producto); 
    }
    return;
});