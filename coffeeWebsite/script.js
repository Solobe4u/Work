const menuOpenBtn = document.getElementById('menu-open');
const menuCloseBtn = document.getElementById('menu-close');

menuOpenBtn.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");// Toggle the "menu-open" class on the body element when the menu open button is clicked
})

menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());// Remove the "menu-open" class from the body element when the menu close button is clicked




// For the testimonials carousel, we are using Swiper.js library. The following code initializes the Swiper instance with the specified parameters for vertical direction, looping, pagination, navigation arrows, and scrollbar. Copied from Swiper.js documentation: https://swiperjs.com/swiper-api#parameters
const swiper = new Swiper('.slider-wrapper', {
    
    /*
   Optional parameters
  direction: 'vertical',
  */
  loop: true,
  grabCursor: true, // Change cursor to a hand when hovering over the carousel to indicate that it can be dragged
  spaceBetween: 30, // Space between slides in px

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Make pagination bullets clickable
    dynamicBullets: true, // Enable dynamic bullets for pagination where the active bullet is larger than the others
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /*
   And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },*/

   // Responsive breakpoints
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }

});
