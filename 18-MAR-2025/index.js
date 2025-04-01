// Objetos globales en el navegador

//window

//document

// ¿Cómo podemos buscar?
// (HTMLDivElement, HTMLElement, Element, Node, Event target, Object)
const box = document.getElementById('box'); // Retorna: NODO (cuando encuentra el elemento) o NULL
box.style.backgroundColor = 'red';
box.style.color = 'white';
console.log(box.__proto__);

//EVENTOS
box.addEventListener('click', (event) => {
    console.log('Me dio click el usuario', event);
});
// dispatchEvent - Generas programaticamente el evento, se pueden generar eventos
box.dispatchEvent(new Event('click'));

const span = document.querySelector('span'); // Como argumento se le pasa el selector como CSS | Devuelve el primer elemento de ese tipo
span.style.backgroundColor = '#DDD';

const listOfDivs = document.querySelectorAll('div'); // Retorna una lista de nodos
console.log(listOfDivs);

// Crear elementos, etiquetas
const newDiv = document.createElement('div');
newDiv.innerText = 'Soy el div nuevo';
// Agregarlos al DOM
document.body.appendChild(newDiv);

const parentElement = document.getElementById("parentElement");
const newElement = document.createElement("div");
newElement.innerText = "Elemento insertado antes";

const referenceElement = document.getElementById("referenceElement");
parentElement.insertBefore(newElement, referenceElement);

// EVENTOS. Es una acción que el usuario realiza en el navegador
// Todas las etiquetas del navegador tienen addEventListener, dispatchEvent


// PROMESAS. Es otro objeto de JS
// Controlar acciones asíncronas

// Cuando la promesa se cumple se ejecuta el metodo resolve (fullfilled).
// Cuando la promesa no se cumple se ejecuta reject (rejected).
// El primer estado siempre va a ser (pending) "pendiente".
// resolve y reject son funciones
// La forma de controlar el código asíncrono es mediante una promesa

const callback = (resolve, reject) => {
    let exito = true;
    setTimeout(() => {
        if(exito === true) {
            resolve ('Si me amo toda la vida');
        } else {
            reject('No se cumplio');
        }
    }, 5000); // Generamos una pausa
}; // controla el estado de la promesa

const promise = new Promise (callback);
console.log(promise);

promise
.then((result) => {
    console.log(result);
    console.log(promise);
})
.catch (error => {
    console.log(error);
})

const obtenerInfoPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch(url) // devuelve el resultado de una promesa
    .then((response) => {
        console.log(response);
        return response.json(); // devuelve el resultado de una promesa
    })
    .then ( data => console.log(`Aquí obtuve la información de ditto ${data.sprites.front_default}`))
    .catch(error => console.log(error))
}

obtenerInfoPokemon();

Promise.prototype.all = function (arregloPromesas) {
    let resultsArray = []
    for (let i=0; i< arregloPromesas.length; i++) {
        arregloPromesas[i].then(() => {
            resultsArray.push(true)
        })
    }
    return resultsArray.includes(true);
}

const iterable = [Promise.resolve('EXITO 1'), Promise.resolve('EXITO 2'), Promise.resolve('EXITO 3')];
Promise.all(iterable)
.then(() => {
    console.log('se resolvieron todas las promesas');
})

// Promise.all = (iterable) => {
//     const promiseAll = new Promise();
//     let flag = false;
//     iterable.forEach((promise) => {
//         promise.then((result) => {
//             flag = true;
//         })
//         .catch(() => {
//             flag = false;
//         }) 
//     });
//     if(flag) {
//         return promiseAll.resolve()
//     } else {
//         return promiseAll.reject()
//     }
// }


// class Promise {
//     constructor(){
//         this.state = 'pending';
//     }
//     static all(iterable) {

//     }
//     static resolve() {
//         this.state = 'fulfilled';
//     }
//     then(obj) {

//     }
// }