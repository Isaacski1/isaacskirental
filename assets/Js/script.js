// Hero Owl Carousel Script Start
var owl = $('.hero-owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:true,
    animateOut: 'fadeOut',
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// Car Profile Owl Carousel Script Start
var owl = $('.cars-profile-owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },  
        1450:{
            items:4
        },
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

// Car Showcase Owl Carousel Script Start
var owl = $('.car-showcase-owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// Testimonial Reviews Owl Carousel Script Start
var owl = $('.testimonials-owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});