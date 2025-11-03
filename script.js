// Carousel functionality
let currentSlide = 0;
const carouselTrack = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const offset = -(currentSlide * (cardWidth + gap));
    carouselTrack.style.transform = `translateX(${offset}px)`;

    // Update active card
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentSlide + 1) {
            card.classList.add('active');
        }
    });
}

function nextSlide() {
    if (currentSlide < cards.length - 3) {
        currentSlide++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show success message
        alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');

        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp button functionality
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function() {
        window.open('https://wa.me/573383066', '_blank');
    });
}

// Chat button functionality
const chatBtn = document.querySelector('.chat-btn');
if (chatBtn) {
    chatBtn.addEventListener('click', function() {
        alert('Chat en línea: Este servicio estará disponible próximamente.');
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.price-card, .titulacion-card, .lider-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize carousel
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);

// Auto-scroll carousel
let autoScrollInterval = setInterval(() => {
    if (currentSlide < cards.length - 3) {
        nextSlide();
    } else {
        currentSlide = 0;
        updateCarousel();
    }
}, 5000);

// Pause auto-scroll on hover
const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            if (currentSlide < cards.length - 3) {
                nextSlide();
            } else {
                currentSlide = 0;
                updateCarousel();
            }
        }, 5000);
    });
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

console.log('UCompensar - Ingeniería de Sistemas page loaded successfully!');
