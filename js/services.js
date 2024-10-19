// carousel slider
let currentIndex = 0;

function showSlide(index) {
    const slides = $('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100; // Slide width is 100%
    $('.carousel-images').css('transform', `translateX(${offset}%)`);
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initialize the carousel
$(document).ready(function () {
    showSlide(currentIndex);
})
