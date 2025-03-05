const contenedor = document.querySelector('.container');
const formulario = document.querySelector('form');
const nombreIngresado = document.querySelector('#nombre');
const passIngresada = document.querySelector('#password');

const nombre = 'Monse';
const pass = 'Monse123';

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    validaCredenciales();
})
function validaCredenciales () {
    if (nombreIngresado.value === nombre && passIngresada.value === pass) {
        // console.log('Credenciales correctas');
        window.location.href = 'cv.html';
    } else {
        // console.log('Credenciales incorrectas');
        mostrarMensaje('Las credenciales ingresadas son incorrectas, intentelo de nuevo');
    }
}

function mostrarMensaje (mensaje) {
    const errorMensaje = document.createElement('P');
    errorMensaje.textContent = mensaje;
    errorMensaje.classList.add('errorMensaje');

    contenedor.appendChild(errorMensaje);

    setTimeout(() => {
        errorMensaje.remove();
    }, 3000);
}