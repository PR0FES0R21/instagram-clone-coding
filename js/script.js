let is_like = true;
function like() {
    if (is_like == true) {
        $('#heart').attr('src', 'image/icons/12.png');
        is_like = false;
    } else {
        $('#heart').attr('src', 'image/icons/5.png');
        is_like = true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const caption = document.querySelector(".caption");

    caption.addEventListener("click", function() {
        this.classList.toggle("expanded");
    });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },

    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
});