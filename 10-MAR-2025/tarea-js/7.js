num = window.prompt('Ingrese la tabla de multiplicar:');
num = Number(num); //convierte el valor ingresado a numero

function tablasMultiplicar(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

tablasMultiplicar(num); 
