class MiBoton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    margin: 0.2rem;
                }

                button {
                    width: 100%;
                    padding: 1rem;
                    font-size: 2rem;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: background 0.3s;
                }

                .operand {
                    background: #FFB8E0;
                }

                .operator {
                    background: #adacac;
                }

                .special {
                    background: #353535;
                }

                button:hover {
                    filter: brightness(1.2);
                }
            </style>

            <button></button>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.button = this.shadowRoot.querySelector('button');
    }

    /**
     * Se ejecuta cuando el componente se agrega al DOM.
     */
    connectedCallback() {
        this.button.textContent = this.getAttribute('label') || '';
        
        // Aplica clases condicionales según el tipo de botón
        const type = this.getAttribute('type');
        if (type === 'operand') {
            this.button.classList.add('operand');
        } else if (type === 'operator') {
            this.button.classList.add('operator');
        } else {
            this.button.classList.add('special');
        }

        // Maneja el evento click
        this.button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('button-click', {
                detail: { value: this.button.textContent }
            }));
        });
    }

    disconnectedCallback() {
        this.button.removeEventListener('click', this.handleClick);
    }
}

customElements.define('mi-boton', MiBoton);
