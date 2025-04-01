function cuentaVocales(frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];

        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contador++; 
        }
    }
    return contador;
}

console.log(cuentaVocales("Caballo")); 

