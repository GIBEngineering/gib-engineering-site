
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;

document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = link.href;
    lightbox.classList.add('open');
  });
});

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox) {
    lightbox.classList.remove('open');
    if (lightboxImg) lightboxImg.src = '';
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
