var btn = document.getElementById('searchBtn');
btn.addEventListener("click", function () {
    document.getElementById('searchBox').classList.toggle("searchBoxOpen");

});

const swiper = new Swiper('.swiperHero', {
    loop: true,
    autoplay: true,
    effect: "fade",
    speed: 1200,
    navigation: {
        nextEl: '.btnNext',
        prevEl: '.btnPrev',
    },
});


const swiperTestimonial = new Swiper('.swiperTestimonial', {
    loop: true,
    speed: 2000,
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
    },
});

new Swiper('.clientSlider', {
    loop: true,
    autoplay: true,
    speed: 1500,
    slidesPerView: 6,

    grid: {
        columns: 6,
    },
    mousewheel: {
        forceToAxis: true,
    },

    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //     },
    //     1024: {
    //         slidesPerView: 9,
    //     },
    // },
});

// $(window).on("scroll", function () {
//     $("header").addClass("headerBar");
// });

AOS.init();