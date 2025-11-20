// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Grazie per averci contattato! Ti risponderemo al più presto.");
    this.reset();
});
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("appsModal");
    const openBtn = document.getElementById("openAppsModal");
    const closeBtn = document.getElementById("closeAppsModal");

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Chiudi cliccando fuori dal box
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});
