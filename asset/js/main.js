"use strict";

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img.lazyload");
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Dynamically import the LazySizes library
  let script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
  document.body.appendChild(script);
}


TweenMax.to(".home-header", 1, {
    opacity: 1,
    y: 20,
    ease: Expo.easeInOut
});

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#is-visible",
    triggerHook: 0.9, // show, when scrolled 10% into view
    offset: 50, // move trigger to center of element
    reverse: false
})
.setClassToggle(".is-animated", "visible") 
.addTo(controller);

var t2 = new TimelineMax({paused: true});

t2.to(".nav-icon span:nth-child(3)", 0.1, {
    opacity: 0,
    ease: Expo.easeInOut
});

t2.to(".nav-icon span:nth-child(1)", 0.2, {
    y: -13,
    x: 18,
    rotation: 45,
    ease: Expo.easeInOut
});

t2.to(".nav-icon span:nth-child(2)", 0.2, {
    y: -8,
    x: 5,
    rotation: -45,
    ease: Expo.easeInOut
});

t2.to("#navigation", 0.1, {
    top: "0",
    ease: Power2.easeInOut,
    delay: -0.3
});

t2.staggerFrom("#navigation ul li", 0.5, {y: 200, opacity: 0, ease: Power2.easeInOut});

t2.reverse();
$(document).on("click", ".nav-icon", function() {
    t2.reversed(!t2.reversed());
});
$(document).on("click", ".data ul li a", function() {
    t2.reversed(!t2.reversed());
});


var t1 = new TimelineMax({paused: true});

t1.to("#contact", 0.5, {
    top: "0%",
    ease: Expo.easeInOut,
    delay: -0.1
});

t1.staggerFrom(".modal-area__card", 0.5, {y: 200, opacity: 0, ease: Power2.easeInOut})
    .from(".cancel", 0.5, {y: 20, opacity: 0, ease:Expo.easeOut}, 0.3)
    .from(".modal-content__header", 0.5, {y: 20, opacity: 0, ease:Expo.easeOut}, 0.3)
    .from(".modal-content__sub", 0.5, {y: 20, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();
$(document).on("click", "#con", function() {
    t1.reversed(!t1.reversed());
});

$(document).on("click", ".nav-icon", function() {
    t1.to("#contact", 0.1, {
        top: "200%",
        opacity: 0,
        ease: Expo.easeInOut
    });    
});

$(document).on("click", ".cancel", function() {
    t1.reversed(!t1.reversed());
});