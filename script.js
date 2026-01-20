// Timestamp para detectar bots (anti-spam)
window.pageLoadTime = Date.now();

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Generate WhatsApp QR Code
const whatsappNumber = '41772015401'; // +41 77 201 54 01
const whatsappURL = `https://wa.me/${whatsappNumber}`;

// Generate QR Code
const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: whatsappURL,
    width: 200,
    height: 200,
    colorDark: '#003B5C',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
});

// Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        course: document.getElementById('course').value,
        message: document.getElementById('message').value
    };
    
    // Get current language for form messages
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // ===== PROTECCIÓN ANTI-SPAM =====
    
    // 1. Verificar honeypot (campo oculto)
    const honeypot = document.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value !== '') {
        console.log('Bot detected via honeypot');
        return; // Spam bot detectado, no hacer nada
    }
    
    // 2. Verificar tiempo de envío (mínimo 3 segundos desde que cargó la página)
    const timeOnPage = (Date.now() - window.pageLoadTime) / 1000;
    if (timeOnPage < 3) {
        showMessage('Please wait a moment before submitting.', 'error');
        return; // Enviado demasiado rápido, probable bot
    }
    
    // 3. Detectar spam keywords en mensaje
    const spamKeywords = ['viagra', 'cialis', 'lottery', 'winner', 'bitcoin', 'crypto', 'investment opportunity', 'make money fast', 'click here', 'buy now'];
    const messageText = formData.message.toLowerCase();
    const containsSpam = spamKeywords.some(keyword => messageText.includes(keyword));
    if (containsSpam) {
        showMessage(translations[currentLang].form_error, 'error');
        return; // Mensaje con spam detectado
    }
    
    // 4. Verificar longitud mínima del mensaje (anti-bot)
    if (formData.message.length < 10) {
        showMessage('Please write a more detailed message.', 'error');
        return;
    }
    
    // 5. Rate limiting - solo 1 envío cada 60 segundos
    const lastSubmit = localStorage.getItem('lastFormSubmit');
    const now = Date.now();
    if (lastSubmit && (now - parseInt(lastSubmit)) < 60000) {
        const waitTime = Math.ceil((60000 - (now - parseInt(lastSubmit))) / 1000);
        showMessage(`Please wait ${waitTime} seconds before submitting again.`, 'error');
        return;
    }
    
    // ===== FIN PROTECCIÓN ANTI-SPAM =====
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.message) {
        showMessage(translations[currentLang].form_validation_fill, 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage(translations[currentLang].form_validation_email, 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = translations[currentLang].form_sending;
    submitBtn.disabled = true;
    
    // Send form using FormSubmit API (FREE email service)
    try {
        const response = await fetch('https://formsubmit.co/ajax/easyenglishclasses4you@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                course: formData.course,
                message: formData.message,
                _subject: `New English Course Inquiry from ${formData.name}`,
                _template: 'table',
                _captcha: 'false' // FormSubmit incluye su propio captcha
            })
        });
        
        if (response.ok) {
            // Guardar timestamp del envío
            localStorage.setItem('lastFormSubmit', Date.now().toString());
            
            showMessage(translations[currentLang].form_success, 'success');
            contactForm.reset();
            
            // Optional: Also send to WhatsApp
            const whatsappMessage = `New inquiry from ${formData.name}%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACourse: ${formData.course}%0A%0AMessage: ${formData.message}`;
            // Uncomment to auto-open WhatsApp:
            // window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showMessage(translations[currentLang].form_error, 'error');
    } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Function to show form messages
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768;
    const animatedElements = document.querySelectorAll('.about-card, .course-card, .benefit-item, .testimonial-card');
    
    animatedElements.forEach(el => {
        // En móvil, no ocultar los testimonials
        if (isMobile && el.classList.contains('testimonial-card')) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Course enrollment buttons - redirect to contact form
document.querySelectorAll('.btn-course').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the course card index instead of name
        const courseCard = button.closest('.course-card');
        const allCourseCards = document.querySelectorAll('.course-card');
        const courseIndex = Array.from(allCourseCards).indexOf(courseCard);
        
        // Pre-fill the course selection in the form based on card position
        const courseSelect = document.getElementById('course');
        const courseValues = ['business', 'general', 'exam', 'private'];
        courseSelect.value = courseValues[courseIndex] || '';
        
        // Scroll to contact form
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        
        // Focus on name input after a short delay
        setTimeout(() => {
            document.getElementById('name').focus();
        }, 800);
    });
});

// Add hover effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        if (!this.classList.contains('btn-course') || !this.closest('.course-card:hover')) {
            this.style.transform = 'translateY(0)';
        }
    });
});

// Console welcome message
console.log('%c Manchester English Academy ', 'background: #003B5C; color: #FFD700; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Premium English Education in Switzerland ', 'background: #FFD700; color: #003B5C; font-size: 14px; padding: 5px;');