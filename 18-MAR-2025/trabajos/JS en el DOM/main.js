// BUSCAR ELEMENTOS EN EL DOM

// Por ID - Devuelve un único elemento con el ID especificado
const section1 = document.getElementById('section1');
// Por Clase - Devuelve una colección (HTMLCollection) de todos los elementos que tienen la clase especificada. Es dinámico
const items = document.getElementsByClassName('item');
// Por etiqueta - Devuelve una colección de todos los elementos con la etiqueta especificada
const subtitulos = document.getElementsByTagName('h3');
// Por selector CSS - Devuelve el primer elemento que coincida con el selector CSS especificado
const texto = document.querySelector('.texto'); // - Primer elemento con esta clase
// Por selector CSS - Devuelve todos los elementos que coincidan con el selector. No es dinámico: no se actualiza si cambian los elementos.
const lista = document.querySelectorAll('.lista');
// Por atributos - Se puede combinar querySelector() o querySelectorAll() para buscar atributos específicos
const texto2 = document.querySelector('[title=texto2]');
// Por relación (padres, hijos, hermanos)
/**
 * parentNode: Padre inmediato.
 * children: Colección de hijos.
 * firstElementChilde / lastElementChild: Primer / Último hijo.
 * nextElementSibling / previousElementSibling: Hermano siguiente/anterior.
 */

const lista2 = document.getElementById('lista2');
lista2.insertAdjacentHTML('beforebegin', '<p> Inicio de la lista </p>');
lista2.insertAdjacentHTML('afterbegin', '<li> Primer elemento </li>');
lista2.insertAdjacentHTML('beforeend', '<li> Último elemento </li>');
lista2.insertAdjacentHTML('afterend', '<p> Fin de la lista </p>');
// Por getElementByName
const input = document.getElementsByName('email');

//Crear elementos
// Crea un nuevo elemento HTML vacío
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo div';
document.body.appendChild(nuevoDiv);
// Crear elementos utilizando una cadena de HTML.
const contendor = document.getElementById('contenedor');
contendor.innerHTML = `<p> <strong> Hola soy un texto </stron> </p`;

const listaPrincipal = document.querySelector('#lista-principal');
const liInicio = document.createElement('li');
liInicio.textContent = 'Al inicio';
listaPrincipal.prepend(liInicio);
const liFinal = document.createElement('li');
liFinal.textContent = 'Al final';
listaPrincipal.append(liFinal);

//Eliminar elementos
// Elimina el primer elemento encontrado
texto2.remove();
// Elimina un hijo de un elemento padre
const hijo = contendor.querySelector('p');
contendor.removeChild(hijo); 
// Elimina todo el contenido del elemento
lista2.innerHTML = '';
// Reemplaza un hijo existente por otro.
const nuevoTexto = document.createElement('p');
nuevoTexto.textContent = 'Soy un nuevo texto, creado con JS';

const section2 = document.getElementById('section2');
const viejoTexto = section2.querySelector('p');
section2.replaceChild(nuevoTexto, viejoTexto);