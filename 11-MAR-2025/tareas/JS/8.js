// Gestión de Usuarios en una Plataforma
// Dado un listado de usuarios con nombre y rol (admin o usuario), filtra solo los administradores.

const usuarios = [
    {nombre: 'Ana', rol: 'administrador'},
    {nombre: 'Jose', rol: 'usuario'},
    {nombre: 'Karen', rol: 'usuario'},
    {nombre: 'Marcos', rol: 'administrador'},
    {nombre: 'Ramon', rol: 'usuario'}
];

const administradores = usuarios.filter( usuario => usuario.rol === 'administrador');

console.table(administradores);