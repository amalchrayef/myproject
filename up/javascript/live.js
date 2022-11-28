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

const list1 = document.querySelector(".in-play-live-matches-body  div.FR");
const  underList1= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div div.FR-under-list");

list1.addEventListener("click", () =>{
    underList1.classList.toggle("is-clicked");
    /*underList1.classList.remove("is-clicked");*/
});

const list2 = document.querySelector(".in-play-live-matches-body  div.DC");
const  underList2= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div div.DC-under-list");

list2.addEventListener("click", () =>{
    underList2.classList.toggle("is-clicked");
    /*underList1.classList.remove("is-clicked");*/
});
const list3 = document.querySelector(".in-play-live-matches-body .second-list div.DC");
const  underList3= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.second-list div.DC-under-list");

list3.addEventListener("click", () =>{
    underList3.classList.toggle("is-clicked");
    /*underList1.classList.remove("is-clicked");*/
});