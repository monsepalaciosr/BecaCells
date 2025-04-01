// Gestión de Citas Médicas
// Crea un sistema que registre citas médicas con fecha, paciente y doctor. Luego, muestra las citas futuras.
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const fecha = document.querySelector('#fecha');
const doctor = document.querySelector('#doctor');
const formulario = document.querySelector('.form');

const datos = {
    nombre: '',
    apellido: '',
    fecha: '',
    doctor: ''
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let fechaHoy = new Date();
    fechaHoy.setHours(0, 0, 0, 0); 

    let fechaIngresada = new Date(fecha.value + "T00:00:00");
    fechaIngresada.setHours(0, 0, 0, 0); 


    datos.nombre = nombre.value;
    datos.apellido = apellido.value;
    datos.fecha = fecha.value;
    datos.doctor = doctor.value;

    if (fechaIngresada >= fechaHoy) {
        console.log(datos);
    }
});

