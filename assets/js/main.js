var btn = document.getElementById('searchBtn');
btn.addEventListener("click", function () {
    document.getElementById('searchBox').classList.toggle("searchBoxOpen");

});

const swiper = new Swiper('.swiperHero', {
    loop: true,
    navigation: {
        nextEl: '.btnNext',
        prevEl: '.btnPrev',
    },
});


const swiperTestimonial = new Swiper('.swiperTestimonial', {
    loop: true,
    navigation: {
        nextEl: '.nextBtn',
        prevEl: '.prevBtn',
    },
});

new Swiper('.clientSlider', {
    loop: true,
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