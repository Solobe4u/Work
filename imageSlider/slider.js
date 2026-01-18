let currentSlide = 0;
const Prev = document.querySelector('.prev');
const Next = document.querySelector('.next');
let slider = document.querySelectorAll('.slide');//QuerySelector with class slider wont work.
let totalSlides = slider.length


Next.addEventListener('click', nextFunct)
Prev.addEventListener('click', prevFunct)

function nextFunct() {
    let nextSlide =(currentSlide + 1) % totalSlides;
    slider[currentSlide].style.display = 'none';
    slider[nextSlide].style.display = 'block';
    currentSlide = nextSlide;
}

function prevFunct() {
   let prevSlide = (currentSlide -1 + totalSlides) % totalSlides;
slider[currentSlide].style.display = 'none';
slider[prevSlide].style.display = 'block';
currentSlide = prevSlide;
}

setInterval(nextFunct, 3000);

