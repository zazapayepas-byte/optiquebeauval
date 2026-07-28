// ==========================================================
// Lumen Optique — script partagé (toutes les pages)
// ==========================================================

// --- Aperture animée (visuel "lentille" du hero) ---
const aperture = document.getElementById('aperture');
if (aperture) {
  const n = 10;
  for (let i = 0; i < n; i++) {
    const dot = document.createElement('i');
    const angle = (i / n) * 2 * Math.PI;
    const radius = 47; // en %
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    dot.style.left = x + '%';
    dot.style.top = y + '%';
    dot.style.transform = 'translate(-50%,-50%)';
    aperture.appendChild(dot);
  }
}

const nav = document.getElementById('siteNav');
const isHome = document.body.classList.contains('is-home');

function updateNav() {
  if (!nav) return;
  if (window.scrollY > 40 || !isHome) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNav);
updateNav();

// --- Menu mobile ---
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// --- Reveal au scroll ---
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// --- FAQ accordéon (page À propos) ---
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});



const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_hbyjrel",
        "template_p62e0p7",
        this
    )
    .then(function () {
        alert("Votre message a bien été envoyé !");
        form.reset();
    })
    .catch(function (error) {
        console.error(error);
        alert("Une erreur est survenue.");
    });
});
