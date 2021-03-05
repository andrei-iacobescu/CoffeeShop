AOS.init();
$(document).ready(function(){


       


    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        loop: true,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });



    $('.counter').countUp();

    
    
});


 // Nav scroll fixed
 let myNav = document.getElementsByClassName('navbar');
 window.onscroll = function () { 
 "use strict";
 if (document.body.scrollTop >= 200 ) {
     myNav[0].classList.add("nav-colored");
     myNav[0].classList.remove("nav-transparent");
 } 
 else {
     myNav[0].classList.add("nav-transparent");
     myNav[0].classList.remove("nav-colored");
 }
};