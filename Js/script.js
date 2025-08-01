document.addEventListener('DOMContentLoaded', function() {
    // --- Preloader Removal ---
const preloader = document.getElementById('preloader');
if (preloader) {
    window.addEventListener('load', function() {
        // Remove preloader after content is loaded
        preloader.classList.add('hidden');
    });
    // Add a timeout just in case of slow loading
    setTimeout(function() {
        preloader.classList.add('hidden');
    }, 1500); // 1.5 second timeout
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
