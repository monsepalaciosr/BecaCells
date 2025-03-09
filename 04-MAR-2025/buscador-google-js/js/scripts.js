const input = document.querySelector('#search-animals');
const boxSearch = document.querySelector('.box-search');

const resultadoBusqueda = document.createElement('P');
boxSearch.appendChild(resultadoBusqueda);

input.addEventListener('input', (event) => {
    // console.log(event.target.value); 
    const ingresaDatos = event.target.value;
    // console.log(ingresaDatos);
    resultadoBusqueda.textContent = ingresaDatos;
});

input.addEventListener('keydown', function(event) { 
    if (event.key === "Enter") {
        buscar(); 
    }
});

async function buscar() {
    const busqueda = input.value.trim().toLowerCase(); 

    try {
        // Cargar el archivo JSON
        const response = await fetch('js/animales.json'); 
        const data = await response.json();

        const encontrado = data.animales.find(animal => animal.nombre === busqueda);

        if (encontrado) {
            window.location.href = encontrado.url; 
        } else {
            alert('La búsqueda que intenta hacer no está disponible, pruebe con otra');
        }
    } catch (error) {
        alert('Hubo un error al cargar los datos.');
    }
}




