'use strict';
// Bun'Q portfolio concept: no checkout or tracking.
// Magnetic movement is progressive enhancement for fine pointers only.
const magneticButton = document.querySelector('.magnetic-button');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (magneticButton) {
  const reset = () => {
    magneticButton.style.setProperty('--magnetic-x', '0px');
    magneticButton.style.setProperty('--magnetic-y', '0px');
  };
  magneticButton.addEventListener('pointermove', (event) => {
    if (!finePointer.matches || reducedMotion.matches) return reset();
    const rect = magneticButton.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    magneticButton.style.setProperty('--magnetic-x', x.toFixed(1) + 'px');
    magneticButton.style.setProperty('--magnetic-y', y.toFixed(1) + 'px');
  });
  magneticButton.addEventListener('pointerleave', reset);
  magneticButton.addEventListener('blur', reset);
  reducedMotion.addEventListener('change', reset);
  finePointer.addEventListener('change', reset);
}

/* Modular editorial carousel: manual controls, no auto-play or tracking. */
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
  const status = carousel.querySelector('[data-carousel-status]');
  let current = 0;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== current; });
    status.textContent = (current + 1) + ' / ' + slides.length;
  };
  carousel.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
  carousel.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
});
