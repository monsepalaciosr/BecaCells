console.log('Hola este es mi primer script');

let nombre = 'aldo';
nombre[0]= 'Ron'; // tipo de dato primitivo y esos significa que es inmutable
nombre = 'Ronaldo';
let edad = 30;
let masculino = true;
let sobrinos = null;
let papas = undefined;
let id = Symbol('credencial');
let saldo = 90328409239090405n; //bigInt

console.log(typeof nombre);

// const number1 = Number('0'); //función constructura | clase | prototipo
// const number2 = Number(2+3);
// const number3 = Number(true);
// const number4 = Number(false);
// const number5 = Number([].length);


const number1 = new Number('0'); 
const number2 = new Number(2+3);
const number3 = new Number(true); // type cohersion
const number4 = new Number(false); // type cohersion
const number5 = new Number([].length);

console.log(number1, number2, number3, number4, number5);
///////////////////////////////////////////////////////////////////

// POO => Abstracción de un objeto en la vida real
let Persona = {
    nombre: 'Aldo', // Propiedades
    edad: 30,
    papas: [{nombre: 'Juan', edad: 30}]
};

Persona.nombre = 'Ronaldo';
Persona['nombre'] // 'Ronaldo'

console.log(Persona);



let aldo = Persona; // Guardo la dirección de memoria donde estan los datos
aldo.nombre = 'Rogelio';
console.log(Persona);
console.log(aldo);

let coleccion = ['aldo', 'magaly', 'judit'];
// coleccion[0] // 'aldo'
// coleccion[1] // 'magaly'
// coleccion[2] // 'judit'
console.log(coleccion[0]);

const arreglo = [0,1,2,3,3,5] 

const set = new Set(arreglo); // Se utiliza un método constructor por eso se utiliza "new"
console.log(set.size);
console.log(set);
set.add('adjf');
console.log(set.size);
console.log(set);
set.add('5');
console.log(set.size);
console.log(set);
console.log(set.delete(5));
console.log(set.delete(5));
console.log(set.size);
console.log(set);
console.log(set.has('15')); // Saber si el valor existe en el conjunto, retorna un valor booleano

// pertenece a la familia de los no primitivos
// Es muy parecido a un arreglo - Son colecciones de valores únicos

const odds = new Set ([1, 3, 5, 7, 9]);
const squares = new Set ([2, 4, 11]);
console.log(odds.intersection(squares));

const map = new Map();
map.set(1, 'uno'); //Agregar valor al mapa, .set: necesita 2 valores (1 llave, 1 value)
const value = map.has(1);
console.log(value);
const otherValue = map.get(1); //Obtener el valor
console.log(otherValue);
// let deleteResult = map.delete(0);
// console.log(deleteResult);
map.clear();
console.log(map);
console.log(map.size); //propiedad size

const otherMap = new Map ([
    ['manzana', 2],
    ['banana', 3],
    ['naranja', 1]
]);
console.log(otherMap);