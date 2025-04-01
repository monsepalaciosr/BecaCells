// Contar la Frecuencia de Palabras en un Texto (Map)
// Cuenta cuántas veces aparece cada palabra en un texto

const texto = 'Pedro tenía 20 pesos pero tenía que comprar 10 pesos de hojas y le quedaron 10 pesos';
const palabras = texto.split(' ');

const frecuencia = new Map();

palabras.forEach(palabra => {
    if (frecuencia.has(palabra)) {
        frecuencia.set(palabra, frecuencia.get(palabra) + 1);
    } else {
        frecuencia.set(palabra, 1);
    }
});

console.log(frecuencia);