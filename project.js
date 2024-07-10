 var tl = gsap.timeline()
 tl.from(".line h1",{
    y:150,
    stagger:0.28,
    duration:0.6,
    delay:0.3,
})
tl.from("#line1-part1",{
    oppacity:1,
    onStart:function(){
    var h5timer = document.querySelector("#line1-part1 h5")
     var grow = 0 
    setInterval(function(){
    if (grow<100){
        grow++
        h5timer.innerHTML =grow++
    }
   else{
    h5timer.innerHTML =grow
   }
},50)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:0,
})
 tl.to("#load",{
    opacity:0,
    duration:0.3,
    delay:3,
 })
 tl.from("page1",{
    y:1600,
    oppacity:0,
    delay:0.2,
    deration:0.5,
    ease:power4,
 })
tl.to("#load",{
    display:"none",
}) 