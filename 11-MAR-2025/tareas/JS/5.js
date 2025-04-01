// Sistema de Biblioteca
// Crea un sistema que registre libros con título, autor y estado (prestado o disponible). Luego, muestra solo los libros disponibles.

const formulario = document.querySelector('.formBiblioteca');
const titulo = document.querySelector('#titulo');
const autor = document.querySelector('#autor');
const estado1 = document.querySelector('#estado1');
const estado2 = document.querySelector('#estado2');

let libros = []; 

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const libroIngresado = {
        titulo: titulo.value,
        autor: autor.value,
        estado: estado1.checked ? 'Disponible' : 'Prestado'
    }

    libros.push(libroIngresado);

    const librosDisponibles = libros.filter(libro => libro.estado === 'Disponible');
    console.table(librosDisponibles);
});

