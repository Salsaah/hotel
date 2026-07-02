new Swiper(".heroSwiper",{

    loop:true,

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },

    pagination:{
        el:".heroSwiper .swiper-pagination",
        clickable:true,
    }

});

new Swiper(".sec1Swiper", {
    loop:true,

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },

    pagination:{
        el:".sec1Swiper .swiper-pagination",
        clickable:true,
    }
});


new Swiper(".sec4Swiper1", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

new Swiper(".sec4Swiper2", {
    loop: true,
    autoplay: {
        delay: 3000, // boleh beda biar lebih hidup
        disableOnInteraction: false,
    },
});

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});