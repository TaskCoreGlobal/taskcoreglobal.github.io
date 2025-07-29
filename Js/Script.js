document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Header Transparency on Scroll
    const headerWrapper = document.querySelector('.header-wrapper');
    const heroSection = document.querySelector('.hero-top-section'); // Get the hero section

    if (headerWrapper && heroSection) {
        // Define the scroll threshold (when the header should become solid/fixed)
        // This is typically the height of the header itself, or a bit more.
        // Get the header's height dynamically
        const headerHeight = headerWrapper.offsetHeight;

        window.addEventListener('scroll', function() {
            if (window.scrollY > headerHeight / 2) { // You can adjust this threshold (e.g., headerHeight or headerHeight / 2)
                headerWrapper.classList.add('scrolled');
            } else {
                headerWrapper.classList.remove('scrolled');
            }
        });
    }


    // Update current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
