/* ==============================
   TaskCore Global - Main Script
   ============================== */

/* ==== Loading Screen Fix ==== */
// Hide loader after full load OR after 1.5 seconds max
window.addEventListener("load", () => {
    const loader = document.getElementById("loading");
    if (loader) loader.style.display = "none";
});

// Safety fallback in case load event fails
setTimeout(() => {
    const loader = document.getElementById("loading");
    if (loader) loader.style.display = "none";
}, 1500);


/* ==== Mobile Menu Toggle ==== */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


/* ==== Smooth Scroll ==== */
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* ==== Sticky Header on Scroll ==== */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
