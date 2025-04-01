// Verificar si un Usuario ya ha Iniciado Sesión (Set)
// Dado un conjunto de usuarios en sesión, verifica si uno en específico ya inició sesión.

const primeraSesion = ['Juan', 'Mariana', 'Ana', 'Luis'];
// console.log(usuarios);
const sesionUno = new Set(primeraSesion); // Creo un nuevo set, imaginemos que vuelven a iniciar sesion

const segundaSesion = ['Luis', 'Ana', 'Ana', 'Monica', 'Ricardo'];
const sesionDos = new Set(segundaSesion); //Crea otro set, para comparar con el primero, porque imaginamos que hubo 2 inicios de sesion

// console.log(sesionUno.intersection(sesionDos)); //Me muestra los usuarios repetidos

const usuariosRepetidos = Array.from(sesionUno.intersection(sesionDos));


usuariosRepetidos.forEach(function(nombre){
    console.log(`El usuario ${nombre} esta ya ha inicidado sesión`);
});
