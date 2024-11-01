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

    breakpoints: {

        1024: {
            slidesPerView: 6,
        },

        800: {
            slidesPerView: 5,
        },

        680: {
            slidesPerView: 4,
        },

        500: {
            slidesPerView: 3,
        },
        380: {
            slidesPerView: 2,
        },


        280: {
            slidesPerView: 1,
        },
    },
});

// $(window).on("scroll", function () {
//     $("header").addClass("headerBar");
// });

window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

AOS.init();