

let menu=document.querySelector(".nav-elem i")
let full=document.querySelector(".full-scr-nav")
let cancel=document.querySelector(".nav-elem #cancel")

menu.addEventListener("click",function(){
    full.style.top = "0%"
    document.querySelector(".nav h2").style.color="#222"
    document.querySelector(".nav-elem h3").style.color="#222"
    document.querySelector(".nav-elem i").style.display="none"
    document.querySelector(".nav-elem #cancel").style.display="block"
    
})
cancel.addEventListener("click",function(){
    full.style.top="-100%"
    document.querySelector(".nav h2").style.color="#d1d1d1"
    document.querySelector(".nav-elem h3").style.color="#d1d1d1"
    document.querySelector(".nav-elem i").style.display="block"
    document.querySelector(".nav-elem #cancel").style.display="none"
})

let t1=gsap.timeline()
t1
.from(".page1 h1",{
    y:60,
    duration:0.7,
    opacity:0

})
.from(".page1 h4",{
    y:60,
    duration:0.5,
    opacity:0,
    delay:"-0.2"

})
.from(".page1 h2",{
    y:60,
    duration:0.35,
    opacity:0,
    delay:"-0.2"

})
.from(".page1 h3",{
    y:60,
    duration:0.35,
    opacity:0,
    delay:"-0.3"

})
.to(".page2 img",{
   scale:1,
   scrollTrigger:{
    trigger:".page2 img",
    scroller:"body",
    start:"top 60%",
    scrub:3
   }

})
.to(".page2 h1",{
    rotateX:0,
    opacity:1,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:3
    }
})
.to(".page4 h1",{
    // rotateX:0,
    opacity:1,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start:"top 60%",
        scrub:3
    }
})
 
let slide1h1=document.querySelectorAll(".page6 .slide1-of-h1 h1")
slide1h1.forEach(function(elem){
    gsap.to(elem,{
        duration:4,
        transform:`translateX(-100%)`,
        scrollTrigger:{
            trigger:".page6",
            scroller:"body",
            scrub:3
        }
    })
})

let slide2h1=document.querySelectorAll(".page6 .slide2-of-h1 h1")
slide2h1.forEach(function(elem){
    gsap.to(elem,{
        duration:4,
        transform:`translateX(0%)`,
        scrollTrigger:{
            trigger:".page6",
            scroller:"body",
            scrub:3
        }
    })
})


let leftimgmove=document.querySelector(".element1")
leftimgmove.addEventListener("mousemove",function(dets){
   document.querySelector(".page7 .element1 img").style.opacity=1
   document.querySelector(".page7 .element1 img").style.left=`${dets.x-500}px`
   document.querySelector(".page7 .element1 img").style.top=`${dets.y-530}px`
    

})

leftimgmove=document.querySelector(".element1")
leftimgmove.addEventListener("mouseleave",function(dets){
   document.querySelector(".page7 .element1 img").style.opacity=0
    

})
let rightimgmove=document.querySelector(".element2")
rightimgmove.addEventListener("mousemove",function(dets){
   document.querySelector(".page7 .element2 img").style.opacity=1
   document.querySelector(".page7 .element2 img").style.right=`${dets.x-1200}px`
   document.querySelector(".page7 .element2 img").style.top=`${dets.y-530}px`
    

})
rightimgmove=document.querySelector(".element2")
rightimgmove.addEventListener("mouseleave",function(dets){
   document.querySelector(".page7 .element2 img").style.opacity=0
    

})

//page3

let elem  = document.querySelectorAll(".elem")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
        val.childNodes[3].style.top=dets.y+"px"
    })
})