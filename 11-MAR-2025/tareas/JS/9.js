// Análisis de Ventas en un Restaurante
// Dado un arreglo de ventas con nombre de plato y monto, calcula el total vendido.

const menuMexicano = [
    { nombre: 'Tacos al Pastor', precio: 50 },
    { nombre: 'Chiles en Nogada', precio: 180 },
    { nombre: 'Tamales Oaxaqueños', precio: 35 },
    { nombre: 'Pozole', precio: 120 },
    { nombre: 'Enchiladas Verdes', precio: 90 }
];

console.table(menuMexicano);

const totalVendido = menuMexicano.reduce((acumulador, total) => {
    return acumulador + total.precio;
}, 0);

console.log(`El total a pagar es de: ${totalVendido}`);
