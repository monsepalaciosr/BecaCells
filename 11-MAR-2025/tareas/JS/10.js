// Registro de Asistencia en una Clase
// Crea un sistema que registre alumnos y su asistencia (presente o ausente). Luego, muestra cuántos asistieron.

const alumnos = [
    {nombre: 'Andrea', apellido: 'Rodríguez', asistencia: 'presente'},
    {nombre: 'Bruno', apellido: 'Fernández', asistencia: 'presente'},
    {nombre: 'Carolina', apellido: 'Gómez', asistencia: 'ausente'},
    {nombre: 'Daniel', apellido: 'López', asistencia: 'presente'},
    {nombre: 'Esteban', apellido: 'Morales', asistencia: 'presente'},
    {nombre: 'Fernanda', apellido: 'Sánchez', asistencia: 'presente'},
    {nombre: 'Gabriel', apellido: 'Ramírez', asistencia: 'ausente'},
    {nombre: 'Helena', apellido: 'Torres', asistencia: 'ausente'},
    {nombre: 'Ignacio', apellido: 'Vargas', asistencia: 'presente'},
    {nombre: 'Julieta', apellido: 'Méndez', asistencia: 'presente'}
];

const alumnosAsistieron = alumnos.filter(asistieron => asistieron.asistencia === 'presente');
console.table(alumnosAsistieron);

const totalAsistencia = alumnosAsistieron.length;
console.log(`Asistieron un total de ${totalAsistencia} alumnos.`);