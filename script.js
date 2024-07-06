const tl = gsap.timeline();

tl.to(".loading-screen", { duration: 6, opacity: 0, ease: "power2.out" }) // Fade out loading screen in 1 second
  .to(".w", { opacity: 1 }, "-=0.5") // Fade in content over 1 second, starting halfway through loading screen fade-out
  .set(".loading-screen", { display: "none" }); // Hide loading screen after animation

// Enable overflow after animation to prevent content clipping
setTimeout(() => {
  document.body.style.overflow = "visible";
}, 6000); // Enable overflow after 1 second (adjust as needed)




function openNav(){
  'use strict';
  const sidepanel = document.getElementById('mySidepanel');
  if(sidepanel){
      sidepanel.style.left='0';
  } else{
      console.error('error: side panel not found');
  }
}

function closeNav(){
  'use strict';
  const sidepanel = document.getElementById('mySidepanel');
  if(sidepanel){
      sidepanel.style.left='-320px';
  } else{
      console.error('error: side panel not found');
  }
}













tl.from("#work-sec h4",{
    y:-15,
    opacity:0,
    duration:0.5,
    stagger:0.2,
})

const menuIcon = document.querySelector('#menu-i');
const menuText = document.querySelector('#menu .h4');

gsap.to(menuText, { opacity: 0, duration: 0.6, ease: "power2.inOut" }); // Initially hide the menu text

menuIcon.addEventListener('mouseover', () => {
  gsap.to(menuText, { opacity: 1, duration: 0.6, ease: "power2.inOut" });
});

menuIcon.addEventListener('mouseout', () => {
  gsap.to(menuText, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
});


function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='100vh';
        searchpanel.style.borderRadius='0';
    } else{
        console.error('error: search panel not found');
    }
}

function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='0';
        searchpanel.style.borderTopLeftRadius='100%';
        searchpanel.style.borderTopRightRadius='100%';
    } else{
        console.error('error: search panel not found');
    }
}


const textElement = document.querySelector('.text');

gsap.to(textElement, { // Use GSAP's to() method for animation
  duration: 3, // Animation duration in seconds
  ease: "power3.inOut", // Animation easing function for smooth fill
  clipPath: "polygon(0% 0%, 0% 100%, 100% 100%,100% 0%)", // Target clip-path for full text reveal
  delay:5.5,
});

