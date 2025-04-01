// Contar Palabras Únicas en un Texto (Set)
// Dado un párrafo, cuenta cuántas palabras únicas tiene.

const texto = "El sol brilla en el cielo y el viento sopla suavemente.";
console.log(texto);
const palabras = texto.split(' '); 
const set = new Set(palabras); 

console.log(`Número de palabras únicas: ${set.size}`);
