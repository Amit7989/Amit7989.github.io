
var menu=document.querySelector("#nav-prt2 i")
var full=document.querySelector("#full-scr-nav")
var closebtn=document.querySelector("#nav #close")
var flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
    full.style.top="0%";
    document.querySelector("#nav h2").style.color="black";
    document.querySelector("#nav h3").style.color="black";
    document.querySelector("#nav i").style.color="black";
    document.querySelector("#nav #close").style.display="block";
    document.querySelector("#nav i").style.display="none";
    document.querySelector("#nav #close").style.color="black";
    document.querySelector("#page1").style.display="none";
    document.querySelector("#page2 img").style.display="none";
    flag=1;
    }
    
})
closebtn.addEventListener("click",function(){
    full.style.top="-100%";
    document.querySelector("#nav h2").style.color="white";
    document.querySelector("#nav h3").style.color="white";
    document.querySelector("#nav i").style.color="white";
    document.querySelector("#nav i").style.display="block";
    document.querySelector("#nav #close").style.display="none";
    document.querySelector("#page1").style.display="block";
    document.querySelector("#page2 img").style.display="block";
    flag=0
})

var tl=gsap.timeline();
tl.from("#page1 h1",{
    y:70,
    duration:0.7,
    opacity:0
})
.from("#page1 h2",{
    y:80,
    duration:0.7,
    opacity:0,
    delay:"-0.3"
})
.from("#page1 h3",{
    y:80,
    duration:0.7,
    opacity:0,
    delay:"-0.4"
})

// gsap.from("#page2 img",{
//     scale:0.5,
// })
gsap.to("#page2 img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"body",
        start:"top 95%",
        end:"end 5%",
        scrub:2
    }
})
gsap.from("#page3 h1",{
    rotateX:"-90deg",
    opacity:0,
    delay:-1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start:"top 55%",
        scrub:1,
    }
})
var slide=document.querySelectorAll("#page6 .slide1 h1")
slide.forEach(function(elem){
    gsap.to(elem,{
    transform:"translateX(-100%)",
    duration:4,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"body",
        scrub:3
    }
    })
})
var slide2=document.querySelectorAll("#page6 .slide2 h1")
slide2.forEach(function(move){
    gsap.to(move,{
        transform:"translateX(0%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"body",
            scrub:3
        }
    })
})

document.querySelector("#elem1 h1").addEventListener("mousemove",function(dets){
    document.querySelector("#img1").style.opacity=1
    document.querySelector("#img1").style.left=`${dets.x-200}px`
    document.querySelector("#img1").style.top=`${dets.y-400}px`
   
})
document.querySelector("#elem1 h1").addEventListener("mouseleave",function(dets){
    document.querySelector("#img1").style.opacity=0
    
})
document.querySelector("#elem2 h1").addEventListener("mousemove",function(dets){
    document.querySelector("#img2").style.opacity=1
    document.querySelector("#img2").style.left=`${dets.x -900}px`
    document.querySelector("#img2").style.top=`${dets.y-350}px`
})
document.querySelector("#elem2 h1").addEventListener("mouseleave",function(dets){
    document.querySelector("#img2").style.opacity=0
    
})