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

function firstPafeAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {

        y: '-10',
        opacity : 0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        delay:-1,
        duration: 2.2,
        stagger: .2

    }
    )
    .from(".homefooter",{
        y: -10,
        opacity: 0,
        delay: -1,
        duration:1.5,
        ease: Expo.easeInOut
    })
   

}

var timeout;
function circleChaptaKaro(){
    // define default scale value
    var xscale =1;
    var yscale =1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", (dets)=>{
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(0.8,1.2, xdiff);
        yscale = gsap.utils.clamp(0.8,1.2, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;
        // console.log(xdiff, ydiff);
        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(() => {
            document.querySelector('.miniCircle').style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
   
        }, 100);


    });
}


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", (dets)=>{
        // console.log(dets.clientX, dets.clientY);
        document.querySelector('.miniCircle').style.transform =`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleChaptaKaro();
circleMouseFollower();
firstPafeAnim();


// image moving code
















