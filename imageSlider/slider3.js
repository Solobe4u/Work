let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

/*
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
    currentSlide = index;
}
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});
showSlide(currentSlide);

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 3000);

*/

//To use this method, u have to set the  first slide to display while the others are hidden in the CSS file.
/*We might have in CSS:
  .slide { display: none; }
  .slide:first-child { display: block; }
*/

nextButton.addEventListener('click', () => {
    let nextSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'none';
    slides[nextSlide].style.display = 'block';
    currentSlide = nextSlide;
});

prevButton.addEventListener('click', () => {
    let prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'none';
    slides[prevSlide].style.display = 'block';
    currentSlide = prevSlide;
});

setInterval(() => {
        let nextSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'none';
    slides[nextSlide].style.display = 'block';
    currentSlide = nextSlide;
}, 3000);
