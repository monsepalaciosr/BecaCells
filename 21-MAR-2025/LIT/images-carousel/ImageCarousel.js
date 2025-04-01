import { LitElement, html, css } from "lit";

export default class ImageCarousel extends LitElement {
    constructor() {
        super(); 
        this.images = []; // Inicializa el valor por defecto de las propiedades
        this.componentName= ''; // siempre son undefined
        this.title = '';
        this.myAge = 0;
    }

    // se agregan tuplas: el nombre de la propiedad y la configuración de la propiedad
    // no cambia la referencia
    // propiedades observadas por lit
    static properties = { 
        images: {
            type: Array
        },
        componentName: {
            type: String
        },
        title: {
            attribute:false
        },
        myAge: {
        }
    };

    // los estilos solo aplican para el shadowDOM
    static styles = css`
        button {
            background-color: var(--btn-bg-color, black);
            color: var(--btn-bg-color, white);
            border: none;
            border-radius: 5px;
        }
    `;

    clickButton () {
        this.componentName = 'images';
        this.images = [...this.images, 'URL']; // se genera un nuevo arreglo, se hace cambio a la direccion de memoria
        this.dispatchEvent(new CustomEvent('click-btn-shadow', 
            {
                bubbles:  true,
                composed: true,
                detail: 0
            }
        ));
    }

    // se pueden generar los metodos necesarios en la clase

    // ciclo de vida del componente
    render() {
        return html`
            <h1>${this.title}</h1>
            <span>Mi edad es: ${this.myAge}</span>
            <button value='click' @click=${this.clickButton}> CLICK ME </button> 
            <ul>
                ${this.images.map(image => {
                    return html`<li>${image}</li>`;
                })}
            </ul>
        `;
    }
}