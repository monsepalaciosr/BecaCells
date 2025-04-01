// Tienda en Línea - Buscar Productos por Nombre
// Crea una función que permita buscar un producto por su nombre en un catálogo

const catalogoLibros = [
    { id: 1, titulo: 'Cien años de Soledad', autor: 'Gabriel García Márquez', precio: 300, genero: 'Novela' },
    { id: 2, titulo: '1984', autor: 'George Orwell', precio: 250, genero: 'Ciencia ficción' },
    { id: 3, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', precio: 150, genero: 'Infantil' },
    { id: 4, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', precio: 400, genero: 'Clásico' },
    { id: 5, titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', precio: 280, genero: 'Juvenil' }
];

const tituloIngresado = prompt('Ingrese un nombre:').toLowerCase();

const productoSolicitado = catalogoLibros.filter( libro => tituloIngresado === libro.titulo.toLowerCase());
console.table(productoSolicitado);
