// suggestion slider
var mentorSwiper = new Swiper(".mentorSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

// Testimonial sliders
var testimonialSwiper = new Swiper(".testimonialSwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".testimonial__pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial__nav-next",
        prevEl: ".testimonial__nav-prev",
    },
});
// Partners sliders
var partnerSwiper = new Swiper(".partnerSwiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 21,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

$('.menuToggler').on('click', function (e) {
    e.preventDefault();
    $('.nav-menu').toggleClass('nav-flex');
});
