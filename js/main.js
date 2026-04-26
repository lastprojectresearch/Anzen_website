// Mobile hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Back-to-top button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Domain tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Form handling (demo)
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received by the ANZEN team.");
    e.target.reset();
});

// Timeline expand/collapse
document.querySelectorAll('.timeline-header')?.forEach(header => {
    header.addEventListener('click', function() {
        const card = this.closest('.timeline-item');
        const details = card.querySelector('.timeline-details');
        const btn = this.querySelector('.expand-btn');
        
        if (details && btn) {
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
            btn.classList.toggle('expanded');
        }
    });
});