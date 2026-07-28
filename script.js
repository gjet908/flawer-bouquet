
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
const gift = document.getElementById("gift");
const message = document.getElementById("message");

gift.addEventListener("click", () => {

    gift.style.transform = "scale(0)";
    gift.style.opacity = "0";

    message.innerHTML = "Opening... ❤️";
document.getElementById("bouquet").style.display = "block";
document.querySelector(".stem1").style.height = "180px";
    
document.querySelector(".stem2").style.height = "220px";
    
document.querySelector(".stem3").style.height = "180px";

setTimeout(() => {

document.querySelector(".flower1").style.opacity = "1";
document.querySelector(".flower1").style.transform = "scale(1) rotate(0deg)";

},300);

setTimeout(() => {

document.querySelector(".flower2").style.opacity = "1";
document.querySelector(".flower2").style.transform = "scale(1) rotate(0deg)";

},700);

setTimeout(() => {

document.querySelector(".flower3").style.opacity = "1";
document.querySelector(".flower3").style.transform = "scale(1) rotate(0deg)";

},1100);
});
