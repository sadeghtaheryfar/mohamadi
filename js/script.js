var swiper = new Swiper(".main-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    speed: 1100,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {  
        '1024': {
            slidesPerView: 'auto'
        },
    },
    pagination: {
        el: ".main-slider-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".category-slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: false,
    slidesOffsetBefore: 10
});

var swiper = new Swiper(".best-selers-slider", {
    loop: true,
    slidesPerView: 2,
    breakpoints: {  
        '1024': {
            slidesPerView: 4
        },
    },
    spaceBetween: 30,
    grabCursor: true,
    speed: 1100,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".category-item-slider-button-next",
        prevEl: ".category-item-slider-button-prev",
    },
});

var swiper = new Swiper(".category-item-slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    speed: 1100,
    breakpoints: {  
        '1024': {
            slidesPerView: 4
        },
    },
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".category-item-slider-button-next",
        prevEl: ".category-item-slider-button-prev",
    },
});

// btn show menu

var btn = document.querySelectorAll('.btn-menu');
var ShowMenu = document.querySelector('.show-menu');
var CloseMenu = document.querySelector('.close-menu');

btn.forEach((btn,index) => {
    btn.addEventListener('click', function handleClick(event) {
        ShowMenu.classList.toggle("show");
        CloseMenu.classList.toggle("hidden");
    });
});

var swiper = new Swiper(".product-feacher-slider", {
    loop: true,
    slidesPerView: 1,
    breakpoints: {  
        '1024': {
            slidesPerView: 3
        },
    },
    spaceBetween: 30,
    grabCursor: true,
    speed: 1100,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});