/* ==========================================================================
   DEVELOPER PORTFOLIO - BISHWAMBHAR SEN
   Interactive JavaScript Functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Dynamic Year Setter ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Dark/Light Theme Manager ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check for saved theme preference in localStorage, or fall back to system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
    } else if (savedTheme === 'dark') {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
    } else {
        // Fallback to system preference
        if (prefersDark) {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
        } else {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
        }
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- 3. Mobile Navigation Menu ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 4. Navbar Shadow on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // --- 5. High-Performance Scroll Reveal (Intersection Observer) ---
    const revealItems = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Reveal only once
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% of the item is visible
            rootMargin: '0px 0px -50px 0px' // Slightly offset trigger point
        });

        revealItems.forEach(item => {
            revealObserver.observe(item);
        });
    } else {
        // Fallback for older browsers
        const revealOnScrollFallback = () => {
            revealItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (itemTop < windowHeight * 0.85) {
                    item.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScrollFallback);
        revealOnScrollFallback(); // Initial check
    }

    // --- 6. Skills Grid Filtering Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-category-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Add fade out effect
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = 'block';
                        // Trigger reflow to restart transition
                        void card.offsetWidth; 
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 200); // Matches transition timing
            });
        });
    });

    // --- 7. Contact Form Handling & Toast Feedback ---
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const submitBtn = document.querySelector('.btn-submit');

    if (contactForm && toast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const subjectInput = document.getElementById('subject').value.trim();
            const messageInput = document.getElementById('message').value.trim();

            if (!nameInput || !emailInput || !subjectInput || !messageInput) {
                return; // Standard validation
            }

            // Simulate form submission
            if (submitBtn) {
                submitBtn.disabled = true;
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = `
                    Sending...
                    <svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" style="animation: spin 1s linear infinite; margin-left: 8px;">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" style="opacity: 0.25;"></circle>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" style="opacity: 0.75;"></path>
                    </svg>
                `;

                // Add spinner animation style dynamically if it doesn't exist
                if (!document.getElementById('spin-style')) {
                    const style = document.createElement('style');
                    style.id = 'spin-style';
                    style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
                    document.head.appendChild(style);
                }

                // Simulate network latency (1.2 seconds)
                setTimeout(() => {
                    // Show custom toast notification
                    toast.classList.add('show');
                    
                    // Reset form and buttons
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;

                    // Fade out toast after 4 seconds
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 4000);

                }, 1200);
            }
        });
    }
});
