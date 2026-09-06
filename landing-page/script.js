// Replace this single value once CROP is live on the App Store.
const APP_STORE_URL = '#';

document.querySelectorAll('[data-app-store-link]').forEach((link) => {
  link.href = APP_STORE_URL;
  if (APP_STORE_URL === '#') {
    link.addEventListener('click', (event) => event.preventDefault());
  }
});

document.querySelectorAll('[data-image-frame]').forEach((frame) => {
  const image = frame.querySelector('img');
  if (!image) return;
  image.addEventListener('error', () => frame.classList.add('is-missing'));
  if (image.complete && image.naturalWidth === 0) frame.classList.add('is-missing');
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealed = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealed.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealed.forEach((element) => observer.observe(element));
}
