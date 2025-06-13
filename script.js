console.log("Website loaded!");
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('mobile-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
// Scroll-triggered animations
const faders = document.querySelectorAll('.fade-up');

const revealOnScroll = () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('in-view');
    }
  });
};

// Run on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
