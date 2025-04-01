// Eliminar Duplicados en una Lista de Productos (Set)
// Dada una lista de productos donde algunos están repetidos, usa Set para eliminar duplicados.

const productos = ['Leche', 'Refresco', 'Agua', 'Agua', 'Pan', 'Pan', 'Pan', 'Cacahuates'];
console.table(productos);

const set = new Set(productos);
const nuevaLista = Array.from(set);  

console.table(nuevaLista);