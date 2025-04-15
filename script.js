// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Animate skill bars on scroll
    const skillSections = document.querySelectorAll('.skill-progress');
    
    const animateSkills = () => {
        skillSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                const progressBar = section.querySelector('.progress');
                progressBar.style.width = progressBar.style.width || progressBar.getAttribute('style').split('width:')[1].trim();
            }
        });
    };
    
    // Initial check for visible elements
    animateSkills();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkills);

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }

    // Typing effect for hero section
    const typingElement = document.querySelector('.hero-content h2');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .education-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item, .project-card, .skill-category, .education-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .timeline-item.animate, .project-card.animate, .skill-category.animate, .education-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-item:nth-child(1), .project-card:nth-child(1), .skill-category:nth-child(1), .education-item:nth-child(1) {
            transition-delay: 0.1s;
        }
        
        .timeline-item:nth-child(2), .project-card:nth-child(2), .skill-category:nth-child(2), .education-item:nth-child(2) {
            transition-delay: 0.2s;
        }
        
        .timeline-item:nth-child(3), .project-card:nth-child(3), .skill-category:nth-child(3), .education-item:nth-child(3) {
            transition-delay: 0.3s;
        }
        
        .timeline-item:nth-child(4), .project-card:nth-child(4), .skill-category:nth-child(4), .education-item:nth-child(4) {
            transition-delay: 0.4s;
        }
        
        .timeline-item:nth-child(5), .project-card:nth-child(5), .skill-category:nth-child(5), .education-item:nth-child(5) {
            transition-delay: 0.5s;
        }
        
        .timeline-item:nth-child(6), .project-card:nth-child(6), .skill-category:nth-child(6), .education-item:nth-child(6) {
            transition-delay: 0.6s;
        }
    `;
    document.head.appendChild(style);
    
    // Initial check for visible elements
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Preloader
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="spinner"></div>
    `;
    document.body.appendChild(preloader);
    
    // Add preloader styles
    const preloaderStyle = document.createElement('style');
    preloaderStyle.textContent = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(37, 99, 235, 0.1);
            border-radius: 50%;
            border-top-color: #2563eb;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .preloader.fade-out {
            opacity: 0;
            visibility: hidden;
        }
    `;
    document.head.appendChild(preloaderStyle);
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            setTimeout(function() {
                preloader.remove();
            }, 500);
        }, 500);
    });

    // Initialize progress circles
    document.querySelectorAll('.skill-progress-circle').forEach(circle => {
        const progress = circle.dataset.progress;
        const progressCircle = circle.querySelector('.progress-ring-circle');
        const circumference = 339.292;
        progressCircle.style.setProperty('--progress', progress / 100);
    });

    // Initialize skill bars
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const level = bar.dataset.level;
        const fill = bar.querySelector('.skill-bar-fill');
        fill.style.setProperty('--level', level + '%');
    });
});

// Form submission handling
function sendEmail(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showFormStatus('Please fill in all fields', 'error');
        return false;
    }
    
    // Prepare form data for sending
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        recipient: 'manav.kakani@techanek.com'
    };
    
    // Show loading message
    showFormStatus('Sending your message...', 'loading');
    
    // Use EmailJS service to send the email
    // You need to sign up at emailjs.com and replace these with your actual service ID, template ID, and user ID
    emailjs.send('service_id', 'template_id', formData, 'user_id')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showFormStatus('Your message has been sent successfully!', 'success');
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showFormStatus('Failed to send message. Please try again later.', 'error');
        });
    
    return false;
}

function showFormStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = 'form-status';
    
    if (type === 'success') {
        formStatus.classList.add('success');
    } else if (type === 'error') {
        formStatus.classList.add('error');
    } else {
        formStatus.style.display = 'block';
        formStatus.style.color = '#2563eb';
        formStatus.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
        formStatus.style.border = '1px solid #2563eb';
    }
} 