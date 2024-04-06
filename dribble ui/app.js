const tl1 = gsap.timeline()
tl1.to(".card",{
    opacity:1,
    stagger:0.1,
    rotate:0,
    scale:1,
    ease: "power1.out",
    duration:0.9
},">")
.to(".page1Cards .card",{
    left:0,
    duration:50,
    ease: "power1.out",
    repeat:-1,
    
},">")

const tl2 = gsap.timeline()
tl2.to(".designservice",{
    marginLeft:0,
    duration:30,
    ease: "power1.out",
    repeat:-1,
})