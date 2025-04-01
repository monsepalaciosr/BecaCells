import { ImageCarousel, MyButton } from "./MyButton.js";


customElements.define('my-button', MyButton); // Custom Elements vive en el objeto global. Define un nuevo elemento customizado
customElements.define('image-carousel', ImageCarousel);