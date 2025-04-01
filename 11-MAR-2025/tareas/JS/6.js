// Registro de Empleados y Sueldos
// Dado un listado de empleados con su sueldo, calcula el sueldo total que debe pagar la empresa.

const empleados = [
    {nombre: 'Ana', sueldo: 5500},
    {nombre: 'Martin', sueldo: 7800},
    {nombre: 'Susana', sueldo: 10900},
    {nombre: 'Ramon', sueldo: 5900},
];
console.table(empleados);

const sueldoTotal = empleados.reduce(function(sueldos, total){
    return sueldos + total.sueldo;
}, 0);

console.log(`La empresa debe pagar un total de: ${sueldoTotal}`);