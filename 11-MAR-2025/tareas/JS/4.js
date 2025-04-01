// Filtrar Películas por Género
// Crea una lista de películas con título y género. Filtra solo las de acción

const peliculas = [
    {nombre: 'John Wick', genero: 'accion'},
    {nombre: 'Mad Max: Fury Road', genero: 'accion'},
    {nombre: 'Misión Imposible: Repercusión', genero: 'accion'},
    {nombre: 'Inception (2010)', genero: 'thriller'},
    {nombre: 'El Gran Showman', genero: 'drama'}
]

console.table(peliculas);

const peliculasAccion = peliculas.filter(function(pelicula) {
    return pelicula.genero === 'accion';
});

console.table(peliculasAccion);