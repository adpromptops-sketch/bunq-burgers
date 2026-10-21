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

/* Sonner-inspired toast, shown only after an explicit share action. */
const shareConcept = document.querySelector('[data-share-concept]');
const toastRegion = document.querySelector('[data-toast-region]');
let toastTimeout;
function showToast(message) {
  if (!toastRegion) return;
  clearTimeout(toastTimeout);
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  toastRegion.replaceChildren(toast);
  toastTimeout = setTimeout(() => toastRegion.replaceChildren(), 3500);
}
if (shareConcept) {
  shareConcept.addEventListener('click', async () => {
    const link = window.location.origin + window.location.pathname + '#showcase';
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(link);
      showToast('Tautan konsep berhasil disalin.');
    } catch {
      showToast('Tidak dapat menyalin otomatis. Salin alamat halaman dari browser.');
    }
  });
}
