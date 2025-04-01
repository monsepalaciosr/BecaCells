import './pantalla-calculadora.js';
import './boton-calculadora.js';

class MiCalculadora extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .calculadora {
                    background-color: #353535;
                    padding: 1.5rem;
                    border-radius: 0.2rem;
                }
                .grid-calculadora {
                    display: grid;
                    grid-template-columns: repeat(4,1fr);
                    column-gap: 0.2rem;
                    row-gap: 0.2rem;
                    width: 100%
                    height: auto;
                }
            </style>
            
            <div class="calculadora">
                <mi-pantalla></mi-pantalla>
                <div class="grid-calculadora"></div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.pantalla = this.shadowRoot.querySelector('mi-pantalla'); // Se crea una propiedad en el componente - trae consigo el shadowDOM del componente
        this.grid = this.shadowRoot.querySelector('.grid-calculadora');

        // Variables iniciales - lo que obtenemos según el usuario hace click en los botones de la calculadora
        this.numeros = [];
        this.numeroIngresado = '';
        this.operacion = '';
    }

    connectedCallback() { // Es la funcion principal del componente o punto de entrada del componente
        this.generarBotones();
    }

    generarBotones() {
        const botones = [
            '', 'AC', '%', '/',
            '7', '8', '9', 'x',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '', '0', '.', '='
        ];

        botones.forEach(valor => {
            const button = document.createElement('mi-boton');
            button.setAttribute('label', valor);
            button.setAttribute('type', this.definirTipoBoton(valor));

            button.addEventListener('button-click', (e) => this.clickBotonOperador(e.detail.value));
            
            this.grid.appendChild(button);
        });
    }

    definirTipoBoton(valor) {
        if(['/', 'x', '-', '+', '=', '%'].includes(valor)) {
            return 'operandos';
        }
        if (valor === 'AC') {
            return 'signos';
        }
    }

    clickBotonOperador(valor) {
        console.log('Botón presionado:', valor);
        const operadores = ['+', '-', 'x', '/', '%'];

        if (valor === 'AC') {
            this.limpiarCalculadora();
        } else if (valor === '=') {
            this.realizarOperacion();
        } else if (operadores.includes(valor)) {
            this.almacenarNumeroYOperador(valor);
        } else {
            this.ingresarNumero(valor);
        }
    }

    ingresarNumero(valor) {
        this.numeroIngresado += valor;
        console.log('Número ingresado:', this.numeroIngresado);

        this.pantalla.obtieneValor(this.numeroIngresado);
    }

    almacenarNumeroYOperador(valor) {
        if (this.numeroIngresado) {
            this.numeros.push(parseFloat(this.numeroIngresado));
            this.numeroIngresado = '';
        }

        this.operacion = valor;
        this.display.obtieneValor(`${this.numeros.join(' ')} ${valor}`);
    }

    realizarOperacion() {
        if(this.numeros.length > 0 && this.numeroIngresado) {
            this.numeros.push(parseFloat(this.numeroIngresado));

            const operacionesMatematicas = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                'x': (a, b) => a * b,
                '/': (a, b) => b !== 0 ? a / b : 'Error',
                '%': (a, b) => a % b
            };

            let resultado = this.numeros[0];

            for (let i=1; i < this.numeros.length; i++) {
                resultado = operacionesMatematicas[this.operacion](resultado, this.numeros[i]);
            }

            this.pantalla.obtieneValor(resultado);

            this.numeros[resultado];
            this.numeroIngresado = '';
        }
    }

    limpiarCalculadora() {
        this.numeros = [];
        this.numeroIngresado = '';
        this.operacion= '';
        this.pantalla.obtieneValor('');
    }
}

customElements.define('mi-calculadora', MiCalculadora);