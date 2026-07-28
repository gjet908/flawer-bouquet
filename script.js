
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
    
setTimeout(() => {
    
    document.querySelector(".flower4").style.opacity = "1";
    document.querySelector(".flower4").style.transform = "scale(1) rotate(0deg)";
}, 2700);

setTimeout(() => {
    document.querySelector(".flower5").style.opacity = "1";
    document.querySelector(".flower5").style.transform = "scale(1) rotate(0deg)";
}, 3100);

setTimeout(() => {
    document.querySelector(".flower6").style.opacity = "1";
    document.querySelector(".flower6").style.transform = "scale(1) rotate(0deg)";
}, 3500);

setTimeout(() => {
    document.querySelector(".flower7").style.opacity = "1";
    document.querySelector(".flower7").style.transform = "scale(1) rotate(0deg)";
}, 3900);
    
setTimeout(() => {
    
    startFlowerRain();
}, 4200);
    
});

},2300);
});
function startFlowerRain(){

    const container = document.getElementById("flower-rain");

    const flowers = ["🌸","🌹","🌺","🌷","🌼","💮","🌻"];

    setInterval(()=>{

        const f = document.createElement("div");

        f.className = "rain-flower";

        f.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

        f.style.left = Math.random()*100 + "vw";

        f.style.fontSize = (20 + Math.random()*30) + "px";

        container.appendChild(f);

        setTimeout(()=>{
            f.remove();
        },6000);

    },250);

}
