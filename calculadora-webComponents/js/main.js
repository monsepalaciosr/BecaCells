import './display.js';
import './button.js';

class MiCalculadora extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Template con la estructura básica
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .calculadora {
                    background-color: #353535;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    max-width: 320px;
                    margin: 0 auto;
                }
                .grid-calculadora {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.5rem;
                }
            </style>

            <div class="calculadora">
                <mi-pantalla></mi-pantalla>
                <div class="grid-calculadora"></div>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Referencias a los elementos
        this.display = this.shadowRoot.querySelector('mi-pantalla');
        this.grid = this.shadowRoot.querySelector('.grid-calculadora');

        // Estado inicial
        this.numeros = [];
        this.numeroIngresado = '';
        this.operacion = '';
    }

    /**
     * Se ejecuta cuando el componente es montado
     */
    connectedCallback() {
        this.generarBotones();
    }

    /**
     * Genera dinámicamente los botones y los agrega a la calculadora
     */
    generarBotones() {
        const botones = [
            'AC', '%', '/', 'x',
            '7', '8', '9', '-',
            '4', '5', '6', '+',
            '1', '2', '3', '=',
            '0', '.'
        ];

        botones.forEach(valor => {
            const button = document.createElement('mi-boton');
            button.setAttribute('label', valor);  
            button.setAttribute('type', this.definirTipoBoton(valor));

            // Escucha el evento personalizado `button-click`
            button.addEventListener('button-click', (e) => this.clickOperadores(e.detail.value));

            this.grid.appendChild(button);
        });
    }

    /**
     * Define el tipo de botón: operador, especial o número
     */
    definirTipoBoton(valor) {
        if (['+', '-', 'x', '/', '%'].includes(valor)) {
            return 'operator';
        }
        if (valor === 'AC' || valor === '=') {
            return 'special';
        }
        return 'operand';
    }

    /**
     * Maneja la lógica cuando un botón es presionado
     */
    clickOperadores(valor) {
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

    /**
     * Agrega el número seleccionado y lo muestra en pantalla
     */
    ingresarNumero(valor) {
        this.numeroIngresado += valor;
        this.display.obtieneValor(this.numeroIngresado);  // Aquí está el cambio
    }

    /**
     * Almacena el número ingresado y el operador seleccionado
     */
    almacenarNumeroYOperador(valor) {
        if (this.numeroIngresado) {
            this.numeros.push(parseFloat(this.numeroIngresado));
            this.numeroIngresado = '';
        }
        this.operacion = valor;
        this.display.obtieneValor(`${this.numeros.join(' ')} ${valor}`);  // Aquí está el cambio
    }

    /**
     * Realiza la operación matemática seleccionada
     */
    realizarOperacion() {
        if (this.numeros.length > 0 && this.numeroIngresado) {
            this.numeros.push(parseFloat(this.numeroIngresado));

            const operacionesMatematicas = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                'x': (a, b) => a * b,
                '/': (a, b) => b !== 0 ? a / b : 'Error',
                '%': (a, b) => a % b
            };

            let resultado = this.numeros[0];

            for (let i = 1; i < this.numeros.length; i++) {
                resultado = operacionesMatematicas[this.operacion](resultado, this.numeros[i]);
            }

            this.display.obtieneValor(resultado);  // Aquí está el cambio
            
            this.numeros = [resultado];
            this.numeroIngresado = '';
        }
    }

    /**
     * Limpia la calculadora y la pantalla
     */
    limpiarCalculadora() {
        this.numeros = [];
        this.numeroIngresado = '';
        this.operacion = '';
        this.display.obtieneValor('');  // Aquí está el cambio
    }
}

customElements.define('mi-calculadora', MiCalculadora);

