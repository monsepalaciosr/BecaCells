// OPERADORES

//Operadores aritméticos
const suma = [1,2,3].reduce((acumulador, item) => {
    acumulador += item;
    return acumulador;
}, 0).toString();

console.log(suma + 10); //Una suma necesita 2 operandos
console.log('suma' + 10); //JIT, Type cohersion
console.log(true + 10); //JIT, Type cohersion
console.log(10 + 'suma'); //JIT, Type cohersion
console.log([10] + 'suma'); //JIT, Type cohersion
console.log([10] + {}); //JIT, Type cohersion
console.log(undefined + {}); //JIT, Type cohersion
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof null);

`` //back ticks
const string = `resultado: ${suma}`;

const string2 = `Resultado: ${[1,2,3].reduce((acumulador, item) => {
    acumulador += item;
    return acumulador;
}, 0).toString()}`;

console.log(string2);

console.log(`Operación modulo, ejemplo con: 4%2 = ${4%2}`);

//Math es un objeto que provee matemáticas básicas
const potencia = Math.pow(2,2) //calculo de la potencia
console.log(potencia);
console.log(2**2); //calculo de la potencia

// OPERADORES COMPARACIÓN
0 == 0; //Cuando tenemos este tipo de comparación siempre nos da resultado booleano
0 == '0'; //non strict operator, type cohersion
0 === '0'; // no solo valida el valor, sino que también valida el tipo de dato

const a = typeof 1; //'number'
const b = typeof '1'; //'string'

//FALSY
//Cuando sucede type cohersion puede ser identificados como 'falso'
// 0, '', undefined, null - ejemplos
// false, false, false, false

let variable = null;
if (!!variable == false) { //operador !!variable --> lo convierte a un valor booleano
    console.log('var 1');
}

//TRUTHY
// 0, +1, 'cadenas llenas', [], {} => true. Son valores tomados como verdaderos
let variable2 = 1;
if (!variable2) {
    console.log('var 2');
}

if([]) {
    console.log('JAJAJAJAJ TRUTHY');
}

// OPERADORES LÓGIOS

// 1 && 0 = 0 | true && false = false 10
// 0 && 0 = 0 | false && false = false 10
// 0 && 1 = 0 | false && true = false 10
// 1 && 1 = 1 | true && true = true 10

// implementar estos casos

console.log(10 && 'Juan'); // el último valor lo toma verdadero - en el caso de que los 2 sean verdaderos

const nombre = 'Juan';
const edad = 10;
const valor = nombre && edad; 

console.log (valor);

console.log(null && false); // regresa: null
//Si encuentra la primera expresión falsa ahí se detiene

// 0 || 0 = 0  | false || false = false
// 1 || 0 = 1  | true || false = true 
// 0 || 1 = 1  | false || true = true
// 1 || 1 = 1  | true || true = true

console.log (10 || null);
// si los dos son true, devuelve el primer valor
// escribir expresiones, html con combinaciones de valores para cada caso

