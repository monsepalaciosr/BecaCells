// Lista de estudiantes y promedios
// Dado un arreglo de estudiantes con sus notas, calcula su promedio y determina si aprobaron (nota mínima 6).

const estudiantes = [
    {nombre: 'Pedro', nota: 8.5 },
    {nombre: 'Ana', nota: 6.0 },
    {nombre: 'Luis', nota: 7.4 }
]

let suma = 0;
let promedio = 0;

estudiantes.forEach(function(estudiante) {
    suma += estudiante.nota;
});

promedio = suma / estudiantes.length;
console.log(promedio);

if (promedio >= 6) {
    console.log ('Los estudiantes pasaron');
} else {
    console.log('Los estudiantes no pasaron');
}