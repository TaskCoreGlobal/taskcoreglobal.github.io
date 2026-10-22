document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const menuIcon = menuToggle ? menuToggle.querySelector("i") : null;

    if (mainNav) {
        mainNav.id = "main-navigation";
    }

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = mainNav.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars", !isOpen);
                menuIcon.classList.toggle("fa-times", isOpen);
            }
        });
    }

    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    let lastScroll = window.scrollY;
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", function () {
        if (!header) return;
        if (window.scrollY > lastScroll && window.scrollY > 80) {
            header.classList.add("hide-on-scroll");
        } else {
            header.classList.remove("hide-on-scroll");
        }
        lastScroll = window.scrollY;
    });

    function attachAjaxForm(formId, statusId, successMessage) {
        const form = document.getElementById(formId);
        const status = document.getElementById(statusId);
        if (!form || !status) return;

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            status.textContent = "Submitting...";
            status.className = "";

            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { Accept: "application/json" },
            })
                .then(function (response) {
                    if (response.ok) {
                        status.textContent = successMessage;
                        status.className = "form-status-success";
                        form.reset();
                        return;
                    }

                    return response.json().then(function (data) {
                        const message = data.errors
                            ? data.errors.map(function (error) { return error.message; }).join(", ")
                            : "Oops! There was a problem submitting your form.";
                        status.textContent = message;
                        status.className = "form-status-error";
                    });
                })
                .catch(function () {
                    status.textContent = "Oops! There was a problem submitting your form.";
                    status.className = "form-status-error";
                });
        });
    }

    attachAjaxForm("contactForm", "contact-form-status", "Thanks for your submission!");
    attachAjaxForm("appointmentForm", "appointment-form-status", "Thanks for your appointment request!");
});
