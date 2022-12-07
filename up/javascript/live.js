           
            /************************* for the menu *************************/ 

            /************************* favorite *************************/ 

const clickedPart = document.querySelector(".in-play-live .in-play-live-list div:first-of-type");
const activePart = document.querySelector(".in-play-live .in-play-live-list div:nth-child(2)");

clickedPart.addEventListener("click", () =>{
    activePart.classList.toggle("is-clicked");
});

            /************************* soccer *************************/ 

const soccer = document.querySelector(".in-play-live-list div:nth-child(3) ");
const matchList = document.querySelector(".in-play-live-list .match-list ");
const clickedOne = document.querySelector(".in-play-live-list .match-list .one");
const activeOne = document.querySelector(".in-play-live-list .match-list .second-part.one");

soccer.addEventListener("click", () =>{
    matchList.classList.toggle("is-clicked");
});

clickedOne.addEventListener("click", () =>{
    activeOne.classList.toggle("is-clicked");
});

const clickedTwo = document.querySelector(".in-play-live-list .match-list .two");
const activeTwo = document.querySelector(".in-play-live-list .match-list .second-part.two");

clickedTwo.addEventListener("click", () =>{
    activeTwo.classList.toggle("is-clicked");
});

const clickedThree = document.querySelector(".in-play-live-list .match-list .three");
const activeThree = document.querySelector(".in-play-live-list .match-list .second-part.three");

clickedThree.addEventListener("click", () =>{
    activeThree.classList.toggle("is-clicked");
});

const clickedFour = document.querySelector(".in-play-live-list .match-list .four");
const activeFour = document.querySelector(".in-play-live-list .match-list .second-part.four");

clickedFour.addEventListener("click", () =>{
    activeFour.classList.toggle("is-clicked");
});

const clickedFive = document.querySelector(".in-play-live-list .match-list .five");
const activeFive = document.querySelector(".in-play-live-list .match-list .second-part.five");

clickedFive.addEventListener("click", () =>{
    activeFive.classList.toggle("is-clicked");
});

const clickedSix = document.querySelector(".in-play-live-list .match-list .six");
const activeSix = document.querySelector(".in-play-live-list .match-list .second-part.six");

clickedSix.addEventListener("click", () =>{
    activeSix.classList.toggle("is-clicked");
});
            /************************* tennis *************************/ 

            const tennis = document.querySelector(".in-play-live-list div:nth-child(5)");
            const tennisList = document.querySelector(".in-play-live-list .tennis-list");
            const tennisclickedOne = document.querySelector(".in-play-live-list .tennis-list .one");
            const tennisactiveOne = document.querySelector(".in-play-live-list .tennis-list .second-part.one");
            
            tennis.addEventListener("click", () =>{
                tennisList.classList.toggle("is-clicked");
            });
            
            tennisclickedOne.addEventListener("click", () =>{
                tennisactiveOne.classList.toggle("is-clicked");
            });
            
            const tennisclickedTwo = document.querySelector(".in-play-live-list .tennis-list .two");
            const tennisactiveTwo = document.querySelector(".in-play-live-list .tennis-list .second-part.two");
            
            tennisclickedTwo.addEventListener("click", () =>{
                tennisactiveTwo.classList.toggle("is-clicked");
            });
            
            const tennisclickedThree = document.querySelector(".in-play-live-list .tennis-list .three");
            const tennisactiveThree = document.querySelector(".in-play-live-list .tennis-list .second-part.three");
            
            tennisclickedThree.addEventListener("click", () =>{
                tennisactiveThree.classList.toggle("is-clicked");
            });
            
            const tennisclickedFour = document.querySelector(".in-play-live-list .tennis-list .four");
            const tennisactiveFour = document.querySelector(".in-play-live-list .tennis-list .second-part.four");
            
            tennisclickedFour.addEventListener("click", () =>{
                tennisactiveFour.classList.toggle("is-clicked");
            });
            
            const tennisclickedFive = document.querySelector(".in-play-live-list .tennis-list .five");
            const tennisactiveFive = document.querySelector(".in-play-live-list .tennis-list .second-part.five");
            
            tennisclickedFive.addEventListener("click", () =>{
                tennisactiveFive.classList.toggle("is-clicked");
            });
            
            const tennisclickedSix = document.querySelector(".in-play-live-list .tennis-list .six");
            const tennisactiveSix = document.querySelector(".in-play-live-list .tennis-list .second-part.six");
            
            tennisclickedSix.addEventListener("click", () =>{
                tennisactiveSix.classList.toggle("is-clicked");
            });

 /************************* badminton *************************/ 

 const badminton = document.querySelector(".in-play-live-list div:nth-child(7)");
 const badmintonList = document.querySelector(".in-play-live-list .badminton-list");
 const badmintonclickedOne = document.querySelector(".in-play-live-list .badminton-list .one");
 const badmintonactiveOne = document.querySelector(".in-play-live-list .badminton-list .second-part.one");
 
 badminton.addEventListener("click", () =>{
    badmintonList.classList.toggle("is-clicked");
 });
 
 badmintonclickedOne.addEventListener("click", () =>{
    badmintonactiveOne.classList.toggle("is-clicked");
 });
 
 const badmintonclickedTwo = document.querySelector(".in-play-live-list .badminton-list .two");
 const badmintonactiveTwo = document.querySelector(".in-play-live-list .badminton-list .second-part.two");
 
 badmintonclickedTwo.addEventListener("click", () =>{
    badmintonactiveTwo.classList.toggle("is-clicked");
 });
 
 const badmintonclickedThree = document.querySelector(".in-play-live-list .badminton-list .three");
 const badmintonactiveThree = document.querySelector(".in-play-live-list .badminton-list .second-part.three");
 
 badmintonclickedThree.addEventListener("click", () =>{
    badmintonactiveThree.classList.toggle("is-clicked");
 });
 
 const badmintonclickedFour = document.querySelector(".in-play-live-list .badminton-list .four");
 const badmintonactiveFour = document.querySelector(".in-play-live-list .badminton-list .second-part.four");
 
 badmintonclickedFour.addEventListener("click", () =>{
    badmintonactiveFour.classList.toggle("is-clicked");
 });
 
 const badmintonclickedFive = document.querySelector(".in-play-live-list .badminton-list .five");
 const badmintonactiveFive = document.querySelector(".in-play-live-list .badminton-list .second-part.five");
 
 badmintonclickedFive.addEventListener("click", () =>{
    badmintonactiveFive.classList.toggle("is-clicked");
 });
 
 const badmintonclickedSix = document.querySelector(".in-play-live-list .badminton-list .six");
 const badmintonactiveSix = document.querySelector(".in-play-live-list .badminton-list .second-part.six");
 
 badmintonclickedSix.addEventListener("click", () =>{
    badmintonactiveSix.classList.toggle("is-clicked");
 });
