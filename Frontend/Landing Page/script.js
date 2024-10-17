new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    
    // For carousel auto-moving
    autoplay: {
        delay: 5000, // Time in milliseconds to wait before switching slides
        disableOnInteraction: false, // Autoplay will not be disabled after interactions
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicbullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});