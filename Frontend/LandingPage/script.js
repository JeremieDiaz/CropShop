// -----Carousel Script starts here-----
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

// -----Carousel Script ends here-----

// -----Login Form Swap Script starts here-----

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    const showLoginForm = (event) => {
        event.preventDefault(); // Prevent default form submission
        loginBtn.style.backgroundColor = "#bc6c25";
        registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

        loginForm.style.left = "50%"; // Center the login form
        registerForm.style.left = "150%"; // Move the register form off-screen

        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0; // Fade out register form
    };

    const showRegisterForm = (event) => {
        event.preventDefault(); // Prevent default form submission
        loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        registerBtn.style.backgroundColor = "#bc6c25";

        loginForm.style.left = "150%"; // Move the login form off-screen
        registerForm.style.left = "50%"; // Center the register form

        loginForm.style.opacity = 0; // Fade out login form
        registerForm.style.opacity = 1;
    };

    // Event listeners for button clicks
    loginBtn.addEventListener('click', showLoginForm);
    registerBtn.addEventListener('click', showRegisterForm);
});

// -----Login Form Swap Script ends here-----

// -----Ad banner Script starts here-----

let currentAdSlide = 0;

function moveAdCarousel(direction) {
    const adCarousel = document.querySelector('.ad-slides');
    const totalAdItems = document.querySelectorAll('.ad-slide').length;

    currentAdSlide += direction;

    // Wrap around if reaching the end or beginning of the ad slides
    if (currentAdSlide >= totalAdItems) {
        currentAdSlide = 0;
    } else if (currentAdSlide < 0) {
        currentAdSlide = totalAdItems - 1;
    }

    // Move the ad carousel by 100% of the width per slide
    adCarousel.style.transform = `translateX(-${currentAdSlide * 100}%)`;

    // Update the active dot indicator for the ads
    updateActiveAdDot();
}

// Set the current ad slide manually based on dot click
function setAdSlide(index) {
    currentAdSlide = index;
    moveAdCarousel(0); // Trigger ad carousel movement to the new slide
}

// Update active ad dot based on the current ad slide
function updateActiveAdDot() {
    const adDots = document.querySelectorAll('.ad-dot');
    adDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentAdSlide);
    });
}

// Function for redirection (used in both carousels)
function redirectTo(url) {
    window.open(url, '_blank');
}

// Automatically move to the next ad slide every 5 seconds
setInterval(() => {
    moveAdCarousel(1); // Move to the next ad slide
}, 5000); // Change 5000 to your desired interval in milliseconds

// Initialize the ad carousel to show the first slide
moveAdCarousel(0);

// -----Ad banner Script ends here-----

