const clickedButton = document.querySelector(".in-play-page .inplay-board div:first-child i");
const activePart = document.querySelector(".in-play-page .inplay-board-hided-part");

clickedButton.addEventListener("click", () =>{
    activePart.classList.toggle("is-clicked");

});