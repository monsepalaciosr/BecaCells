class MiPantalla extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .pantalla {
                    border: none;
                    padding: 1.5rem;
                    color: white;
                    text-align: right;
                    border-radius: 0.2rem;
                    margin-bottom: 0.5rem;
                }
            </style>

            <input class="pantalla" type="text" value="" disabled />
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.pantalla = this.shadowRoot.querySelector('.pantalla');

    }

    obtieneValor(valor) {
        this.pantalla.value = valor;
    }

    limpiarPantalla() {
        this.pantalla.value = '';
    }

}

customElements.define('mi-pantalla', MiPantalla);