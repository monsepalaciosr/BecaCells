// FUNCIONES
// Declaración de la función: 
/* 
* Palabra reservada function | Nomenclaturas: camel case "moverCuerpo", dash case "mover-cuerpo", slash case
* Nombre. Tiene que ser descriptivo con la acción que va a realizar
* Parametros. Son variables que se van a alojar localmente. Una referencia, un valor.
* Valor de retorno. 
*/

let nombre = 'aldo'; //Variable global

/**
 * Metodo para mover el cuerpo de una persona
 * @param {Object} persona 
 */

// Declaración
function moverCuerpo(persona) { //Parametro: "persona"
    console.log(`Se esta moviendo ${persona.nombre}`);
    if(persona.edad > 18) {
        console.log(`${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
    return function() {console.log('JAJAJAJAJ')}; // valor de retorno explícito
};

// Ejecución - Mandar a llamar
const resultado = moverCuerpo({nombre: 'ALDO', edad: 17, sexo: 'M'}); //Argumento: "{nombre: 'ALDO', edad: 17, sexo: 'M'}", el valor que recibe el parámetro
console.log(resultado());
const resultado2 = moverCuerpo({nombre: 'OSCAR', edad: 19, sexo: 'M'});
console.log(resultado2);

const result = [1,2,3].reduce(function(acumulador, item){
    acumulador += item;
    return acumulador;
}, 0);

console.log(result);

// Parametros por defecto. Sirven para evitar errores de ejecución
// arreglo = []
// valorInicial = 0
// function declaration
function myOwnReduce(arreglo = [], callback, valorInicial = 0) {
    acumulador = valorInicial;
    for (let i = 0; i < arreglo.length; i++) {
        acumulador = callback(acumulador, arreglo[i]);
    }
    return acumulador;
};

//function expression. Funciones almacenadas en funciones, retornada como argumentos

const r = myOwnReduce([1,2,3], function(acumulador, item) {
    acumulador += item;
    return acumulador;
}, 0);

console.log(r);

// Las funciones son elementos de orden superior

// Función almacenada en una variable
const baz = function() {
    console.log('ALV');
};
baz(); 

// Función retornada desde otra función
function saludar() {
    // this = Objeto que es dueño de esta función 
    return function() {
        console.log('Mensaje dentro de la función que se retorna');
        console.log('OJO');
        console.log('Estos mensajes solo se ejecutaran si ....');
    };
};

const resultadoSaludar = saludar();
resultadoSaludar(); // Esta guardando la referencia de memoria

// Función pasada como argumento a otra función (CALLBACK). 
function despedir(obtenerNombre) {
    const resultado = obtenerNombre(); // Tiene la responsabilidad de decir el nombre
    console.assert(resultado);
}

despedir(function() {
    return 'Este es mi nombre: Aldo';
});

// function getPokemonData() {
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then (function(response){
//         console.log('INFORMACIÓN DEL REQUEST');
//         console.log(response)
//         return response.json();
//     })
//     .then(function(realResponse){
//         console.log('INFORMACION DEL SERVICIO');
//         console.log(realResponse);
//     })
// }
 
// getPokemonData();

// event loop
// callback queue
// call stack

// ARROW FUNCTION O FUNCIONES FLECHA

/**
 * Método para sumar dos valores "a" es el primer operando y "b" es el segundo operando
 * @param {Number} a 
 * @param {Number} b 
 */
const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(10, 10));

// calculadora('suma', a, b);
// calculadora('resta', a, b);
// calculadora('multiplicacion', a, b);
// calculadora('modulo', a, b);
// calculadora('division', a, b);

window.nombre = 'Pedro';

const aldo = {
    nombre: 'Aldo',
    saludar: (...arguments) => { //para obtener el valor de los arguments
        console.log(this);
        console.log(arguments);
        // console.log(arguments); // no existe
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}
// this es el contexto de declaracion
// this = window - scope donde esta declarado

aldo.saludar(1,2,3);

const juan = {
    nombre: 'Juan',
    saludar: function () {
        console.log(this);
        console.log(arguments); // objeto de tipo "Arguments"
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}
// this es el contexto de ejecucion
// this es igual al objeto

juan.saludar(1,2,3);

// bind, call, apply bindear el contexto de forma explícita
// diferencia entre apply y call, primero hay que pasarle el contexto, en apply hay que pasarle los argumentos que necesita la función

const btn = document.querySelector('#btn');

const fun1 = function() {
    console.log(this);
};

const fun2 = () => { // son funciones sin estado
    console.log(this);
};

btn.addEventListener('click', fun2);

// FUNCIONES CONSTRUCTORAS
function Persona (nombre, edad, sexo) {
    let persona = {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        saludar() {
            console.log(`Hola soy ${this.nombre}`);
        }
    }; //LITERAL OBJETC
    return persona;
};

const alberto = Persona('alberto', 40, 'M');
console.log(alberto); //alberto['nombre']


/////////////////////////////////////////////////////
function Carros (modelo, color, marca) {
    const carro = {
        modelo: modelo,
        color: color,
        marca: marca
    }
}

function Casas (fachada, ubicacion, pisos) {
    const casas = {
        fachada: fachada,
        ubicacion: ubicacion,
        pisos: pisos
    }
}

function Animales (raza, sexo, tipo) {
    const animales = {
        raza: raza,
        sexo: sexo,
        tipo, tipo
    }
}

//////////////////////////////////////////////////

function PersonaDos(nombre, edad, sexo) {
    this.nombre = nombre,
    this.edad = edad,
    this.sexo = sexo,
    this.saludar = function () {
        console.log('Hola soy: ',this.nombre);
    }
}

const emilio = new PersonaDos('Emilio', 29, 'M'); // Si dice que tipo de objeto es
console.log(emilio); // Retorno implícito
emilio.saludar();

// sugar syntax
// clase, mecanismo con el que puedes definir las propiedades del objeto, en js se le llama prototipo
class PersonaTres {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    //METODOS. Acciones que hace el objeto - Representadas por funciones
    saludar() {
        console.log(`Hola soy: ${this.nombre}`);
    }
};
//constructor
//metodos. Acciones que puede hacer un objeto.
//propiedades
//estandares

// instancia. Objeto creado apartir de una clase.
const jeronimo = new PersonaTres('Jeronimo', 29, 'M');
console.log(jeronimo);
jeronimo.saludar();

const persona = {
    nombre: 'Pedrito'
};

persona.edad = 50;
console.log(persona);

//PROTOTIPOS.

let telefono = 5513044563; // instancias de una clase.
class Number {
    toFixed() {

    }
}
telefono.toFixed(); //toFixed esta dentro del prototipo

const arreglo = [1,2,3];
// arreglo.reduce(); // reduce esta dentro del prototipo

class Carro {
    constructor (puertas = 4, anio = 2025) {
        this.puertas = puertas; // publico. API Publica(atributos)
        this._modelo = 'generico' // privado. calculos internos dentro de nuestra clase. En algun momento cambia.
        this.__anio = anio ?? 2025; //protegido
    }
    mover () {
        if (this.__anio > 2024) { 
            this._modelo = 'S4';
        }
        console.log(`EL ${this._modelo} HACE RUN RUN RUN)`);
    }
}

// ?? nullish coleasing operator

// un valor definido significa que es truthy
const bmw = new Carro(5);
// bmw.puertas; // propiedad publica. Propiedades a las que podemos acceder
// bmw._modelo // privado
bmw.mover();

//HERENCIA

class PersonaCuatro extends Carro {
    constructor (nombre, edad, sexo) {
        super(4, 2024); // Hace referencia a la clase que vamos a heredar
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`HOLA SOY: ${this.nombre}`);
    }
}

const jeronimo2 = new PersonaCuatro('Jeronimo', 29, 'M');
jeronimo2.saludar();
jeronimo2.mover();
console.log(jeronimo2);

// modificar un prototipo que ya existe

Array.prototype.myOwnReduce = function (callback, valorInicial) {
    acumulador = valorInicial;
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, arreglo[i]);
    }
    return acumulador;
}

const resultRed = [1,2,3].myOwnReduce((acumulador, item) => {
    acumulador += item;
    return acumulador;
}, 0);

console.log(resultRed);

// [].method() - métodos de instancia
// Array.staticMethod() - métodos estáticos