/*const lickedLign = document.querySelector(".in-play-live .in-play-live-list div:nth-child(3)");
const ctiveLign = document.querySelector(".in-play-live .in-play-live-list div:nth-child(4)");
const lickedLignn = document.querySelector(".in-play-live .in-play-live-list div:nth-child(4)");
const ctiveLignn = document.querySelector(".in-play-live .in-play-live-list div:nth-child(5)");

    /************************* for the filter *************************/ 

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
    /************************* for the underlists ((all)) *************************/ 

const list1 = document.querySelector(".in-play-live-matches-body  div.FR");
const  underList1= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div div.FR-under-list");

list1.addEventListener("click", () =>{
    underList1.classList.toggle("is-clicked");
});

const list2 = document.querySelector(".in-play-live-matches-body  div.DC");
const  underList2= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div div.DC-under-list");

list2.addEventListener("click", () =>{
    underList2.classList.toggle("is-clicked");
});
const list3 = document.querySelector(".in-play-live-matches-body .second-DC-list div.DC");
const  underList3= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.second-DC-list div.DC-under-list");

list3.addEventListener("click", () =>{
    underList3.classList.toggle("is-clicked");
});

const list4 = document.querySelector(".in-play-live-matches-body  div.MG");
const  underList4= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div div.MG-under-list");
   list4.addEventListener("click", () =>{
    underList4.classList.toggle("is-clicked");
});
const list5 = document.querySelector(".in-play-live-matches-body .second-MG-list div.MG");
const  underList5= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.second-MG-list div.MG-under-list");
   list5.addEventListener("click", () =>{
    underList5.classList.toggle("is-clicked");
});
const list6 = document.querySelector(".in-play-live-matches-body .third-MG-list div.MG");
const  underList6= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.third-MG-list div.MG-under-list");
   list6.addEventListener("click", () =>{
    underList6.classList.toggle("is-clicked");
});

const list7 = document.querySelector(".in-play-live-matches-body .forth-MG-list div.MG");
const  underList7= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.forth-MG-list div.MG-under-list");
   list7.addEventListener("click", () =>{
    underList7.classList.toggle("is-clicked");
});


const list8 = document.querySelector(".in-play-live-matches-body .third-DC-list div.DC");
const  underList8= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all .third-DC-list div.DC-under-list");
   list8.addEventListener("click", () =>{
    underList8.classList.toggle("is-clicked");
});

const list9 = document.querySelector(".in-play-live-matches-body .fifth-MG-list div.MG");
const  underList9= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all .fifth-MG-list div.MG-under-list");
   list9.addEventListener("click", () =>{
    underList9.classList.toggle("is-clicked");
});

const list10 = document.querySelector(".in-play-live-matches-body .sixth-MG-list div.MG");
const  underList10= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all .sixth-MG-list div.MG-under-list");
   list10.addEventListener("click", () =>{
    underList10.classList.toggle("is-clicked");
});

