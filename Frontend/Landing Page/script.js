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
        registerForm.style.left = "100%"; // Move the register form off-screen

        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0; // Fade out register form
    };

    const showRegisterForm = (event) => {
        event.preventDefault(); // Prevent default form submission
        loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        registerBtn.style.backgroundColor = "#bc6c25";

        loginForm.style.left = "100%"; // Move the login form off-screen
        registerForm.style.left = "50%"; // Center the register form

        loginForm.style.opacity = 0; // Fade out login form
        registerForm.style.opacity = 1;
    };

    // Event listeners for button clicks
    loginBtn.addEventListener('click', showLoginForm);
    registerBtn.addEventListener('click', showRegisterForm);
});

// -----Login Form Swap Script ends here-----

// -----Login View Password Script starts here-----

// const logInputField = document.getElementById('logPassword');
// const logInputIcon = document.getElementById('log-pass-icon');

// const regInputField = document.getElementById('regPassword');
// const regInputIcon = document.getElementById('reg-pass-icon');

// function myLogPassword() {
//     if (logInputField.type === "password") {
//         logInputField.type = "text";
//         logInputIcon.name = "eye-off-outline";
//     } else {
//         logInputField.type = "password";
//         logInputIcon.name = "lock-closed-outline";
//     }
//     logInputIcon.style.cursor = "pointer";
// }

// function myRegPassword() {
//     if (regInputField.type === "password") {
//         regInputField.type = "text";
//         regInputIcon.name = "eye-off-outline";
//     } else {
//         regInputField.type = "password";
//         regInputIcon.name = "lock-closed-outline";
//     }
//     regInputIcon.style.cursor = "pointer";
// }


// -----Login View Password Script ends here-----

