// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.navbar');
    if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(el => {
    observer.observe(el);
});

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // In a real application, you would send this to a backend
    setTimeout(() => {
        showNotification('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#0066ff'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideInDown 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add scroll event listener for navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Parallax effect on hero section (optional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (window.scrollY < window.innerHeight) {
        hero.style.backgroundPosition = `0 ${window.scrollY * 0.5}px`;
    }
});

// Add active class to nav link styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Initialize tooltips (optional enhancement)
function initTooltips() {
    const elements = document.querySelectorAll('[title]');
    elements.forEach(el => {
        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    if (window.innerWidth < 768) return; // Skip on mobile
    
    const tooltip = document.createElement('div');
    tooltip.textContent = e.target.getAttribute('title');
    tooltip.style.cssText = `
        position: fixed;
        background: var(--dark-bg);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 0.85rem;
        z-index: 999;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
    tooltip.style.left = (rect.left + (rect.width - tooltip.offsetWidth) / 2) + 'px';
    
    e.target.tooltip = tooltip;
}

function hideTooltip(e) {
    if (e.target.tooltip) {
        e.target.tooltip.remove();
        e.target.tooltip = null;
    }
}

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    initTooltips();
});

// Debounce function for performance
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Debounced scroll listener
const debouncedScroll = debounce(updateActiveNavLink, 100);
window.addEventListener('scroll', debouncedScroll);

// Print Portfolio function
function printPortfolio() {
    window.print();
}

// Export to PDF function (requires backend or service)
function exportToPDF() {
    showNotification('PDF export feature coming soon!', 'info');
}

// Analytics tracking (if needed)
function trackEvent(eventName, eventData = {}) {
    // Implementation would depend on your analytics service
    // console.log('Event tracked:', eventName, eventData);
}

// Track section views
const trackingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            trackEvent('section_viewed', { section: entry.target.id });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
    trackingObserver.observe(section);
});

// Contact button click tracking
document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('contact_cta_clicked');
    });
});

// Performance optimization - Lazy load images if any
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