const list11 = document.querySelector(".in-play-live-matches-body .seventh-MG-list div.MG");
const  underList11= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.seventh-MG-list div.MG-under-list");
   list11.addEventListener("click", () =>{
    underList11.classList.toggle("is-clicked");
});

const list12 = document.querySelector(".in-play-live-matches-body .eighth-MG-list div.MG");
const  underList12= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.eighth-MG-list div.MG-under-list");
   list12.addEventListener("click", () =>{
    underList12.classList.toggle("is-clicked");
});

const list13 = document.querySelector(".in-play-live-matches-body .ninth-MG-list div.MG");
const  underList13= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.ninth-MG-list div.MG-under-list");
   list13.addEventListener("click", () =>{
    underList13.classList.toggle("is-clicked");
});

const list14 = document.querySelector(".in-play-live-matches-body .tenth-MG-list div.MG");
const  underList14= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.tenth-MG-list div.two-lists");

   list14.addEventListener("click", () =>{
    underList14.classList.toggle("is-clicked");
});


    /************************* for the slider/all *************************/ 

    const slider = document.querySelector(".in-play-live-matches-body .tenth-MG-list .slider-all .slider");
    const  all = document.querySelector(".in-play-live-matches-body .tenth-MG-list .slider-all .all");
    const sliderPart= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.tenth-MG-list div.two-lists div.MG-under-list-slider");
    const  allPart = document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-all div.tenth-MG-list div.two-lists div.MG-under-list-all");
    
    all.addEventListener("click", () =>{
        allPart.classList.remove("not-active");
        sliderPart.classList.remove("active");
        sliderPart.classList.add("not-active");
         allPart.classList.add("active");
         slider.classList.remove("on");
         all.classList.add("on");


    });

    slider.addEventListener("click", () =>{
        allPart.classList.remove("active");
        sliderPart.classList.remove("not-active");
        allPart.classList.add("not-active");
       sliderPart.classList.add("active");
       slider.classList.add("on");
       all.classList.remove("on");
    });
    

    /************************* for the underlists ((asian lines)) *************************/ 

    const list15 = document.querySelector(".in-play-live-matches-body-asian-lines .eighth-MG-list div.MG");
    const  underList15= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-asian-lines div.eighth-MG-list div.MG-under-list");
       list15.addEventListener("click", () =>{
        underList15.classList.toggle("is-clicked");
    });

    
        /************************* for the underlists ((goals)) *************************/ 

        const list16 = document.querySelector(".in-play-live-matches-body-goals .third-DC-list div.DC");
        const  underList16= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-goals .third-DC-list div.DC-under-list");
           list16.addEventListener("click", () =>{
            underList16.classList.toggle("is-clicked");
        });

        const list17 = document.querySelector(".in-play-live-matches-body-goals  div.MG");
        const  underList17= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-goals div div.MG-under-list");
           list17.addEventListener("click", () =>{
            underList17.classList.toggle("is-clicked");
        });
        const list18 = document.querySelector(".in-play-live-matches-body-goals .second-MG-list div.MG");
       const  underList18= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-goals div.second-MG-list div.MG-under-list");
   list18.addEventListener("click", () =>{
    underList18.classList.toggle("is-clicked");
});


        /************************* for the underlists ((half)) *************************/ 

        const list19 = document.querySelector(".in-play-live-matches-body-half .third-DC-list div.DC");
        const  underList19= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-half .third-DC-list div.DC-under-list");
           list19.addEventListener("click", () =>{
            underList19.classList.toggle("is-clicked");
        });

        const list20 = document.querySelector(".in-play-live-matches-body-half div div.MG");
        const  underList20= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-half  div.MG-under-list");
           list20.addEventListener("click", () =>{
            underList20.classList.toggle("is-clicked");
        });

               /************************* for the underlists ((minutes)) *************************/ 

               const list21 = document.querySelector(".in-play-live-matches-body-minutes .third-DC-list div.DC");
               const  underList21= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-minutes .third-DC-list div.DC-under-list");
                  list21.addEventListener("click", () =>{
                   underList21.classList.toggle("is-clicked");
               });
       
               const list22 = document.querySelector(".in-play-live-matches-body-minutes div div.MG");
               const  underList22= document.querySelector(".in-play-live-matches-body .in-play-live-matches-body-minutes  div.MG-under-list");
                  list22.addEventListener("click", () =>{
                   underList22.classList.toggle("is-clicked");
               });

    /************************* for the tracker part  ((stats-timeline)) *************************/ 
    const stats = document.querySelector(".in-play-live-tracker .st-T-line .stats-timeline div:nth-child(1)");
    const  timeline= document.querySelector(".in-play-live-tracker .st-T-line .stats-timeline div:nth-child(2)");
       stats.addEventListener("click", () =>{
        stats.classList.toggle("active");
        timeline.classList.remove("active");

    });

      timeline.addEventListener("click", () =>{
        timeline.classList.toggle("active");
        stats.classList.remove("active");

    });

