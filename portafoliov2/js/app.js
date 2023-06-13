// Obtener todos los elementos <a> que tienen un href que comienza con #
const links = document.querySelectorAll('a[href^="#"]');

// Agregar el evento click a cada enlace
links.forEach(link => {
  link.addEventListener('click', e => {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();

    // Obtener el destino del enlace
    const href = link.getAttribute('href');

    // Desplazar suavemente a la sección de destino
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const imgs = document.querySelectorAll('.proyect-toggle');
// const modal = document.querySelector('.modal');
const spans = document.querySelectorAll('.close');

let modal;

imgs.forEach(img => {
  img.addEventListener('click', (e) => {
    document.getElementById(`${e.target.dataset.modal}`).style.display = 'block';
    modal = e.target.dataset.modal;
  });
});

spans.forEach(span => {
  span.addEventListener('click', (e) => {
    document.getElementById(`${e.target.dataset.toggle}`).style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target === document.getElementById(modal)) {
    document.getElementById(modal).style.display = 'none';
  }
});

$(document).ready(function() {
  $('.certificaciones-slider').slick({
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Anterior</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Siguiente</button>',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
});

