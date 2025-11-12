// Smooth scroll pour les liens
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Formulaire
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci ! Nous vous contacterons bientôt.');
    this.reset();
});
