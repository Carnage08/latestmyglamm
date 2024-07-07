
function loading(){
    var pl = gsap.timeline({
        scrollTrigger:{
            trigger:".loading",
            markers:true,
            start:"50% 50%",
            end:"100% 50%",
            scrub:2,
            pin:true
        }
    });
    pl.to(".top",{
        left:"-50%"
    },'a')
    pl.to(".bottom",{
        right:"-50%"
    },'a')
    pl.to('.top1',{
        top:"-50%"
    },'a')
    pl.to('.bot1',{
        bottom:"-50%"
    },'a')
    
    
}
loading()