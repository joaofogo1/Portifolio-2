// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// theme customizer (signature element)
const swatches = document.querySelectorAll('.swatch');
swatches.forEach(sw => {
  sw.addEventListener('click', () => {
    const accent = sw.getAttribute('data-accent');
    const soft = sw.getAttribute('data-soft');
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-soft', soft);
    swatches.forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
