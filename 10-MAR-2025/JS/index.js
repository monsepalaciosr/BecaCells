let carro = ' '; // tokens let, carro, =, 'BMW'
                 // controles de formato => ; /n /r
                 // espacios en blanco no importan
                 // comentarios

                 /*
                  * comentarios multilinea
                 */
// Statement - Declaraciones
let persona = 'Aldo';

function obtenerNombre () {
    return 'Aldo'; // Expresión - genera la cadena 'Aldo'
}

let multiplicarArray = [1,2,3].map((i) => {
    return i*3;
});

true // boolean
'string' //string
10 // numbre
{nombre: 'Aldo'} // object
[{nombre: 'Aldo'}] // arreglo

const fun = function() {};

//VARIABLES
function miFuncion() {
    var dinero = 5; // declaración = 'var dinero', asignación = '= 5'
    var dinero = 10;
    console.log(dinero);
}
miFuncion();

var dinero = 5; //scope es window, ensucia el scope global(window) objeto global(window) El scope es el alcance de las variables, donde es accesible
console.log(dinero);

dinero = 'mucho';
console.log(dinero);

{
    let juan = 'Juan';
    console.log(juan);
} // Sentencias dentro de un bloque de código

{
    let juan;
    juan = 'Juan';
    console.log(juan);
}

function saludar () {
    let nombre = 'aldo';
}

console.log(nombre); //ReferenceError

const PI = 3.1416
PI = 4; // Error de escritura