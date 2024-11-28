///Destacados///

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let currentSlideIndex = 0;

    const updateSlidePosition = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
    };

    nextButton.addEventListener("click", () => {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlidePosition();
        }
    });


    // Adjust slide positions on window resize
    window.addEventListener("resize", updateSlidePosition);
});

    ///Formulari Desplegable ///

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-form');
    const form = document.querySelector('.container-form form');

    toggleButton.addEventListener('click', () => {
        form.classList.toggle('hidden');
    });
// Funcionalitat 2: Canvi de color de fons en passar el ratolí per sobre d'un projecte
const projectes = document.querySelectorAll('.projecte, .detalls-projecte');
projectes.forEach(projecte => {
    projecte.addEventListener('mouseenter', () => {
        projecte.style.backgroundColor = '#f0f0f0';
    });
    projecte.addEventListener('mouseleave', () => {
        projecte.style.backgroundColor = '';
    });
});

// Funcionalitat 3: Mostrar un missatge emergent quan es fa clic en un botó
const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', () => {
    alert('Gràcies per visitar el meu portafolis!');
});
   
// Funcionalitat 4: Mode Fosc
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    projectes.forEach(projecte => {
        projecte.classList.toggle('dark-mode');
    });

});