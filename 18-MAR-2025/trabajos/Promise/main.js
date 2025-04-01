const pizzaPeperoni = new Promise ((resolve, reject) => {
    const pizzaLista = true;
    setTimeout(() => {
        if (pizzaLista) {
            resolve('¡La pizza de peperoni esta lista!');
        } else {
            reject('La pizza no pudo ser entregada :(');
        }
    }, 5000);
});

const pizzaHawaina = new Promise ((resolve,reject) => {
    const pizzaLista = true;
    setTimeout(() => {
        if(pizzaLista) {
            resolve('¡La pizza Hawaina está lista!');
        } else {
            reject('La pizza no pudo ser entregada :(');
        }
    }, 3000);
});

const pizzaTresQuesos = new Promise((resolve, reject) => {
    const pizzaLista = true;
    setTimeout(() => {
        if(pizzaLista) {
            resolve('¡La pizza de tres quesos está lista!');
        } else {
            reject('La pizza no pudo ser entregada :(');
        }
    }, 2000)
});

Promise.all([pizzaPeperoni, pizzaHawaina, pizzaTresQuesos])
.then(result => console.log(result))

Promise.allSettled([pizzaPeperoni, pizzaHawaina, pizzaTresQuesos])
.then(result => console.log(result))

Promise.any([pizzaPeperoni, pizzaHawaina, pizzaTresQuesos])
.then(result => console.log(result))

Promise.race([pizzaPeperoni, pizzaHawaina, pizzaTresQuesos])
.then(result => console.log(result))
// Promise.myOwnAll = function(iterable) {
//     return new Promise((resolve, reject) => {

//         if (iterable && typeof iterable[Symbol.iterator] === 'function') {
            
//             let resultados = [];
//             let completadas = 0;
//             let total = 0;
//             let i = 0;  

//             for (const promesa of iterable) {
//                 const index = i;  
//                 i++;
//                 total++;

//                 Promise.resolve(promesa)
//                     .then(valor => {
//                         resultados[index] = valor;  
//                         completadas++;
//                         if (completadas === total) {
//                             resolve(resultados);  
//                         }
//                     })
//                     .catch(error => {
//                         reject(error);  
//                     });
//             }

    
//             if (total === 0) {
//                 resolve([]);
//             }

//         } else {
//             reject(new TypeError('Se necesita un objeto iterable'));
//         }
//     });
// };

// Promise.myOwnAll([pizzaPeperoni, pizzaHawaina, pizzaTresQuesos])
// .then(result => console.log(result));