
/* ************ for the nav responsive************************************ */ 


const humbergerContainer = document.querySelector("nav#header__main-nav2");
const humberger = document.querySelector(".nav2--icon");
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
const activeColll = document.querySelector(".header__main-nav--links li .nn");
const activeCollll = document.querySelector(".header__main-nav--links li .m");

 /* nav 2 button */
    activeCol.addEventListener('click', () =>{
    activeCol.classList.remove("c");
    activeCol.classList.add("c");
    activeColl.classList.remove("d");
    activeColl.classList.add("b");
    activeColll.classList.remove("n");
    activeColll.classList.add("nn");
    activeCollll.classList.remove("mm");
    activeCollll.classList.add("m");
});

activeColl.addEventListener('click', () =>{
    activeColl.classList.remove("b");
    activeColl.classList.add("d");
    activeCol.classList.remove("c");
    activeCol.classList.add("a");
    activeCollll.classList.remove("m");
    activeCollll.classList.add("mm");
    activeColll.classList.remove("nn");
    activeColll.classList.add("n");

});

/* nav1 button */
    activeColll.addEventListener('click', () =>{
        activeCol.classList.remove("c");
        activeCol.classList.add("c");
        activeColl.classList.remove("d");
        activeColl.classList.add("b");
        activeColll.classList.remove("n");
        activeColll.classList.add("nn");
        activeCollll.classList.remove("mm");
        activeCollll.classList.add("m");
    });

    activeCollll.addEventListener('click', () =>{
        activeColl.classList.remove("b");
        activeColl.classList.add("d");
        activeCol.classList.remove("c");
        activeCol.classList.add("a");
        activeCollll.classList.remove("m");
        activeCollll.classList.add("mm");
        activeColll.classList.remove("nn");
        activeColll.classList.add("n");
});

