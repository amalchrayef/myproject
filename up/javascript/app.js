
/* ************ for the nav responsive************************************ */ 


const humbergerContainer = document.querySelector(".header__main-nav2");
const humberger = document.querySelector(".header__main-nav2--icon");
/*const links = document.querySelectorAll ('.header__main-nav--links li');*/
 
humberger.addEventListener('click', () =>{
    humbergerContainer.classList.toggle("clicked");

/*links.forEach((link)=> {
    links.classList.toggle("fade");
});*/
});


/******************  for the inplay sports active buttons *************   */ 

const activeCol = document.querySelector(".header__main-nav2--links li.c");
const activeColl = document.querySelector(".header__main-nav2--links li.b");
const activeColll = document.querySelector(".header__main-nav--parts li .nn");
const activeCollll = document.querySelector(".header__main-nav--parts li .m");


function ChangeClass (){
    activeCol.classList.remove("c");
    activeCol.classList.add("c");
    activeColl.classList.remove("d");
    activeColl.classList.add("b");
    activeColll.classList.remove("n");
    activeColll.classList.add("nn");
    activeCollll.classList.remove("mm");
    activeCollll.classList.add("m");
}

function ChangeClasses (){
    activeColl.classList.remove("b");
    activeColl.classList.add("d");
    activeCol.classList.remove("c");
    activeCol.classList.add("a");
    activeCollll.classList.remove("m");
    activeCollll.classList.add("mm");
    activeColll.classList.remove("nn");
    activeColll.classList.add("n");
}
 /* nav 2 button */
    activeCol.addEventListener('click', () =>{
        ChangeClass ();
});

activeColl.addEventListener('click', () =>{
    ChangeClasses ();

});

/* nav1 button */
    activeColll.addEventListener('click', () =>{
        ChangeClass ();
    });

    activeCollll.addEventListener('click', () =>{
        ChangeClasses ();
});

/******************  for the featured topevents active buttons *************   */ 

const activeButtonn = document.querySelector("middle-part-lign-2-tt a:nth-child(1)");
const activeButton = document.querySelector("middle-part-lign-2-tt a:nth-child(2)");


activeButtonn.addEventListener('click', () =>{
  activeButtonn.classList.remove("off");
  activeButtonn.classList.add("on");
  activeButton.classList.remove("on");
  activeButton.classList.add("off");
});
activeButton.addEventListener('click', () =>{
    activeButton.classList.remove("off");
    activeButton.classList.add("on");
    activeButtonn.classList.remove("on");
    activeButtonn.classList.add("off");
});

 // console.log(activeButton);

/******************  for the carousel *************   */ 
/*const list = document.querySelector(".gallery-carousel__img-container--list");
const imgs = Array.from(list.children);
const nextButton = document.querySelector(".gallery-carousel__btn--right");
const prevButton = document.querySelector(".gallery-carousel__btn--left");

const imgWidth = imgs[0].getBoundingClientRect().width;

const setImgPosition = (img, index) => {
  img.style.left = imgWidth * index + "px";
};
imgs.forEach(setImgPosition);
// Hide/Show Arrows
const hideShowArrows = (imgs, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  } else if (targetIndex === imgs.length - 1) {
    prevButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
  }
};
When we click on the right button, move images to the left
-----------*-*--*-*-*-*-*-*-*--*-*-*-*-*------------------------------------------------
*/

/*nextButton.addEventListener("click", (e) => {
    const currentImg = list.querySelector(".current--img");
    const nextImg = currentImg.nextElementSibling;
    const currentDot = carouselNav.querySelector(".current--img");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = imgs.findIndex((img) => img === nextImg);
  
    moveToImg(list, currentImg, nextImg);
    updateDots(currentDot, nextDot);
    hideShowArrows(imgs, prevButton, nextButton, nextIndex);
  });
  
  /* 
  --------*-*-*-*-*-*-*-*-*-*-*-*-*-*-*---------------------------------------------------
  When we click on the left button, move images to the right
  -----------*-*--*-*-*-*-*-*-*--*-*-*-*-*------------------------------------------------
  */
  
 /* prevButton.addEventListener("click", (e) => {
    const currentImg = list.querySelector(".current--img");
    const prevImg = currentImg.previousElementSibling;
    const currentDot = carouselNav.querySelector(".current--img");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = imgs.findIndex((img) => img === prevImg);
  
    moveToImg(list, currentImg, prevImg);
    updateDots(currentDot, prevDot);
    hideShowArrows(imgs, prevButton, nextButton, prevIndex);
  });
  
  /* */
