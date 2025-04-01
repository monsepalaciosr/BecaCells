import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';

export class ClassMap extends LitElement {
    constructor() {
        super();
        
        this.estadoTarjeta = false;
        this.usuarioActivo = false;
        this.usuarioOnline = false;
    }

    static properties = {
        estadoTarjeta: {type: Boolean},
        usuarioActivo: {type: Boolean}, 
        usuarioOnline: {type: Boolean}
    };

    static styles = css`
        :host {
            display: block;
            max-width: 50%;
        }

        .inactive,
        .active {
            border: 3px solid;
            padding: 5px;
            text-align: center;
            border-radius: 10px;
        }

        .inactive {
            border-color: gray;
        }

        .active {
            border-color: green;
        }

        .online,
        .offline {
            padding: 5px;
            border-radius: 10px;
            margin: 10px 20px;
        }

        .online {
            background-color: greenyellow;
        }

        .offline {
            background-color: lightblue;
        }

        button {
            border: none;
            border-radius: 7px;
            background-color: black;
            color: white;
            margin-top: 10px;
            padding: 5px;
        }
    `;

    isUsuarioActivo() {
        this.usuarioActivo = !this.usuarioActivo;
        this.requestUpdate();
    }

    usuarioDesconectado() {
        this.usuarioOnline = !this.usuarioOnline;
        this.requestUpdate();
    }

    render() {
        return html`
            <h1>Ejercicio de Directivas</h1>
            <section>
                <section class=${classMap({'active' : this.usuarioActivo, 'inactive': !this.usuarioActivo})}>
                    <p>El usuario esta: ${this.usuarioActivo ? 'Activo': 'No activo'}</p>
                    <p class=${classMap({'online': this.usuarioOnline, 'offline': !this.usuarioOnline})}>Usuario: ${this.usuarioOnline ? 'Online':'Offline'}</p>
                </section>
                <button @click="${this.isUsuarioActivo}">Presiona si estas activo</button>
                <button @click="${this.usuarioDesconectado}">Conectar</button>
            </section>
        `;
    }
}