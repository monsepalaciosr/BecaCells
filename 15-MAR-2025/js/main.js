const tableBody = document.querySelector('.table-body'); 

const metodosDatos = {
    'estaticos': {
        'Array.from()': {
        descripcion: 'Permite crear un nuevo array a partir de un objeto iterable.',
        ejemplo: () => {
            const set = new Set(['manzana', 'pera', 'banana', 'manzana']);
            return `const set = new Set(['manzana', 'pera', 'banana', 'manzana']); <br><br>
                    const result = Array.from(set); <br><br>
                    <strong>El resultado es:</strong> ${Array.from(set)}`; 
                }
        },
        'Array.fromAsync()': {
            descripcion: 'Método asíncrono que convierte un objeto iterable o una promesa de un iterable en un array.',
            ejemplo: async () => {
                async function* asyncGenerator() {
                    yield 1;
                    yield 2;
                }
                const result = await Array.fromAsync(asyncGenerator());
                return `async function* asyncGenerator() { yield 1; yield 2; }; <br><br>
                        const result = await Array.fromAsync(asyncGenerator()); <br><br>
                        <strong>Resultado:</strong> ${result}`;
            }
        },
        'Array.isArray()' : {
            descripcion : 'Verifica si un valor es un array o no. Devuelve "true" si el valor es un array y devuevle "false" si no lo es.',
            ejemplo : () => {
                const ejemplo = Array.isArray([1,2,3,4]);
                const result = ejemplo;
        
                return `const ejemplo = Array.isArray([1,2,3,4]); <br> <br>
                        const result = ejemplo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.of()' : {
            descripcion: 'Crea un nuevo array a partir de los argumentos que le pases, sin importrar la cantidad o el tipo.',
            ejemplo : () => { 
                const ejemplo = Array.of(1,2,3,4);
                const result = ejemplo;

                return `const ejemplo = Array.isArray([1,2,3,4]); <br> <br>
                        const result = ejemplo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        }
    },

    'instancia': {
        'Array.prototype.at()' : {
            descripcion: 'Permite acceder a un elemento de un array utilizando un índice. Acepta índices negativos, lo que facilita obtener elementos desde el final del array.',
            ejemplo : () => { 
                const ejemplo = [1, 2, 3, 4];
                const result = ejemplo.at(1);

                return `const ejemplo = [1, 2, 3, 4]; <br> <br>
                        const result = ejemplo.at(1); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.concat()' : {
            descripcion: 'Se usa para unir dos o más arrays. No cambia los arrays existentes, devuelve un nuevo array.',
            ejemplo : () => { 
                const array1 = [1, 2, 3, 4];
                const array2 = [5, 6, 7, 8];
                const result = array1.concat(array2);

                return `const array1 = [1, 2, 3, 4]; <br> <br>
                        const array2 = [5, 6, 7, 8]; <br> <br>
                        const result = array1.concat(array2); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.copyWithin()' : {
            descripcion: 'Copia una parte del array a otra ubicación del mismo array, sin modificar la longitud del array. Modifica el array original.',
            ejemplo : () => { 
                const array1 = [1, 2, 3, 4];
                const result = array1.copyWithin(2, 0, 2); //1,2,1,2

                return `const array1 = [1, 2, 3, 4]; <br> <br>
                        const result = array1.copyWithin(2, 0, 1); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.entries()' : {
            descripcion: 'Crea un nuevo iterador que contiene pares clave-valor para elemento del array.',
            ejemplo : () => { 
                const letras = ['a', 'b', 'c'];
                const iterador = letras.entries();
                result = iterador.next().value;

                return `const letras = ['a', 'b', 'c']; <br> <br>
                        const iterador = letras.entries(); <br> <br>
                        result = iterador.next().value; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.every()' : {
            descripcion: 'Verifica si todos los elementos de un array cumplen con una condición específica',
            ejemplo : () => { 
                const arreglo = [2, 4, 6];
                const result = arreglo.every(num => num > 0);

                return `const arreglo = [2, 4, 6]; <br> <br>
                        const result = arreglo.every(num => num > 0); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.fill()' : {
            descripcion: 'Cambia todos los elementos de un array por un valor estático, desde un índice inicial hasta un índice final.',
            ejemplo : () => { 
                const arreglo = [1, 2, 4, 6];
                const result = arreglo.fill(3);

                return `const arreglo = [1, 2, 4, 6]; <br> <br>
                        const result = arreglo.fill(3); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.filter()' : {
            descripcion: 'Crea un nuevo array con todos los elementos que pasen una condición especificada en la función callback.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.filter(num => num < 20);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.filter(num => num < 20);<br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.find()' : {
            descripcion: 'Devuelve el primer elemento del array que cumple la función de prueba proporcionada.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.find(num => num > 10);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.find(num => num > 10); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.findIndex()' : {
            descripcion: 'Devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.findIndex(num => num > 10);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.findIndex(num => num > 10); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.findLast()' : {
            descripcion: 'Encuentra el último elemento de un array que cumple con una condición especificada en una función callback.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.findLast(num => num > 10);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.findLast(num => num > 10); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.findLastIndex()' : {
            descripcion: 'Devuelve el índice del último elemento de un array que cumpla con una condición especificada en una función callback.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.findLastIndex(num => num > 10);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.findLastIndex(num => num > 10); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.flat()' : {
            descripcion: 'Se utiliza para anidar un array que contiene otros arrays.',
            ejemplo : () => { 
                const arreglo = [5, 10, [15, 20], 25];
                const result = arreglo.flat();

                return `const arreglo = [5, 10, [15, 20], 25]; <br> <br>
                        const result = arreglo.flat(); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.flatMap()' : {
            descripcion: 'Este método primero transforma cada elemento de un array utilizando una función de mapeo y luego anida el resultado a un solo nivel.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.flatMap(num => num * 2);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.flatMap(num => num * 2); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.forEach()' : {
            descripcion: 'Ejecuta la función indicada una vez por cada elemento del array.',
            ejemplo : () => { 
                const frutas = ['manzana', 'banana', 'cereza'];

                frutas.forEach((fruta, indice, array) => {
                    array[indice] = fruta.toUpperCase();
                });

                const result = frutas;

                return `const frutas = ['manzana', 'banana', 'cereza']; <br> <br>
                        frutas.forEach((fruta, indice, array) => { <br>
                        array[indice] = fruta.toUpperCase(); <br>
                        }); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.includes()' : {
            descripcion: 'Determina si un arreglo incluye un determinado elemento, devuelve true o false según corresponda.',
            ejemplo : () => { 
                const arreglo = ['perro', 'gato', 'pato', 'buho'];
                const result = arreglo.includes('gato');

                return `const arreglo = ['perro', 'gato', 'pato', 'buho']; <br> <br>
                        const result = arreglo.includes('gato') <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.indexOf()' : {
            descripcion: 'Retorna el primer índice en el que se puede encontrar un elemento dado en el array.',
            ejemplo : () => { 
                const arreglo = ['perro', 'gato', 'pato', 'buho'];
                const result = arreglo.indexOf('pato');

                return `const arreglo = ['perro', 'gato', 'pato', 'buho']; <br> <br>
                        const result = arreglo.indexOf('pato'); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.join()' : {
            descripcion: 'Une todos los elementos de un array en una cadena y devuelve esta cadena',
            ejemplo : () => { 
                const arreglo = ['perro', 'gato', 'pato', 'buho'];
                const result = arreglo.join('-');

                return `const arreglo = ['perro', 'gato', 'pato', 'buho']; <br> <br>
                        const result = arreglo.join('-'); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.keys()' : {
            descripcion: 'Devuelve un nuevo objeto Array Iterator que contiene las claves (índices) de los elementos en un array. Permite iterar sobre los índices del array.',
            ejemplo : () => { 
                const obj = { a: 1, b: 2, c: 3 };
                const array = Object.keys(obj);
                const result = array;

                return `const obj = { a: 1, b: 2, c: 3 }; <br> <br>
                        const array = Object.keys(obj); <br> <br>
                        const result = array; <br> <brZ
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.lastIndexOf()' : {
            descripcion: 'Devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo. Devuelve -1 si el elemento no se encuentra.',
            ejemplo : () => { 
                const arreglo = ['perro', 'gato', 'pato', 'buho'];
                const result = arreglo.lastIndexOf('buho');

                return `const arreglo = ['perro', 'gato', 'pato', 'buho']; <br> <br>
                        const result = arreglo.lastIndexOf('buho'); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.map()' : {
            descripcion: 'Crea un nuevo array con los resultados de la llamada a la función indicada, se aplica a cada uno de sus elementos',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.map(num => num + 2);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.map(num => num + 2); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.pop()' : {
            descripcion: 'Elimina el último elemento de un array y lo devuelve.',
            ejemplo : () => { 
                const frutas = ['manzana', 'pera', 'piña', 'fresa'];
                const result = frutas.pop();

                return `const frutas = ['manzana', 'pera', 'piña', 'fresa']; <br> <br>
                        const result = frutas.pop(); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.push()' : {
            descripcion: 'Añade uno o más elementos al final de un array. Devuelve una nueva longitud del array.',
            ejemplo : () => { 
                const frutas = ['manzana', 'pera', 'piña', 'fresa'];
                const result = frutas.push('mango', 'uva');

                return `const frutas = ['manzana', 'pera', 'piña', 'fresa']; <br> <br>
                        const result = frutas.push('mango', 'uva'); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.reduce()' : {
            descripcion: 'Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado su único valor.',
            ejemplo : () => { 
                const palabras = ['Yo', 'como', 'mucha', 'verdura'];
                const frase = palabras.reduce((acumulador, palabra) => {
                    return acumulador + ' ' + palabra;
                }, '');
                const result = frase;

                return `const palabras = ['Yo', 'como', 'mucha', 'verdura']; <br> <br>
                        const frase = palabras.reduce((acumulador, palabra) => { <br>
                        return acumulador + ' ' + palabra; <br>
                        }, ''); <br> <br>
                        const result = frase; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.reduceRight()' : {
            descripcion: 'Recorre el arreglo de derecha a izquierda. Lo reduce a un único valor.',
            ejemplo : () => { 
                const palabras = ['Yo', 'como', 'mucha', 'verdura'];
                const frase = palabras.reduceRight((acumulador, palabra) => {
                    return acumulador + ' ' + palabra;
                }, '');
                const result = frase;

                return `const palabras = ['Yo', 'como', 'mucha', 'verdura']; <br> <br>
                        const frase = palabras.reduce((acumulador, palabra) => { <br>
                        return acumulador + ' ' + palabra; <br>
                        }, ''); <br> <br>
                        const result = frase; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.reverse()' : {
            descripcion: 'Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.reverse();

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.reverse; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.shift()' : {
            descripcion: 'Elimina el primer elemento del array y lo retorna. Modifica la longitud del array.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.shift();

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.shift();<br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.slice()' : {
            descripcion: 'Se utiliza para crear una nueva copia superficial de una porción del array original, sin modificar el array original',
            ejemplo : () => { 
                const arreglo = ['a', 'b', 'c', 'd', 'e'];
                const result = arreglo.slice(1, 4);

                return `const arreglo = ['a', 'b', 'c', 'd', 'e']; <br> <br>
                        const result = arreglo.slice(1, 4); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.some()' : {
            descripcion: 'Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. Devuelve un valor booleano.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.some(num => num > 10);

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.some(num => num > 10); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.sort()' : {
            descripcion: 'Convierte los elementos a cadenas y los ordena en orden alfabétoco. Puede causar resultados inesperados con números. Modifica el array original.',
            ejemplo : () => { 
                const arreglo = ['e', 'c', 'b', 'a', 'd'];
                const result = arreglo.sort();

                return `const arreglo = ['e', 'c', 'b', 'a', 'd']; <br> <br>
                        const result = arreglo.sort(); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.splice()' : {
            descripcion: 'Cambia el contenido de un array, eliminando elementos existentes y/o agregando nuevos elementos.',
            ejemplo : () => { 
                const arreglo = ['a', 'b', 'd', 'e'];
                arreglo.splice(2, 0, 'c');
                const result = arreglo;

                return `const arreglo = ['a', 'b', 'd', 'e']; <br> <br>
                        arreglo.splice(2, 0, 'c'); <br> <br>
                        const result = arreglo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.toLocaleString()' : {
            descripcion: 'Devuelve una cadena de texto representando los elementos del array.',
            ejemplo : () => { 
                const numeros = [1234567.89, 9876543.21];
                const result = numeros.toLocaleString('es-MX');

                return `const numeros = [1234567.89, 9876543.21]; <br> <br>
                        const result = numeros.toLocaleString('es-MX'); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.toReversed()' : {
            descripcion: 'Invierte un array. Devuelve un nuevo array.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const nuevoArreglo = arreglo.toReversed();
                const result = nuevoArreglo;

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const nuevoArreglo = arreglo.toReversed(); <br> <br>
                        const result = nuevoArreglo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.toSorted()' : {
            descripcion: 'Ordena un array. Devuelve un nuevo array.',
            ejemplo : () => { 
                const arreglo = ['e', 'c', 'b', 'a', 'd'];
                const nuevoArreglo = arreglo.toSorted();
                const result = nuevoArreglo;

                return `const arreglo = ['e', 'c', 'b', 'a', 'd']; <br> <br>
                        const nuevoArreglo = arreglo.toSorted(); <br> <br>
                        const result = nuevoArreglo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.toSpliced()' : {
            descripcion: 'Modifica un array. Devuelve un nuevo array.',
            ejemplo : () => { 
                const arreglo = ['a', 'b', 'd', 'e'];
                const nuevoArreglo = arreglo.toSpliced(2, 0, 'c');
                const result = nuevoArreglo;

                return `const arreglo = ['a', 'b', 'd', 'e']; <br> <br>
                        arreglo.splice(2, 0, 'c'); <br> <br>
                        const result = arreglo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.toString()' : {
            descripcion: 'Convierte un array en una cadena de texto, separando los elementos con comas.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.toString();

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.toString(); <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.unshift()' : {
            descripcion: 'Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.',
            ejemplo : () => { 
                const arreglo = [4, 5];
                arreglo.unshift(1, 2, 3);
                const result = arreglo;

                return `const arreglo = [4, 5]; <br> <br>
                        arreglo.unshift(1, 2, 3); <br> <br>
                        const result = arreglo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.values()' : {
            descripcion: 'Devuelve un iterador de los valores de un array.',
            ejemplo : () => { 
                const colores = ['rojo', 'verde', 'azul'];
                const iterador = colores.values();
                const result = iterador.next().value;

                return `const colores = ['rojo', 'verde', 'azul']; <br> <br>
                        const iterador = colores.values(); <br> <br>
                        const result = iterador.next().value; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.with()' : {
            descripcion: 'Permite crear una copia del array con un elemento modificado en una posición específica, sin alterar el array original.',
            ejemplo : () => { 
                const frutas = ['uva', 'manzana', 'pera'];
                const nuevoArreglo = frutas.with(1, 'platano');
                const result = nuevoArreglo;

                return `const frutas = ['uva', 'manzana', 'pera']; <br> <br>
                        const nuevoArreglo = frutas.with(1, 'platano'); <br> <br>
                        const result = nuevoArreglo; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype[@@iterator]()' : {
            descripcion: 'Permite que los arrays sean iterables en un "for... of", y en otros contextos que requieren iteradores. Se utiliza para recorrer los elementos de un array de manera más eficiente y flexible.',
            ejemplo : () => { 
                const colores = ['rojo', 'verde', 'azul'];
                const copiaColores = [...colores];
                const result = copiaColores;

                return `const colores = ['rojo', 'verde', 'azul']; <br> <br>
                        const copiaColores = [...colores]; <br> <br>
                        const result = copiaColores; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.length' : {
            descripcion: 'Establece o devuelve la cantidad de elementos en el array.',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const result = arreglo.length;

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const result = arreglo.length; <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        },
        'Array.prototype.[@@unscopables]' : {
            descripcion: 'Se usa para controlar qué métodos o propiedades de un array no deven ser accesibles a través de una estructura de bloque "with".',
            ejemplo : () => { 
                const arreglo = [5, 10, 15, 20, 25];
                const tamaño = arreglo.length;
                const result = tamaño;
                Array.prototype[Symbol.unscopables] = {
                    length: true
                };
                with (arreglo) {
                    const verWith = length;
                }

                return `const arreglo = [5, 10, 15, 20, 25]; <br> <br>
                        const tamaño = arreglo.length; <br> <br>
                        const result = tamaño; <br> <br>
                        Array.prototype[Symbol.unscopables] = { <br>
                        length: true <br>
                        }; <br>
                        with (arreglo) { <br>
                            const verWith = length; <br>
                        } <br> <br>
                        <strong>El resultado es:</strong> ${result}`; }
        }
    }
    
};

function agregarCabecera(titulo) {
    const row = document.createElement('tr');
    const th = document.createElement('th');

    th.textContent = titulo;
    th.setAttribute('colspan', 3);

    row.appendChild(th);
    tableBody.appendChild(row);
}

async function mostrarMetodo(tipoMetodo, grupo) {
    agregarCabecera(`Métodos ${tipoMetodo}`);

    for (const metodo in grupo) {
        const row = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = metodo;

        const celdaDescripcion = document.createElement('td');
        celdaDescripcion.textContent = grupo[metodo].descripcion;

        const celdaEjemplo = document.createElement('td');
        celdaEjemplo.innerHTML = await grupo[metodo].ejemplo();

        row.appendChild(celdaNombre);
        row.appendChild(celdaDescripcion);
        row.appendChild(celdaEjemplo);

        tableBody.appendChild(row);
    }
}

(async () => {
    await mostrarMetodo('Estáticos', metodosDatos.estaticos);
    await mostrarMetodo('Instancia', metodosDatos.instancia);
})();




