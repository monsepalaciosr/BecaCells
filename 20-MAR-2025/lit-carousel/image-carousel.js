import { LitElement, html, css } from 'lit';

export class ImageCarousel extends LitElement {
  static properties = {
    images: { type: Array },
    index: { type: Number }
  };

  static styles = css`
    img {
      height: auto;
      width: 600px;
    }
    button {
      background-color: black;
      color: white;
      border: none;
      border-radius: 3px;
      margin: 1rem;
    }   
    button:hover {
      background-color: grey;
      cursor: pointer;
    }
    button[disabled] {
      background-color: grey;
    }
    section {
      display: flex;
      justify-content: center;
      align-items: center; 
    }
  `;

  constructor() {
    super();
    this.index = 0;
    this.images = [];
  }

  prevImage() {
    if (this.index > 0) {
      this.index--;
    }
  }

  nextImage() {
    if (this.index < this.images.length - 1) {
      this.index++;
    }
  }

  render() {
    return html`
      <br>
      <img src="${this.images[this.index]}" />
      <section>
        <button 
          id="left" 
          @click="${this.prevImage}" 
          ?disabled="${this.index === 0}"
        >\<</button>
        
        <button 
          id="right" 
          @click="${this.nextImage}" 
          ?disabled="${this.index === this.images.length - 1}"
        >\></button>
      </section>
    `;
  }
}

customElements.define('image-carousel', ImageCarousel);

