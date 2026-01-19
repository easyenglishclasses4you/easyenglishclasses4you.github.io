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
// IMPORTANT: Replace this phone number with your actual WhatsApp number
// Format: Country code + number (no spaces, no + sign)
// Example for Switzerland: 41791234567
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
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
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
                _template: 'table'
            })
        });
        
        if (response.ok) {
            showMessage('Thank you! Your message has been sent successfully. We will contact you soon!', 'success');
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
        showMessage('Oops! Something went wrong. Please try again or contact us directly via WhatsApp.', 'error');
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
    const animatedElements = document.querySelectorAll('.about-card, .course-card, .benefit-item, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
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
        
        // Get the course name from the card
        const courseCard = button.closest('.course-card');
        const courseName = courseCard.querySelector('h3').textContent;
        
        // Pre-fill the course selection in the form
        const courseSelect = document.getElementById('course');
        const courseValue = courseName.toLowerCase().replace(' ', '-');
        
        // Map course names to select values
        const courseMapping = {
            'business english courses': 'business',
            'general english classes': 'general',
            'english exam preparation': 'exam',
            'private english lessons': 'private'
        };
        
        courseSelect.value = courseMapping[courseName.toLowerCase()] || '';
        
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