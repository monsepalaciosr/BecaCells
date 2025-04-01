let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function moveToSlide(index) {
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    currentIndex = index;
    updateSliderPosition();
    updateIndicators();
}

function updateSliderPosition() {
    const slider = document.querySelector('.slideContent');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateIndicators() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Inicializar los indicadores
updateIndicators();
