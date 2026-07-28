// ===============================
// Flowers For You ❤️
// ===============================

// Background Music
const music = new Audio("music.mp3");
music.loop = true;

document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

const gift = document.getElementById("gift");
const message = document.getElementById("message");
const bouquet = document.getElementById("bouquet");

gift.addEventListener("click", () => {

    // Hide gift
    gift.style.transform = "scale(0)";
    gift.style.opacity = "0";

    message.innerHTML = "Opening... ❤️";

    // Show bouquet
    bouquet.style.display = "block";

  // Show lily bouquet
setTimeout(() => {

    bouquet.style.display = "block";

    setTimeout(()=>{
        bouquet.style..opacity = "1";
        bouquet.style..bottom = "60px";
    },100);

}, 1000);
    
    // Start Flower Rain
    setTimeout(() => {
        startFlowerRain();
    },4200);

});

function showFlower(selector){

    const flower = document.querySelector(selector);

    if(!flower) return;

    flower.style.opacity = "1";
    flower.style.transform = "scale(1) rotate(0deg)";
}

// Flower Rain
function startFlowerRain(){

    const container = document.getElementById("flower-rain");

    if(!container) return;

    const flowers = ["🌸","🌹","🌺","🌷","🌼","💮","🌻"];

    setInterval(()=>{

        const f = document.createElement("div");

        f.className = "rain-flower";

        f.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

        f.style.left = Math.random()*100 + "vw";
        f.style.fontSize = (20 + Math.random()*25) + "px";

        container.appendChild(f);

        setTimeout(()=>{
            f.remove();
        },6000);

    },250);

}
