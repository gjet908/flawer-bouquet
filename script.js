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

    // Grow stems + leaves
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

    },100);

    // Flower 1
    setTimeout(() => {
        showFlower(".flower1");
    },1500);

    // Flower 2
    setTimeout(() => {
        showFlower(".flower2");
    },1900);

    // Flower 3
    setTimeout(() => {
        showFlower(".flower3");
    },2300);

    // Flower 4
    setTimeout(() => {
        showFlower(".flower4");
    },2700);

    // Flower 5
    setTimeout(() => {
        showFlower(".flower5");
    },3100);

    // Flower 6
    setTimeout(() => {
        showFlower(".flower6");
    },3500);

    // Flower 7
    setTimeout(() => {
        showFlower(".flower7");
    },3900);

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
