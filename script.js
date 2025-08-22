// js/main.js

const slides = document.querySelectorAll('.slider-hero .slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 4000); // change toutes les 4 secondes
