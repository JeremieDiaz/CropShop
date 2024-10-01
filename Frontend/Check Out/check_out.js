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

            const x = Math.random() * 90; 
            const y = Math.random() * 90; 

            // Randomize size (increased range)
            const size = Math.random() * (100 - 50) + 50; 

            // Randomize rotation
            const rotation = Math.random() * 360; 

            // Apply styles
            img.style.left = `${x}vw`; 
            img.style.top = `${y}vh`; 
            img.style.width = `${size}px`; 
            img.style.transform = `rotate(${rotation}deg)`; 
            
            container.appendChild(img); 
        }
    });
}
