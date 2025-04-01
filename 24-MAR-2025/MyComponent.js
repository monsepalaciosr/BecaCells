import {LitElement, html, css} from 'Lit';

export class MyComponent extends LitElement {
    constructor() {
        super();
        this.text = '';
    }

    static properties = {
        text: {
            type: String,
            attribute: 'my-component-text'
        }
    }

    static styles = css`
        h1 {
            color: greenyellow;
        }
    `;

    updated() { // Se ejecuta despues de que se termina de renderizar
        console.log('updated');
    }

    render() {
        // undefined => constructor => attribute => js
        return html`
            <!-- Son expresiones de JS lo que se pueden pintar -->
            <h1 class="${this.className}">${this.text}</h1> <!-- Interpola valores de expresiones -->
        `;
    }
}