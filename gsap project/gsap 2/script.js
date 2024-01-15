gsap.set(".a",{opacity:0, y:10})
gsap.set("#main-shoe",{opacity:0, y:10,scale:1.5})
gsap.set(".b",{opacity:0,y:10})
gsap.set(".c",{opacity:0})
gsap.set(".d",{opacity:0})

 let t1=gsap.timeline();
 t1
.from("#left", {
    width:0,
    duration:1.5,
    ease: Expo.easeInOut
 
 }) 
.from("#right", {
    width:0,
    duration:1,
  
   ease: Expo.easeInOut
 })
 .to(".b", {
    

     opacity:1,
     duration:1,
     y:0,
     ease: Expo.easeInOut
  
  })
.to(".a", {
   delay:-2,
   stagger:.4,
    opacity:1,
    duration:1.5,
    y:0,
    ease: Expo.easeInOut
 
 })
 .to(".c", {
    delay:-2,
     opacity:1,
     duration:1,
     ease: Expo.easeInOut
  
  })
  .to(".d", {
    delay:-1,
     opacity:0.4,
     duration:1,
     ease: Expo.easeInOut
  
  })
 
 .to("#main-shoe", {
   delay:-1,
    opacity:1,
    scale:1,
    y:0,
    duration:2,
    ease: Expo.easeInOut
 
 })