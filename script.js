
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
const bouquet = document.getElementById("bouquet");
bouquet.style.display = "block";
setTimeout(() => { 
    
document.querySelector(".stem1").style.height = "180px";
document.querySelector(".stem2").style.height = "220px";
document.querySelector(".stem3").style.height = "180px";
document.querySelector(".leaf1").style.opacity = "1";
document.querySelector(".leaf2").style.opacity = "1";
document.querySelector(".leaf3").style.opacity = "1";

document.querySelector(".leaf1").style.transform = "rotate(-35deg) scale(1)";
document.querySelector(".leaf2").style.transform = "rotate(30deg) scale(1)";
document.querySelector(".leaf3").style.transform = "rotate(35deg) scale(1)";
}, 100);   
setTimeout(() => {

document.querySelector(".flower1").style.opacity = "1";
document.querySelector(".flower1").style.transform = "scale(1) rotate(0deg)";

},1500);

setTimeout(() => {

document.querySelector(".flower2").style.opacity = "1";
document.querySelector(".flower2").style.transform = "scale(1) rotate(0deg)";

},1900);

setTimeout(() => {

document.querySelector(".flower3").style.opacity = "1";
document.querySelector(".flower3").style.transform = "scale(1) rotate(0deg)";

},2300);
});
