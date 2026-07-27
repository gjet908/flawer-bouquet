// ===============================
// Flowers For You
// Part 1
// ===============================

// Background Music
const music = new Audio("music.mp3");
music.loop = true;

// Play music on first click
document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// Simple click message
console.log("Flowers For You Loaded ❤️");
