function invierteTexto(texto) {
    let textoIngresado = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoIngresado += texto[i];
    }
    return textoIngresado; //devuelve el valor de una funcion
}

console.log(invierteTexto("Hola")); 
