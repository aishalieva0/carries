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



// $(window).on("scroll", function () {
//     $("header").addClass("headerBar");
// });