function page1Animation(){
    var tl = gsap.timeline();

tl.from("nav h1", {
    y: -40,
    opacity: 0,
    delay: 0.2,
    duration: 0.3
});
tl.from("nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.4,
    stagger: 0.1
});

tl.from("#center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.6
})
tl.from("#center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.5
})
tl.from("#center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from("#center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.7") //tl k saath hi chalega pr 1 second pehle chalega

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})

}

function page2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 50%",
            end:"top -50",
            scrub:2
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:0.6
    },"abc") //"" mei same name rkhoge to ek time me chalgea saare
    
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:0.6
    },"abc")
    
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:0.6
    },"xyz")
    
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:0.6
    },"xyz")
}

page1Animation()
page2Animation()

var path=`M 20 100 Q 402.5 100 1850 100`
var finalPath=`M 20 100 Q 915 100 1850 100`
var string= document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path=`M 20 100 Q ${dets.x} ${dets.y} 1850 100`
    gsap.to("svg path",{
        attr:{d:path}, // css prop nhi change kr rha... attribute change kr rha so use attr:{} d
        duration:0.3,
        ease:"power3.out"
    }) 
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})

var cursor=document.querySelector("#cursor")
var main=document.querySelector(".main")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease:"back.out"
    })
})

