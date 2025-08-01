document.addEventListener('DOMContentLoaded', function() {
        
        // Hide the preloader once the window has fully loaded all resources
        window.addEventListener('load', hidePreloader);
        
        // As a fallback, hide the preloader after a 2-second timeout
        // This prevents the preloader from getting stuck if some asset fails to load
        setTimeout(hidePreloader, 2000); // 2-second timeout
    }

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', function() {
            mainNavUl.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    } else {
        console.error("Error: Could not find mobile menu toggle or navigation ul.");
    }

    // --- Header Transparency on Scroll ---
    const headerWrapper = document.querySelector('.header-wrapper');
    if (headerWrapper) {
        const headerHeight = headerWrapper.offsetHeight;
        window.addEventListener('scroll', function() {
            if (window.scrollY > headerHeight / 2) {
                headerWrapper.classList.add('scrolled');
            } else {
                headerWrapper.classList.remove('scrolled');
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Update current year in footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
