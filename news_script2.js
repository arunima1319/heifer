import confetti from "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/+esm";

const button = document.getElementById("celebrate");
button.style.display = "inline-block";

button.addEventListener("click", () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
});

document.getElementById("headline").textContent =
    "🚀 JavaScript Takes Over the World!";
document.getElementById("loading-text").style.display = "none";