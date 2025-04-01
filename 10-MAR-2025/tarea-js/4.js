function numerosParesImpares () {
    for (let i=1; i<=10; i++) {
        if(i % 2 === 0) {
            console.log(`El número ${i} es PAR`);
        } else {
            console.log(`El número ${i} es IMPAR`);
        }
    }
}

numerosParesImpares();