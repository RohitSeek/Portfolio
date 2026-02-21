/* ——— Scroll progress bar ——— */
const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = percent + '%';
    }
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
}

/* ——— Header scroll state ——— */
const header = document.getElementById('header');
if (header) {
    function toggleHeader() {
        header.classList.toggle('scrolled', window.scrollY > 80);
    }
    window.addEventListener('scroll', toggleHeader, { passive: true });
    toggleHeader();
}

/* ——— Mobile menu ——— */
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
if (menuIcon && navbar) {
    var iconMenu = menuIcon.querySelector('.bx-menu');
    var iconClose = menuIcon.querySelector('.bx-x');
    function openMenu() {
        navbar.classList.add('open');
        menuIcon.classList.add('open');
        menuIcon.setAttribute('aria-expanded', 'true');
        if (iconMenu) iconMenu.style.display = 'none';
        if (iconClose) iconClose.style.display = 'block';
    }
    function closeMenu() {
        navbar.classList.remove('open');
        menuIcon.classList.remove('open');
        menuIcon.setAttribute('aria-expanded', 'false');
        if (iconMenu) iconMenu.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
    }
    menuIcon.addEventListener('click', function () {
        if (navbar.classList.contains('open')) closeMenu();
        else openMenu();
    });
    navbar.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.matchMedia('(max-width: 768px)').matches) closeMenu();
        });
    });
}

/* ——— Active nav link on scroll ——— */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
function setActiveLink() {
    const scrollY = window.scrollY;
    sections.forEach(function (sec) {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (id && scrollY >= top && scrollY < top + height) {
            navLinks.forEach(function (link) {
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

/* ——— Read more (About) ——— */
const readMoreBtn = document.getElementById('read-more-btn');
const extraContent = document.getElementById('extra-content');
if (readMoreBtn && extraContent) {
    readMoreBtn.addEventListener('click', function () {
        const isOpen = extraContent.style.display === 'block';
        extraContent.style.display = isOpen ? 'none' : 'block';
        readMoreBtn.textContent = isOpen ? 'Read more' : 'Show less';
    });
}

/* ——— Scroll Reveal ——— */
if (typeof ScrollReveal === 'function') {
    ScrollReveal({ distance: '48px', duration: 800, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
    ScrollReveal().reveal('.section-head, .hero-content', { origin: 'top', interval: 80 });
    ScrollReveal().reveal('.hero-visual, .service-card, .portfolio-card, .contact-form', { origin: 'bottom', interval: 100 });
    ScrollReveal().reveal('.about-image', { origin: 'left' });
    ScrollReveal().reveal('.about-body', { origin: 'right' });
}

/* ——— Typed.js ——— */
if (typeof Typed === 'function') {
    new Typed('.multiple-text', {
        strings: ['Web Developer', 'Software Developer', 'Student'],
        typeSpeed: 90,
        backSpeed: 60,
        backDelay: 1200,
        loop: true
    });
}

/* ——— Footer year ——— */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ——— EmailJS contact form ——— */
(function () {
    if (typeof emailjs === 'undefined') return;
    emailjs.init('LV0a3AN55QpCwLPTL');
})();

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = this;
    var params = {
        to_name: 'Rohit',
        from_name: document.getElementById('fullName').value,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    emailjs.send('service_5g1liyk', 'template_mn9vk59', params)
        .then(function () {
            alert('Message sent successfully!');
            form.reset();
        }, function () {
            alert('Failed to send. Please try again.');
        });
});
