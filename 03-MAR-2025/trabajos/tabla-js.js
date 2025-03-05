const formulario = document.querySelector('form');
const tabla = document.querySelector('.tabla tbody');

const nombreLibro = document.querySelector('#nombre-libro');
const precioLibro = document.querySelector('#precio');
const opcionGenero = document.querySelector('#genero');
const descripcionLibro = document.querySelector('#descripcion-libro');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    agregarFila();
});

function agregarFila() {
    if (!nombreLibro.value || !precioLibro.value || !opcionGenero.value || !descripcionLibro.value) {
        mostrarError('Todos los campos son obligatorios');
        return;
    }
    const opcionSeleccionada = document.querySelector('input[name="disponibilidad"]:checked');

    if (!opcionSeleccionada) {
        mostrarError('Selecciona una opción de disponibilidad');
        return;
    }

    // Modificar el valor después de declararlo
    let disponibilidadTexto = "";
    let disponibilidadClase = "";

    if (opcionSeleccionada.value === "opt1-dis") {
        disponibilidadTexto = "Disponible";
        disponibilidadClase = "bg-green";
    } else if (opcionSeleccionada.value === "opt2-dis") {
        disponibilidadTexto = "No disponible";
        disponibilidadClase = "bg-red";
    }

    const nuevaFila = document.createElement('tr');

    nuevaFila.innerHTML = `
        <td>${nombreLibro.value}</td>
        <td>${descripcionLibro.value}</td>
        <td>${opcionGenero.value}</td>
        <td>${precioLibro.value}</td>
        <td class="${disponibilidadClase}">${disponibilidadTexto}</td>
    `;

    tabla.appendChild(nuevaFila);

    formulario.reset();
}

function mostrarError(mensaje) {
    const mensajePrevio = document.querySelector('.mensaje-error');
    if (mensajePrevio) mensajePrevio.remove();

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('mensaje-error');
    formulario.appendChild(mensajeError);

    setTimeout(() => mensajeError.remove(), 3000);
}

