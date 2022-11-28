const clickedPart = document.querySelector(".in-play-live .in-play-live-list div:first-of-type");
const activePart = document.querySelector(".in-play-live .in-play-live-list div:nth-child(2)");

clickedPart.addEventListener("click", () =>{
    activePart.classList.toggle("is-clicked");
});

const clickedLign = document.querySelector(".in-play-live .in-play-live-list div:nth-child(3)");
const activeLign = document.querySelector(".in-play-live .in-play-live-list div:nth-child(4)");
const clickedLignn = document.querySelector(".in-play-live .in-play-live-list div:nth-child(4)");
const activeLignn = document.querySelector(".in-play-live .in-play-live-list div:nth-child(5)");

clickedLign.addEventListener("click", () =>{
    activeLign.classList.toggle("is-clicked");
    activeLignn.classList.remove("is-clicked");
});

clickedLignn.addEventListener("click", () =>{
    activeLignn.classList.toggle("is-clicked");
});



const liste = document.querySelector(".in-play-live-matches-header .menu");
const sentences = Array.from(liste.children);
/*const    activeSpace = document.querySelector("in-play-live-matches-body div.active");*/

const parts = document.querySelector(".in-play-live-matches-body");
const part = Array.from(parts.children);

for (let i = 0; i < sentences.length; i++) {
 
sentences[i].addEventListener("click", () =>{

    activeSentence = document.querySelector(".in-play-live-matches-header .menu p.active");
    activeSentence.classList.remove("active");
    sentences[i].classList.add("active"); 

    activeSpace = document.querySelector(".in-play-live-matches-body div.active");
    activeSpace.classList.remove("active");
    part[i].classList.add("active");


});



}
