const btnModal = document.querySelector('#btn-modal'); 
const dialog = document.querySelector('#myDialog'); 

btnModal.addEventListener('click', () => {
    dialog.showModal(); 
});

const btnCerrar = document.querySelector('#btn-cerrarModal');
btnCerrar.addEventListener('click', () => {
    dialog.close(); 
});

const btnTemplate = document.querySelector('#btn-mostrarTemp');
const template = document.querySelector('#myTemplate');
const contenedor = document.querySelector('#contenedor-template');

btnTemplate.addEventListener('click', () => {
    if (contenedor.children.length === 0) {
        const templateClone = template.content.cloneNode(true);
        contenedor.appendChild(templateClone);
        const btnCerrarTemplate = contenedor.querySelector('#btn-ocultarTemp');
        btnCerrarTemplate.addEventListener('click', () => {
            contenedor.innerHTML = ''; 
        });
    }
});
