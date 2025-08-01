// ==== Loading Screen ====
window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});

// ==== Scroll Progress Bar ====
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// ==== Hide Header on Scroll ====
let lastScrollTop = 0;
let header = document.getElementById("main-header");
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px"; // Hide header
    } else {
        header.style.top = "0"; // Show header
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ==== Fade-in on Scroll ====
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
