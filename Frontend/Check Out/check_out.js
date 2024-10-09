document.addEventListener('DOMContentLoaded', function() {
    attachButtonEvents();
    updateOverallTotal(); // Calculate total on page load
});

function attachButtonEvents() {
    const plusBtns = document.querySelectorAll('.quantity_btn.plus'); 
    const minusBtns = document.querySelectorAll('.quantity_btn.minus'); 

    plusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling; 
            input.value = parseInt(input.value) + 1; 
            updateTotal(input);
        });
    });

    minusBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.nextElementSibling; 
            if (parseInt(input.value) > 1) { 
                input.value = parseInt(input.value) - 1; 
                updateTotal(input);
            }
        });
    });
}

function updateTotal(input) {
    const price = parseFloat(input.closest('.product_details').querySelector('.p_price').getAttribute('data-price'));
    const totalCost = input.closest('.product_details').querySelector('.total_cost');
    
    // Calculate the total for the individual product
    const productTotal = price * parseInt(input.value);
    totalCost.textContent = 'Total: ₱ ' + productTotal.toFixed(2); 
    
    // Update the overall total price
    updateOverallTotal();
}

function updateOverallTotal() {
    const allProducts = document.querySelectorAll('.product');
    let overallTotal = 0;

    allProducts.forEach(product => {
        const quantityInput = product.querySelector('.quantity_input');
        const productPrice = parseFloat(product.querySelector('.p_price').getAttribute('data-price'));
        const quantity = parseInt(quantityInput.value);

        overallTotal += productPrice * quantity; // Accumulate the total
    });

    document.getElementById('price').textContent = overallTotal.toFixed(2); // Update the total price display
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

function updateClientDetails(newName, newAddress, newContact) {
    document.querySelector('.client_details .name').textContent = 'Name: ' + newName;
    document.querySelector('.client_details .address').textContent = 'Address: ' + newAddress;
    document.querySelector('.client_details .contact').textContent = 'Contact Number: ' + newContact;
}

updateClientDetails('Jane Smith', '456 Elm St', '(987) 654-3210');

function initializeFunctions() {
    initializeImages();
    updateClientDetails('Jane Smith', '456 Elm St', '(987) 654-3210');
}