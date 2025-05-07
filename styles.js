// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // ----- NAVBAR SCROLL EFFECT -----
    const navbar = document.querySelector('.navbar-container');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ----- SMOOTH SCROLLING FOR NAVIGATION -----
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Calculate navbar height
            const navHeight = navbar.offsetHeight;
            
            // Scroll to the section with an offset for the navbar
            window.scrollTo({
                top: targetSection.offsetTop - navHeight,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('menu-toggle').checked = false;
        });
    });
    
    // ----- SKILL BAR ANIMATIONS -----
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const skillObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const percentage = skillItem.getAttribute('data-percentage');
                const progressBar = skillItem.querySelector('.skill-progress');
                
                // Set the width of the progress bar
                progressBar.style.setProperty('--width', percentage + '%');
                
                // Add animation class
                skillItem.classList.add('animate');
                
                // Unobserve after animation has been triggered
                observer.unobserve(skillItem);
            }
        });
    }, observerOptions);
    
    skillItems.forEach(skill => {
        skillObserver.observe(skill);
    });
    
    // ----- SCROLL TO TOP BUTTON -----
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ----- CONTACT FORM HANDLING -----
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple form validation
            if (name && email && message) {
                // Display success message
                formResponse.style.display = 'block';
                formResponse.textContent = `Thank you ${name}! Your message has been sent.`;
                formResponse.style.color = 'var(--primary-color)';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formResponse.style.display = 'none';
                }, 5000);
            } else {
                // Display error message
                formResponse.style.display = 'block';
                formResponse.textContent = 'Please fill in all fields.';
                formResponse.style.color = 'var(--secondary-color)';
            }
        });
    }
    
    // ----- TYPING EFFECT FOR HERO SECTION -----
    const text = "Full Stack Developer";
    const typingElement = document.querySelector('.hero-text h2');
    
    if (typingElement) {
        // Clear initial text for typing effect
        typingElement.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
    }
    
    // ----- PROJECT FILTERS (FOR PROJECTS PAGE) -----
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // ----- ANIMATION ON SCROLL -----
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
    
    // ----- IMAGE LAZY LOADING -----
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(image => {
        const src = image.getAttribute('src');
        
        // Only observe images that aren't placeholders
        if (src && !src.includes('/api/placeholder/')) {
            // Set data-src and use a placeholder
            image.setAttribute('data-src', src);
            imageObserver.observe(image);
        }
    });
});