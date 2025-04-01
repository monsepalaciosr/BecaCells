class MiBoton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                button {
                    border: none;
                    border-radius: 0.2rem;
                    padding: 0.2rem;
                    transition: background-color 0.2s ease-in;
                    width: 100%;
                    height: 3rem;
                }
                button:hover {
                    background-color: #212121;
                    color: white;
                }
                .operandos {
                    background-color: #FFB8E0;
                }
                .signos {
                    background-color: #ADACAC;
                }
            </style>

            <button></button>
        `; 

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.button = this.shadowRoot.querySelector('button');

    }

    connectedCallback() { // Se ejecuta una vez que el elemento ha sido añadido en el DOM
        this.button.textContent = this.getAttribute('label');
        const type = this.getAttribute('type');

        if (type === 'operandos') {
            this.button.classList.add('operandos');
        } else if (type === 'signos') {
            this.button.classList.add('signos');
        }

        this.button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('button-click', {
                detail: {value: this.button.textContent}
            }));
        });
    }

    disconnectedCallback() { //Elimina el evento "click" del botón cuando el componente se quita del DOM
        this.button.removeEventListener('click', this.handleClick);
    }
}

customElements.define('mi-boton', MiBoton);