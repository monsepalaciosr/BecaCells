const pantalla = document.querySelector('#pantalla');
const botones = document.querySelectorAll('#btn');

let numeros = [];  
let numeroIngresado = '';  // contiene los digitos que el usuario ingresa
let operacion = '';  

/**
 * Función que agrega el número seleccionado por el usuario y actualiza la pantalla
 * @param {string} valor 
 */
const ingresarNumero = (valor) => {
    numeroIngresado += valor;  
    pantalla.value = numeroIngresado;  
};

/**
 * Método que gestiona la operación que selecciona el usuario 
 * @param {string} valor - Los operadores que el usuario puede seleccionar son: '+', '-', 'x', o '/'
 */
const almacenaNumeroYOperador = (valor) => {
    
    numeros.push(parseFloat(numeroIngresado));  
    numeroIngresado = '';  
    
    operacion = valor;  
    pantalla.value += ` ${valor} `;  
};

/**
 * Función que ejecuta la operación matemática seleccionada y muestra el resultado en pantalla
 */
const realizaOperacion = () => {
    if (numeros.length > 0) {
        
        numeros.push(parseFloat(numeroIngresado));  
        

        const operacionesMatematicas = {
            '+': sumar,
            '-': restar,
            'x': multiplicar,
            '/': dividir,
            '%': modulo
        };

        let resultado = operacionesMatematicas[operacion](numeros);

        pantalla.value = resultado;  
    }
};


const sumar = arregloNumeros => arregloNumeros.reduce((a, b) => a + b);

const restar = arregloNumeros => arregloNumeros.reduce((a, b) => a - b);

const multiplicar = arregloNumeros => arregloNumeros.reduce((a, b) => a * b, 1); 

const dividir = arregloNumeros => arregloNumeros.reduce((a, b) => a / b); 

const modulo = arregloNumeros => arregloNumeros.reduce((a, b) => a % b); 

/**
 * Función que borra los valores en la pantalla y limpia las variables globales para comenzar de nuevo
 */
const limpiaCalculadora = () => {
    pantalla.value = '';
    numeros = [];
    numeroIngresado = '';
};


const acciones = {
    '=': realizaOperacion,
    'AC': limpiaCalculadora,
    '+': almacenaNumeroYOperador,
    '-': almacenaNumeroYOperador,
    'x': almacenaNumeroYOperador,
    '/': almacenaNumeroYOperador,
    '%': almacenaNumeroYOperador
};

/**
 * Ciclo que recorre todos los botones y asigna un evenListener
 */
botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const valor = btn.textContent;

        if (['+', '-', 'x', '/', '%'].includes(valor)) {
            almacenaNumeroYOperador(valor);
        } 

        else if (acciones[valor]) {
            acciones[valor]();  
        } 

        else {
            ingresarNumero(valor);  
        }
    });
});


// const sumar = (a, b) => {
//     return a + b;
// };

// const restar = (a, b) => {
//     return a - b;
// };

// const multiplicar = (a, b) => {
//     return a * b;
// };

// const dividir = (a, b) => {
//     return a / b;
// };
