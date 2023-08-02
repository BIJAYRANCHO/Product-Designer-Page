// SMOOTH SCROLLING
/*
    attach loco scroll css
    attach locomotive scroll min js
    some code from loco github for js 
*/
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// GSAP
/* attach GSAP*/



function circleMouseFollower(){
    window.addEventListener("mousemove", (dets)=>{
        // console.log(dets.clientX, dets.clientY);
        document.querySelector('.miniCircle').style.transform =
         `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();


















