function updatePrice(newPrice) {
    document.getElementById('price').innerText = newPrice;
}

function initializeImages() {
    const imageSources = [
        "/Images/BackgroundImages/apple.svg",
        "/Images/BackgroundImages/boiled-egg.svg",
        "/Images/BackgroundImages/carrot.svg",
        "/Images/BackgroundImages/corn.svg",
        "/Images/BackgroundImages/hoe.svg",
        "/Images/BackgroundImages/pineapple.svg",
        "/Images/BackgroundImages/pumpkin.svg",
        "/Images/BackgroundImages/seeds1.svg",
        "/Images/BackgroundImages/seeds2.svg",
        "/Images/BackgroundImages/shovel.svg",
        "/Images/BackgroundImages/wheat.svg"
    ];

    const container = document.querySelector('.background-container');
    container.innerHTML = '';

    imageSources.forEach(src => {
        const count = Math.floor(Math.random() * 2) + 1; 
        for (let i = 0; i < count; i++) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = '';

            img.style.left = `${Math.random() * 100}vw`; 
            img.style.top = `${Math.random() * 100}vh`; 
            img.style.width = `${Math.random() * (100 - 50) + 50}px`;
            img.style.transform = `rotate(${Math.random() * 360}deg)`;

            container.appendChild(img);

            roamImage(img);
        }
    });
}

function roamImage(img) {
    const container = document.querySelector('.background-container');
    const checkoutBox = document.querySelector('.check_out');

    function moveImage() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const imgWidth = img.offsetWidth;  
        const imgHeight = img.offsetHeight; 

        // make random position
        const x = Math.random() * (containerWidth + 200) - imgWidth / 2; 
        let y = Math.random() * (containerHeight + 200) - imgHeight / 2;

        // get bottom of checkoutbox
        const checkoutBoxBottom = checkoutBox.getBoundingClientRect().bottom;

        // make sure the images wont go outside checkoutbox
        if (y + imgHeight / 2 > checkoutBoxBottom) {
            y = checkoutBoxBottom - imgHeight / 2;
        }
        // allow images to go above the viewport
        if (y + imgHeight / 2 < 0) {
            y = -imgHeight / 2;
        }

        // animate the image
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

        // Call moveImage again after a longer delay
        setTimeout(moveImage, 3000 + Math.random() * 3000); 
    }
    
    moveImage();
}

window.onload = initializeImages;
