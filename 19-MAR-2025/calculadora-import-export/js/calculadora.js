export const pantalla = document.querySelector('#pantalla');

export let numeros = [];  
export let numeroIngresado = '';  // contiene los digitos que el usuario ingresa
export let operacion = '';  

/**
 * Función que agrega el número seleccionado por el usuario y actualiza la pantalla
 * @param {string} valor 
 */
export const ingresarNumero = (valor) => {
    numeroIngresado += valor;  
    pantalla.value = numeroIngresado;  
};

/**
 * Método que gestiona la operación que selecciona el usuario 
 * @param {string} valor - Los operadores que el usuario puede seleccionar son: '+', '-', 'x', o '/'
 */
export const almacenaNumeroYOperador = (valor) => {

    numeros.push(parseFloat(numeroIngresado));  
    numeroIngresado = '';  
    
    operacion = valor;  
    pantalla.value += ` ${valor} `;  
};
 
/**
 * Función que ejecuta la operación matemática seleccionada y muestra el resultado en pantalla
 */
export const realizaOperacion = () => {
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


export const sumar = arregloNumeros => arregloNumeros.reduce((a, b) => a + b);

export const restar = arregloNumeros => arregloNumeros.reduce((a, b) => a - b);

export const multiplicar = arregloNumeros => arregloNumeros.reduce((a, b) => a * b, 1); 

export const dividir = arregloNumeros => arregloNumeros.reduce((a, b) => a / b); 

export const modulo = arregloNumeros => arregloNumeros.reduce((a, b) => a % b); 

/**
 * Función que borra los valores en la pantalla y limpia las variables globales para comenzar de nuevo
 */
export const limpiaCalculadora = () => {
    pantalla.value = '';
    numeros = [];
    numeroIngresado = '';
};


export const acciones = {
    '=': realizaOperacion,
    'AC': limpiaCalculadora,
    '+': almacenaNumeroYOperador,
    '-': almacenaNumeroYOperador,
    'x': almacenaNumeroYOperador,
    '/': almacenaNumeroYOperador,
    '%': almacenaNumeroYOperador
};