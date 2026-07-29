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
console.log("Script loaded!");
    // Hide gift
    gift.style.transform = "scale(0)";
    gift.style.opacity = "0";

    message.innerHTML = "Opening... ❤️";

setTimeout(() => {

    message.innerHTML = "Some things are better felt than explained.";
    message.classList.add("quote-show");

}, 2200);

// Show lily bouquet
setTimeout(() => {

    bouquet.style.display = "block";

    setTimeout(() => {
        bouquet.style.opacity = "1";
        bouquet.style.bottom = "60px";
    }, 100);

}, 1000);
    
    // Start Flower Rain
    setTimeout(() => {
        startFlowerRain();
    },4200);
    
 setTimeout(() => {

    showLyrics();

  }, 10000);   

}); //

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

const lyrics = [
    "Oh, my angel",
    "Come back to me",
    "And I will love you",
    "'Til eternity"
];

function showLyrics() {

    let index = 0;

    const interval = setInterval(() => {

        const div = document.createElement("div");
        div.className = "floating-lyric";
        div.innerText = lyrics[index];

        div.style.left = Math.random() * 80 + "vw";
        div.style.top = Math.random() * 80 + "vh";
        
        // Premium random size
div.style.fontSize = (55 + Math.random() * 55) + "px";

// Premium opacity
div.style.opacity = (0.20 + Math.random() * 0.20);

// Random rotation
div.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
const moveX = (Math.random() * 500 - 250) + "px";
const moveY = (Math.random() * 300 - 150) + "px";

div.style.setProperty("--moveX", moveX);
div.style.setProperty("--moveY", moveY);
        
        document.body.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 12000);

        index++;

       if (index >= lyrics.length) {
    index = 0;
}

    }, 2000);

}
