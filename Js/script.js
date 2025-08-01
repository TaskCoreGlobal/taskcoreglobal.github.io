document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Check if the link is not the appointment button
            if (!link.classList.contains('btn-primary')) {
                mainNav.classList.remove('active');
            }
        });
    });
});
