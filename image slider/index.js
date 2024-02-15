let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Initialize the slider on the first image
showSlide(currentSlide);
