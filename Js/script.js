window.addEventListener("load", () => {
    console.log("✅ Page fully loaded, hiding loader");
    const loader = document.getElementById("loading");
    if (loader) loader.style.display = "none";
});

// Safety fallback after 1.5 seconds
setTimeout(() => {
    console.log("⏱ Fallback timeout reached, hiding loader");
    const loader = document.getElementById("loading");
    if (loader) loader.style.display = "none";
}, 1500);
