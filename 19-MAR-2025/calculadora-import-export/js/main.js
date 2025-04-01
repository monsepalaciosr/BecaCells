import { 
    ingresarNumero, 
    almacenaNumeroYOperador, 
    acciones 
} from './calculadora.js';

const botones = document.querySelectorAll('#btn');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const valor = btn.textContent;

        if (['+', '-', 'x', '/', '%'].includes(valor)) {
            almacenaNumeroYOperador(valor);
        } 

        else if (acciones[valor]) {
            acciones[valor]();  
        } 

        else {
            ingresarNumero(valor);  
        }
    }); 
});