// FALSE || FALSE = FALSE

function caso1Or () {
    const divr = document.querySelector('.divr-1');
    const divl = document.querySelector('.divl-1');

    // invierte el orden del array original, pero crea una copia.
    let numeros = [1, 2, 3, 5, 6];
    const numeros2= numeros.toReversed(); // [6, 5, 3, 2, 1]

    const prueba = !numeros || !numeros2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        let numeros = [1, 2, 3, 5, 6]; <br>
        const numeros2= numeros.toReversed(); <br>

        <b> !numeros || !numeros2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso2Or () {
    const divr = document.querySelector('.divr-2');
    const divl = document.querySelector('.divl-2');

    // devuelve una cadena de caracteres
    const datos = [1, 2, 'aA', 'bB'];
    const cadena = datos.toString(); // [6, 5, 3, 2, 1]

    const prueba = !datos || !cadena;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const datos = [1, 2, 'aA', 'bB']; <br>
        const cadena = datos.toString(); <br>

        <b> !datos || !cadena </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso3Or () {
    const divr = document.querySelector('.divr-3');
    const divl = document.querySelector('.divl-3');

    // agrega uno o más elementos al inicio del array (modifica el original, devuelve una nueva longitud)
    const datos = [1, 2, 3];
    const agrega = datos.unshift(4, 5, 6); // [4, 5, 1, 2, 3] / pinta el último elemento agregado

    const prueba = !datos || !agrega;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const datos = [1, 2, 3]; <br>
        const agrega = datos.unshift(4, 5, 6); <br>

        <b> !datos || !agrega </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso4Or () {
    const divr = document.querySelector('.divr-4');
    const divl = document.querySelector('.divl-4');

    // agrega un elemento al array en la posición que se indique
    const arreglo = [1, 2, , 4, , 6];
    const agrega = arreglo.with(0, 2); // [2, 2, undefined, 4, undefined, 5] / pinta el último elemento agregado

    const prueba = !agrega || !!agrega[2];

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const arreglo = [1, 2, , 4, , 6]; <br>
        const agrega = arreglo.with(0, 2);<br>

        <b> !agrega || !!agrega[2] </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso5Or () {
    const divr = document.querySelector('.divr-5');
    const divl = document.querySelector('.divl-5');

    // copia las propiedades de uno o más objetos fuente a un objeto destino.
    const objeto1 = {a: 1};
    const objeto2 = {b: 2, c: 3}; 
    const newObject = Object.assign({}, objeto1, objeto2); 

    const prueba = !objeto2 || !newObject;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const objeto1 = {a: 1}; <br>
        const objeto2 = {b: 2, c: 3}; <br>
        const newObject = Object.assign({}, objeto1, objeto2); <br>

        <b> !objeto2 || !newObject </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso6Or () {
    const divr = document.querySelector('.divr-6');
    const divl = document.querySelector('.divl-6');

    // devuelve true si tiene la propiedad especificada
    const objeto1 = {a: 1};
    const tiene = Object.hasOwn(objeto1, "a");
    const tiene2 = Object.hasOwn(objeto1, "b");

    const prueba = !tiene || tiene2;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const objeto1 = {a: 1}; <br>
        const tiene = Object.hasOwn(objeto1, "a"); <br>
        const tiene2 = Object.hasOwn(objeto1, "b"); <br>

        <b> !tiene || tiene2 </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso7Or () {
    const divr = document.querySelector('.divr-7');
    const divl = document.querySelector('.divl-7');

    // determina si 2 elementos son iguales
    const uno = Object.is(123, 123); // true
    const dos = Object.is('hola', 'aloh'); // true

    const prueba = !uno || dos;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const uno = Object.is(123, 123); <br>
        const dos = Object.is('hola', 'aloh'); <br>

        <b> !uno || dos </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso8Or () {
    const divr = document.querySelector('.divr-8');
    const divl = document.querySelector('.divl-8');

    // determina si 2 elementos son iguales
    const uno = Object.is(null, undefined); // false
    const dos = Object.is(NaN, 0); // false

    const prueba = uno || dos;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const uno = Object.is(null, undefined); <br>
        const dos = Object.is(NaN, 0); <br>

        <b> uno || dos </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso9Or () {
    const divr = document.querySelector('.divr-9');
    const divl = document.querySelector('.divl-9');

    // determina si 2 elementos son iguales
    const uno = Object.is(true, 1); // false
    const dos = Object.is(false, 0); // false

    const prueba = uno || dos;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const uno = Object.is(true, 1); <br>
        const dos = Object.is(false, 0); <br>

        <b> uno || dos </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso10Or () {
    const divr = document.querySelector('.divr-10');
    const divl = document.querySelector('.divl-10');

    // determina si 2 elementos son iguales
    const objeto1 = {nombre: 'Juan', edad: 30};
    const objeto2 = {nombre: 'Juan', edad: 30};
    const uno = Object.is(objeto1, objeto2); // false - son diferentes en memoria

    const prueba = !objeto1 || uno;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = `
        const objeto1 = {nombre: 'Juan', edad: 30}; <br>
        const objeto2 = {nombre: 'Juan', edad: 30}; <br>
        const uno = Object.is(objeto1, objeto2); <br>

        <b> !objeto1 || uno </b> `;

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso1Or();
caso2Or();
caso3Or();
caso4Or();
caso5Or();
caso6Or();
caso7Or();
caso8Or();
caso9Or();
caso10Or();

// TRUE || FALSE = TRUE

function caso11Or () {
    const divr = document.querySelector('.divr-11');
    const divl = document.querySelector('.divl-11');

    const prueba = !!5 || !!'';

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !5 || !!"" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso12Or () {
    const divr = document.querySelector('.divr-12');
    const divl = document.querySelector('.divl-12');

    const prueba = !!'10' || !'20';

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!"10" || !"20" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso13Or () {
    const divr = document.querySelector('.divr-13');
    const divl = document.querySelector('.divl-13');

    const prueba = !!10 || !"hola";

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!10 || !"hola" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso14Or () {
    const divr = document.querySelector('.divr-14');
    const divl = document.querySelector('.divl-14');

    const prueba = !!(5+5) || !10;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!(5+5) || !10 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso15Or () {
    const divr = document.querySelector('.divr-15');
    const divl = document.querySelector('.divl-15');

    const prueba = !!'hola' || !(10 * 3 + 5);

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!"hola" || !(10 * 3 + 5)<b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso16Or () {
    const divr = document.querySelector('.divr-16');
    const divl = document.querySelector('.divl-16');

    const prueba = !!7 || false;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!7 || false <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso17Or () {
    const divr = document.querySelector('.divr-17');
    const divl = document.querySelector('.divl-17');

    const prueba = !!1290 || !true;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!1290 || !true <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso18Or () {
    const divr = document.querySelector('.divr-18');
    const divl = document.querySelector('.divl-18');

    const prueba = !!'true' || !true;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!"true" || !true <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso19Or () {
    const divr = document.querySelector('.divr-19');
    const divl = document.querySelector('.divl-19');

    const prueba = !![1] || 1;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !![1] || 1 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso20Or () {
    const divr = document.querySelector('.divr-20');
    const divl = document.querySelector('.divl-20');

    const prueba = !![1] || !1;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !![1] || 1 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso11Or();
caso12Or();
caso13Or();
caso14Or();
caso15Or();
caso16Or();
caso17Or();
caso18Or();
caso19Or();
caso20Or();

// FALSE || TRUE = TRUE

function caso21Or () {
    const divr = document.querySelector('.divr-21');
    const divl = document.querySelector('.divl-21');

    const prueba = !!false || !!"Hola";

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!false || !!"Hola" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso22Or () {
    const divr = document.querySelector('.divr-22');
    const divl = document.querySelector('.divl-22');

    const prueba = !!null || !!"Texto";

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!null || !!"Texto" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso23Or () {
    const divr = document.querySelector('.divr-23');
    const divl = document.querySelector('.divl-23');

    const prueba = !!undefined || !!123;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!undefined || !!123 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso24Or () {
    const divr = document.querySelector('.divr-24');
    const divl = document.querySelector('.divl-24');

    const prueba = !!"" || true;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!"" || !true <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso25Or () {
    const divr = document.querySelector('.divr-25');
    const divl = document.querySelector('.divl-25');

    const prueba = !!NaN || !!3.14;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!NaN || !!3.14 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso26Or () {
    const divr = document.querySelector('.divr-26');
    const divl = document.querySelector('.divl-26');

    const prueba = !!0 || !!"Sí";

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!0 || !!"Sí" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso27Or () {
    const divr = document.querySelector('.divr-27');
    const divl = document.querySelector('.divl-27');

    const prueba = !!false || !!{};

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!false || !!{} <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso28Or () {
    const divr = document.querySelector('.divr-28');
    const divl = document.querySelector('.divl-28');

    const prueba = !!null || !![];

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!null || !![] <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso29Or () {
    const divr = document.querySelector('.divr-29');
    const divl = document.querySelector('.divl-29');

    const prueba = !!0 || !!function(){};

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!0 || !!function(){} <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso30Or () {
    const divr = document.querySelector('.divr-30');
    const divl = document.querySelector('.divl-30');

    const prueba = !!NaN || !!new Date();

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!NaN || !!new Date() <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso21Or();
caso22Or();
caso23Or();
caso24Or();
caso25Or();
caso26Or();
caso27Or();
caso28Or();
caso29Or();
caso30Or();

// TRUE || TRUE = TRUE

function caso31Or () {
    const divr = document.querySelector('.divr-31');
    const divl = document.querySelector('.divl-31');

    const prueba = !![1] || !!1;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !![1] || !!1 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso32Or () {
    const divr = document.querySelector('.divr-32');
    const divl = document.querySelector('.divl-32');

    const prueba = !![] || !0;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !![] || !0 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso33Or () {
    const divr = document.querySelector('.divr-33');
    const divl = document.querySelector('.divl-33');

    const prueba = !!{} || !"";

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!{} || !"" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso34Or () {
    const divr = document.querySelector('.divr-34');
    const divl = document.querySelector('.divl-34');

    const prueba = !!"hola" || !null;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!"hola" || !null <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso35Or () {
    const divr = document.querySelector('.divr-35');
    const divl = document.querySelector('.divl-35');

    const prueba = !!42 || !undefined;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!42 || !undefined <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso36Or () {
    const divr = document.querySelector('.divr-36');
    const divl = document.querySelector('.divl-36');

    const prueba = !!true || !false;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!true || !false <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso37Or () {
    const divr = document.querySelector('.divr-37');
    const divl = document.querySelector('.divl-37');

    const prueba = !!" " || !NaN;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!" " || !NaN <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso38Or () {
    const divr = document.querySelector('.divr-38');
    const divl = document.querySelector('.divl-38');

    const prueba = !!Infinity || !0;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!Infinity || !0 <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso39Or () {
    const divr = document.querySelector('.divr-39');
    const divl = document.querySelector('.divl-39');

    const prueba = !!"0" || !null;

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!"0" || !null <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

function caso40Or () {
    const divr = document.querySelector('.divr-40');
    const divl = document.querySelector('.divl-40');

    const prueba = !!new Date() || !"";

    const casoAndExpresion = document.createElement('P');
    casoAndExpresion.innerHTML = '<b> !!new Date() || !"" <b>';

    const casoAndResult = document.createElement('P');
    casoAndResult.textContent = (`Resultado: ${prueba}`);

    divr.appendChild(casoAndResult);
    divl.appendChild(casoAndExpresion);
}

caso31Or();
caso32Or();
caso33Or();
caso34Or();
caso35Or();
caso36Or();
caso37Or();
caso38Or();
caso39Or();
caso40Or();