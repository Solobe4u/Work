// Image slider behavior
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slidesWrap = slider.querySelector('.slides');
  const slides = Array.from(slidesWrap.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');
  const indicatorsWrap = slider.querySelector('.indicators');
  const interval = Number(slider.dataset.interval) || 4000;

  let current = 0;
  let autoplayTimer = null;
  let isPaused = false;

  // Build indicators
  function buildIndicators() {
    indicatorsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'indicator';
      btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
      btn.setAttribute('role', 'tab');
      btn.dataset.index = i;
      btn.addEventListener('click', () => {
        goTo(i);
        restartAutoplay();
      });
      indicatorsWrap.appendChild(btn);
    });
  }

  function updateIndicators() {
    const dots = Array.from(indicatorsWrap.children);
    dots.forEach((dot, i) => {
      if (i === current) {
        dot.setAttribute('aria-current', 'true');
        dot.setAttribute('tabindex', '0');
      } else {
        dot.setAttribute('aria-current', 'false');
        dot.setAttribute('tabindex', '-1');
      }
    });
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slidesWrap.style.transform = `translateX(${-current * 100}%)`;
    updateIndicators();
    slider.setAttribute('data-current', current);
  }

  function prev() { goTo(current - 1); }
  function next() { goTo(current + 1); }

  // Autoplay
  function startAutoplay() {
    if (autoplayTimer) return;
    if (interval <= 0) return;
    autoplayTimer = setInterval(() => {
      if (!isPaused) next();
    }, interval);
  }
  function stopAutoplay() { clearInterval(autoplayTimer); autoplayTimer = null; }
  function restartAutoplay() { stopAutoplay(); startAutoplay(); }

  // Pause/resume interactions
  slider.addEventListener('mouseenter', () => { isPaused = true; });
  slider.addEventListener('mouseleave', () => { isPaused = false; });
  slider.addEventListener('focusin', () => { isPaused = true; });
  slider.addEventListener('focusout', () => { isPaused = false; });

  // Buttons
  prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

  // Keyboard navigation
  slider.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowLeft') { prev(); restartAutoplay(); }
    if (evt.key === 'ArrowRight') { next(); restartAutoplay(); }
  });

  // Make slider focusable for keyboard nav
  slider.setAttribute('tabindex', '0');

  // Resize: no-op because we use percentage transform; keep for extension
  window.addEventListener('resize', () => { /* placeholder */ });

  // Init
  buildIndicators();
  goTo(0);
  startAutoplay();
  // Fallback handling for broken images
  const fallback = 'https://picsum.photos/1200/700?blur=15';
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (!img) return;
    // If the image fails to load, show fallback and mark broken
    img.addEventListener('error', () => {
      // Avoid infinite loop if fallback also fails
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = '1';
      // Try a simple fallback then visually show broken status
      img.src = fallback;
      slide.classList.add('broken');
    });
    // If using an 'unsplash.com/photos/...' page link, the image won't load — add a note in console
    img.addEventListener('load', () => {
      // Remove broken mark once the image loads
      if (slide.classList.contains('broken')) slide.classList.remove('broken');
    });
  });
});
