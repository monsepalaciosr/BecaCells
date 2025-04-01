// TRUE && FALSE = FALSE
function caso1And () {
    const divr = document.querySelector('.divr-1');
    const divl = document.querySelector('.divl-1');

    const prueba = !!3 && !!null;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `<b> !!3 && !!null </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
};

function caso2And () {
    const divr = document.querySelector('.divr-2');
    const divl = document.querySelector('.divl-2');

    const prueba = !![] && !!0;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `<b> !![] && !!0 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso3And () {
    const divr = document.querySelector('.divr-3');
    const divl = document.querySelector('.divl-3');

    const prueba = !!false && !!a;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `<b> !!false && !!a </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso4And () {
    const divr = document.querySelector('.divr-4');
    const divl = document.querySelector('.divl-4');

    
    const prueba = !!4 && !true;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = ` <b> !!4 && !true </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso5And () {
    const divr = document.querySelector('.divr-5');
    const divl = document.querySelector('.divl-5');

    
    const prueba = !!undefined && !!'soy una cadena';

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `<b> !!undefined && !!"soy una cadena" </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso6And () {
    const divr = document.querySelector('.divr-6');
    const divl = document.querySelector('.divl-6');

    const resta = 102 - 34;
    const num = 0;
    const prueba = !!resta && !!num;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const resta = 102 - 34; <br>
        const num = 0; <br>
        
        <b> !!resta && !!num </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso7And () {
    const divr = document.querySelector('.divr-7');
    const divl = document.querySelector('.divl-7');

    const division = 56 / 34;
    const modulo = 2 % 5;
    const prueba = !!division && !modulo;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const division = 56 / 34; <br>
        const modulo = 2 % 5; <br>
        
        <b> !!division && !modulo </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso8And () {
    const divr = document.querySelector('.divr-8');
    const divl = document.querySelector('.divl-8');

    const PI = Math.PI;
    const redondear = Math.round(2.5);
    const prueba = !!PI && !redondear;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const PI = Math.PI; <br>
        const redondear = Math.round(2.5); <br>
        
        <b> !!PI && !redondear </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso9And () {
    const divr = document.querySelector('.divr-9');
    const divl = document.querySelector('.divl-9');

    const raizCuadrada = Math.sqrt(144);
    const redondear = Math.floor(2.5);
    const prueba = !!raizCuadrada && !redondear;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const raizCuadrada = Math.sqrt(144); <br>
        const redondear = Math.floor(2.5); <br>
        
        <b> !!raizCuadrada && !redondear </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso10And () {
    const divr = document.querySelector('.divr-10');
    const divl = document.querySelector('.divl-10');

    const min = Math.min( 3, 5, 6, 7, 2, 10);
    const numero = 1234567890123456789012345678901234567890n;
    const prueba = !!min && !numero;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const min = Math.min( 3, 5, 6, 7, 2, 10); <br>
        const numero = 1234567890123456789012345678901234567890n; <br>
        
       <b> !!min && !numero </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso1And();
caso2And();
caso3And();
caso4And();
caso5And();
caso6And();
caso7And();
caso8And();
caso9And();
caso10And();

// FALSE && FALSE = FALSE

function caso11And () {
    const divr = document.querySelector('.divr-11');
    const divl = document.querySelector('.divl-11');

    const max = Math.max( 3, 5, 6, 7, 2, 10);
    const random = Math.random();
    const prueba = !max && !random;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const max = Math.max( 3, 5, 6, 7, 2, 10); <br>
        const random = Math.random(); <br>
        
        <b> !max && !random </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso12And () {
    const divr = document.querySelector('.divr-12');
    const divl = document.querySelector('.divl-12');

    const numero = Math.max( 3, 5, 6, 7, 2, 10) * 2;
    const numero2 = Math.ceil(4.2) + (5 * 2);
    const prueba = !numero && !numero2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numero = Math.max( 3, 5, 6, 7, 2, 10) * 2; <br>
        const numero2 = Math.ceil(4.2) + (5 * 2); <br>
        
        <b> !numero && !numero2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso13And () {
    const divr = document.querySelector('.divr-13');
    const divl = document.querySelector('.divl-13');

    function miFuncion () {};
    const prueba = !miFuncion() && !45;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        function miFuncion () {}; <br>
        
        <b> !miFuncion() && !45 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso14And () {
    const divr = document.querySelector('.divr-14');
    const divl = document.querySelector('.divl-14');

    const personas = {nombre: '', edad: '', email: ''};
    const arreglo = [1,2,3];

    const prueba = !personas && !arreglo;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const personas = {nombre: '', edad: '', email: ''}; <br>
        const arreglo = [1,2,3]; <br>
        
        <b> !personas && !arreglo </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso15And () {
    const divr = document.querySelector('.divr-15');
    const divl = document.querySelector('.divl-15');

    const arreglo = [1,2,3,4,5];
    const objeto = {};

    const prueba = !arreglo && !objeto;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo = [1,2,3,4,5]; <br>
        const objeto = {}; <br>
        
        <b> !arreglo && !objeto </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso16And () {
    const divr = document.querySelector('.divr-16');
    const divl = document.querySelector('.divl-16');

    const arreglo = [1,2,3,4,5,5,6,7];
    const miSet = new Set();
    const arrego2 = Array.from(miSet);

    const prueba = !arreglo && !arrego2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo = [1,2,3,4,5,5,6,7]; <br>
        const miSet = new Set(); <br>
        const arrego2 = Array.from(miSet); <br>
        
        <b> !arreglo && !arrego2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso17And () {
    const divr = document.querySelector('.divr-17');
    const divl = document.querySelector('.divl-17');

    const arreglo = [1,2,3,4,5,5,6,7];
    const miSet = new Set();

    const prueba = !arreglo && !miSet;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo = [1,2,3,4,5,5,6,7]; <br>
        const miSet = new Set(); <br>
        
        <b> !arreglo && !miSet </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso18And () {
    const divr = document.querySelector('.divr-18');
    const divl = document.querySelector('.divl-18');

    const num= -1;

    const prueba = !num && !!NaN;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const num= -1; <br>
        
        <b> !num && !!NaN </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso19And () {
    const divr = document.querySelector('.divr-19');
    const divl = document.querySelector('.divl-19');

    const arreglo1= Array.isArray([1, 2, 3]); //true
    const arreglo2 = Array.isArray({ foo: 123 }); //false

    const prueba = !arreglo1 && arreglo2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo1= Array.isArray([1, 2, 3]); <br>
        const arreglo2 = Array.isArray({ foo: 123 }); <br>
        
        <b> !arreglo1 && arreglo2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso20And () {
    const divr = document.querySelector('.divr-20');
    const divl = document.querySelector('.divl-20');

    const arreglo1= Array.isArray(new Array("a", "b", "c", "d")); //true
    const arreglo2 = Array.isArray(null); //false

    const prueba = !arreglo1 && arreglo2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo1= Array.isArray(new Array("a", "b", "c", "d"))<br>
        const arreglo2 = Array.isArray(null); <br>
        
        <b> !arreglo1 && arreglo2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso11And();
caso12And();
caso13And();
caso14And();
caso15And();
caso16And();
caso17And();
caso18And();
caso19And();
caso20And();

// FALSE && TRUE = FALSE

function caso21And () {
    const divr = document.querySelector('.divr-21');
    const divl = document.querySelector('.divl-21');

    const arreglo1= Array(7); //true
    const arreglo2 = Array.of(7); //true

    const prueba = !arreglo1 && !!arreglo2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo1= Array(7); <br>
        const arreglo2 = Array.of(7); <br>
        
        <b> !arreglo1 && !!arreglo2 </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso22And () {
    const divr = document.querySelector('.divr-22');
    const divl = document.querySelector('.divl-22');

    const arreglo = [1, 3, 5, 7, 8, 10];
    const index = -3;
    const posición = arreglo.at(index); // number: 7

    const prueba = !arreglo && !!posición;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo = [1, 3, 5, 7, 8, 10]; <br>
        const index = -3; <br>
        const posición = arreglo.at(index); <br>
        
        <b> !arreglo && !!posición </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso23And () {
    const divr = document.querySelector('.divr-23');
    const divl = document.querySelector('.divl-23');

    const arreglo = [1, 2, 3, 4];
    const arreglo2 = [5, 6, 7, 8];
    const nuevoArreglo = arreglo.concat(arreglo2); // [1, 2, 3, 4, 5, 6, 7, 8]

    const prueba = !arreglo && !!nuevoArreglo;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo = [1, 2, 3, 4]; <br>
        const arreglo2 = [5, 6, 7, 8]; <br>
        const nuevoArreglo = arreglo.concat(arreglo2); <br>
        
        <b> !arreglo && !!nuevoArreglo </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso24And () {
    const divr = document.querySelector('.divr-24');
    const divl = document.querySelector('.divl-24');

    //array.every() => verifica si todos los elementos del array cumplen con la función implementada
    const numeros = [12, 15, 20, 25];
    const todosMayores10 = numeros.every(num => num > 10); //true

    const prueba = !numeros && todosMayores10;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [12, 15, 20, 25]; <br>
        const todosMayores10 = numeros.every(num => num > 10);  <br>

        <b> !numeros && todosMayores10 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso25And () {
    const divr = document.querySelector('.divr-25');
    const divl = document.querySelector('.divl-25');

    //array.every() => verifica si todos los elementos del array cumplen con la función implementada
    const palabras = ['Ana', 'Karina', 'Jose'];
    const todosSonStrings = palabras.every(palabra => typeof palabra === 'string'); //true

    const prueba = !palabras && todosSonStrings;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const palabras = ['Ana', 'Karina', 'Jose']; <br>
        const todosSonStrings = palabras.every <br> (palabra => typeof palabra === 'string');  <br>

        <b> !palabras && todosSonStrings </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso26And () {
    const divr = document.querySelector('.divr-26');
    const divl = document.querySelector('.divl-26');

    const numeros = [2, 4, 6, 8, 10];
    const numerosPares = numeros.every(num => num % 2 === 0); //true

    const prueba = !numeros && numerosPares;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [2, 4, 6, 8, 10]; <br>
        const numerosPares = numeros.every(num => num % 2 === 0); <br>

        <b> !numeros && numerosPares </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso27And () {
    const divr = document.querySelector('.divr-27');
    const divl = document.querySelector('.divl-27');

    const numeros = [2, 4, 6, 8, 10];
    const tamañoArreglo = numeros.length;

    const prueba = !numeros && !!tamañoArreglo;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [2, 4, 6, 8, 10]; <br>
        const tamañoArreglo = numeros.length; <br>

        <b> !numeros && !!tamañoArreglo </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso28And () {
    const divr = document.querySelector('.divr-28');
    const divl = document.querySelector('.divl-28');

    const numeros = [2, 4, 6, 8, 10];
    const numerosPequeños = numeros.filter(num => num <= 6);

    const prueba = !numeros && !!numerosPequeños;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [2, 4, 6, 8, 10]; <br>
        const numerosPequeños = numeros.filter(num => num <= 6); <br>

        <b> !numeros && !!numerosPequeños </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso29And () {
    const divr = document.querySelector('.divr-29');
    const divl = document.querySelector('.divl-29');

    // devuelve el PRIMER valor que cumple con la función implementada
    const numeros = [1, 5, 59, 30, 12, 14, 32];
    const encuentraNumeros = numeros.find(num => num > 10); // 59

    const prueba = !numeros && !!encuentraNumeros;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [1, 5, 59, 30, 12, 14, 32]; <br>
        const encuentraNumeros = numeros.find(num => num > 10); <br>

        <b> !numeros && !!encuentraNumeros </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso30And () {
    const divr = document.querySelector('.divr-30');
    const divl = document.querySelector('.divl-30');

    // crea un nuevo arreglo con elementos concatenados
    const numeros = [1, 5, 59, 30, [12, 14, 32]];
    const concatena = numeros.flat(); // [1, 5, 59, 30, 12, 14, 32]

    const prueba = !numeros && !!concatena;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [1, 5, 59, 30, [12, 14, 32]]; <br>
        const concatena = numeros.flat(); <br>

        <b> !numeros && !!concatena </b>`;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso21And();
caso22And();
caso23And();
caso24And();
caso25And();
caso26And();
caso27And();
caso28And();
caso29And();
caso30And();

// TRUE && TRUE = TRUE

function caso31And () {
    const divr = document.querySelector('.divr-31');
    const divl = document.querySelector('.divl-31');

    const animales = ['perro', 'gato', 'pollo', 'vaca'];
    const busca = animales.includes('perro');
    const busca2 = animales.includes('gato');

    const prueba = busca && busca2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const animales = ['perro', 'gato', 'pollo', 'vaca']; <br>
        const busca = animales.includes('perro'); <br>
        const busca2 = animales.includes('gato'); <br>

        <b> busca && busca2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso32And () {
    const divr = document.querySelector('.divr-32');
    const divl = document.querySelector('.divl-32');

    const cadenas = ['Hola', 'Mundo'];
    const une = cadenas.join(" ");

    const prueba = !!cadenas && !!une;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const cadenas = ['Hola', 'Mundo']; <br>
        const une = cadenas.join(" "); <br>

        <b> !!cadenas && !!une </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso33And () {
    const divr = document.querySelector('.divr-33');
    const divl = document.querySelector('.divl-33');

    // suma 3 a cada uno de los elementos del arreglo, pasa por cada elemento del arreglo y le aplica la función
    const numeros = [1,2,3,4];
    const suma = numeros.map(sum => sum + 3);

    const prueba = !!numeros && !!suma;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [1,2,3,4]; <br>
        const suma = numeros.map(sum => sum + 3); <br>

        <b> !!numeros && !!suma </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso34And () {
    const divr = document.querySelector('.divr-34');
    const divl = document.querySelector('.divl-34');

    const numeros = [1,2,3,4];
    const numMenor = numeros.map(menor => menor > 3); // false, false, false, true

    const prueba = !!numeros && numMenor[3];

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [1,2,3,4]; <br>
        const numMenor = numeros.map(menor => menor > 3); <br>

        <b> !!numeros && numMenor[3] </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso35And () {
    const divr = document.querySelector('.divr-35');
    const divl = document.querySelector('.divl-35');

    // Voltea los elementos del array
    const numeros = [1,2,3,4];
    const cambia = numeros.reverse(); // [4,3,2,1]

    const prueba = !!numeros && !!cambia;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [1,2,3,4]; <br>
        const cambia = numeros.reverse();  <br>

        <b> !!numeros && !!cambia </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso36And () {
    const divr = document.querySelector('.divr-36');
    const divl = document.querySelector('.divl-36');

    // elimina el primer elemento del array
    const personas = ['Ana', 'Luis', 'Pepe', 'Karen'];
    const elimina = personas.shift(); // ['Luis', 'Pepe', 'Karen']

    const prueba = !!personas && !!elimina;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const personas = ['Ana', 'Luis', 'Pepe', 'Karen']; <br>
        const elimina = personas.shift();  <br>

        <b> !!personas && !!elimina </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso37And () {
    const divr = document.querySelector('.divr-37');
    const divl = document.querySelector('.divl-37');

    // devuelve una copia de una parte del array
    const personas = ['Ana', 'Luis', 'Pepe', 'Karen'];
    const nombresMasculinos = personas.slice(1, 3); // ['Luis', 'Pepe'] indice y elemento en que termina

    const prueba = !!personas && !!nombresMasculinos;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const personas = ['Ana', 'Luis', 'Pepe', 'Karen']; <br>
        const nombresMasculinos = personas.slice(1, 3);  <br>

        <b> !!personas && !!nombresMasculinos </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso38And () {
    const divr = document.querySelector('.divr-38');
    const divl = document.querySelector('.divl-38');

    // comprueba si almenos un elemento cumple con la función implementada
    const numeros = [3, 7, 9, 13, 16, 23, 57];
    const condicion = numeros.some(num => num > 10); // true

    const prueba = !!numeros && condicion;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [3, 7, 9, 13, 16, 23, 57]; <br>
        const condicion = numeros.some(num => num > 10); <br>

        <b> !!numeros && condicion </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso39And () {
    const divr = document.querySelector('.divr-39');
    const divl = document.querySelector('.divl-39');

    // ordena los elementos de un array (LOS CONVIERTE EN STRING)
    const numeros = [3, 7, 90, 45, 23, 120];
    const ordena = numeros.sort((a,b) => a-b); //Utiliza "compare function" [3, 7, 23, 45, 90,120]

    const prueba = !!numeros && !!ordena;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const numeros = [3, 7, 90, 45, 23, 120]; <br>
        const ordena = numeros.sort((a,b) => a-b); <br>

        <b> !!numeros && !!ordena </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso40And () {
    const divr = document.querySelector('.divr-40');
    const divl = document.querySelector('.divl-40');

    // ordena los elementos de un array (LOS CONVIERTE EN STRING)
    let numeros = [1, 2, 3, 5, 6];
    const inserta= numeros.splice(3, 0, 4); // inserta = [] / numeros cambia => [1,2,3,4,5,6]

    const prueba = !!numeros && !!inserta;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        let numeros = [1, 2, 3, 5, 6]; <br>
        const inserta= numeros.splice(3, 0, 4); <br>

        <b> !!numeros && !!inserta </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso31And();
caso32And();
caso33And();
caso34And();
caso35And();
caso36And();
caso37And();
caso38And();
caso39And();
caso40And();