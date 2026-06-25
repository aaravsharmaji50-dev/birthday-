const pages = document.querySelectorAll(".page");

let currentPage = 0;

const bgMusic = document.getElementById("bgMusic");
const voiceNote = document.getElementById("voiceNote");

/* PAGE CHANGE */

function showPage(index){

pages.forEach(page=>{
page.classList.remove("active");
});

pages[index].classList.add("active");

currentPage = index;

}

function nextPage(){

if(currentPage < pages.length - 1){

showPage(currentPage + 1);

}

}

/* START WEBSITE */

function startWebsite(){

bgMusic.play().catch(()=>{});

showPage(1);

}

/* VOICE NOTE */

function playVoiceNote(){

bgMusic.pause();

voiceNote.currentTime = 0;

voiceNote.play();

}

voiceNote.addEventListener("ended",()=>{

bgMusic.play().catch(()=>{});

});

/* HEARTS */

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

const heart = document.createElement("span");

heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "%";

heart.style.animationDuration =
(Math.random() * 4 + 4) + "s";

heart.style.fontSize =
(Math.random() * 20 + 15) + "px";

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);

/* INIT */

showPage(0);
console.log("JS Loaded");
