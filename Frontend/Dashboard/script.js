function showSection(sectionId, clickedLink) {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('marketplace').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

function goBackToMarketplace() {
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('marketplace').style.display = 'block';
}

function addToCart() {
    alert('Product added to cart');
}

// Enhanced Filter Products based on criteria
function filterProducts(criteria, event) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const productName = product.querySelector('p').textContent;
        if (criteria === 'All') {
            product.style.display = 'block'; // Show all products
        } else if (criteria === 'Crops' && ['Rice', 'Corn', 'Potato', 'Garlic', 'Onion', 'Ginger', 'Sugarcane', 'Carrot', 'Radish'].includes(productName)) {
            product.style.display = 'block';
        } else if (criteria === 'Seeds' && productName.toLowerCase().includes('seeds')) {
            product.style.display = 'block';
        } else if (criteria === 'Fertilizers' && productName.toLowerCase().includes('fertilizer')) {
            product.style.display = 'block';
        } else if (criteria === 'Tools' && ['Trowel', 'Mini Hand Rake', 'Water Sprinkler'].includes(productName)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Enhanced Search Bar functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productName = product.querySelector('p').textContent.toLowerCase();
        const productDescription = product.querySelectorAll('p')[1].textContent.toLowerCase();  // Assuming second <p> is description
        const productPrice = product.querySelectorAll('p')[2]?.textContent?.toLowerCase();  // Assuming third <p> is price, if exists

        // Check if search filter matches product name, description, or price
        if (productName.includes(filter) || productDescription?.includes(filter) || productPrice?.includes(filter)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Display Product Details
function showProductDetails(productName) {
    const products = {
        'Rice': { img: '/Images/Dashboard imgs/1.jpg', price: '₱44/kilo', rating: 4, description: 'Rice is a staple food in many countries.' },
        'Corn': { img: '/Images/Dashboard imgs/2.jpg', price: '₱46/kilo', rating: 5, description: 'Corn is rich in vitamins and minerals.' },
        'Potato': { img: '/Images/Dashboard imgs/3.jpg', price: '₱48/kilo', rating: 4, description: 'Potatoes are versatile and nutritious.' },
        'Garlic': { img: '/Images/Dashboard imgs/4.jpg', price: '₱60/kilo', rating: 4, description: 'Garlic is a popular seasoning in many dishes worldwide.' },
        'Onion': { img: '/Images/Dashboard imgs/5.jpg', price: '₱50/kilo', rating: 5, description: 'Onions are essential in various cuisines for their flavor.' },
        'Ginger': { img: '/Images/Dashboard imgs/6.jpg', price: '₱70/kilo', rating: 4, description: 'Ginger is known for its medicinal and culinary uses.' },
        'Sugarcane': { img: '/Images/Dashboard imgs/7.jpg', price: '₱65/kilo', rating: 5, description: 'Sugarcane is used to produce sugar and other sweeteners.' },
        'Carrot': { img: '/Images/Dashboard imgs/8.jpg', price: '₱60/kilo', rating: 4, description: 'Carrots are rich in beta-carotene, which is good for eyesight.' },
        'Radish': { img: '/Images/Dashboard imgs/9.jpg', price: '₱55/kilo', rating: 4, description: 'Radish is a crunchy, edible root vegetable.' },
        'Rice seeds': { img: '/Images/Dashboard imgs/seeds.jfif', price: '₱55/kilo', rating: 4, description: 'Rice seeds for planting.' },
        'Corn seeds': { img: '/Images/Dashboard imgs/seeds2.jfif', price: '₱55/kilo', rating: 4, description: 'Corn seeds for planting.' },
        'Sunflower seeds': { img: '/Images/Dashboard imgs/seeds3.jfif', price: '₱55/kilo', rating: 4, description: 'Sunflower seeds for planting.' },
        'Phosphorus fertilizer': { img: '/Images/Dashboard imgs/pfertilizers.jfif', price: '₱55/kilo', rating: 4, description: 'Phosphorus fertilizer.' },
        'Nitrogen fertilizer': { img: '/Images/Dashboard imgs/nfertilizers.jfif', price: '₱55/kilo', rating: 4, description: 'Nitrogen fertilizer.' },
        'Potassium fertilizer': { img: '/Images/Dashboard imgs/kfertilizers.jfif', price: '₱55/kilo', rating: 4, description: 'Potassium fertilizer.' },
        'Trowel': { img: '/Images/Dashboard imgs/tools1.jfif', price: '₱55', rating: 4, description: 'Trowel for gardening.' },
        'Mini Hand Rake': { img: '/Images/Dashboard imgs/tools2.jfif', price: '₱55', rating: 4, description: 'Mini Hand Rake for gardening.' },
        'Water Sprinkler': { img: '/Images/Dashboard imgs/tools3.jfif', price: '₱55', rating: 4, description: 'Water Sprinkler for irrigation.' }
    };

    const product = products[productName];

    if (product) {
        document.getElementById('product-image').src = product.img;
        document.getElementById('product-title').textContent = productName;
        document.getElementById('product-price').textContent = product.price;

        // Create star rating
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += `<span class="star-rating ${i <= product.rating ? 'filled' : ''}">&#9733;</span>`; // ★
        }

        // Set the rating with the text "Ratings: "
        document.getElementById('product-rating').innerHTML = `Ratings: ${stars}`; // Set the rating
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('marketplace').style.display = 'none';
        document.getElementById('product-details').style.display = 'block';
    }
}



function addToCart() {
    alert('Product added to cart');
    // Additional functionality for adding the product to the cart can be implemented here
}

function buyNow() {
    alert('Proceeding to purchase');
    // Add functionality to handle purchase or payment redirection
}

// Render the Sales Chart
function renderSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: ['Rice', 'Corn', 'Potato', 'Garlic', 'Onion', 'Ginger', 'Sugarcane', 'Carrot', 'Radish'],
            datasets: [
                {
                    label: '2023',
                    data: [44, 46, 48, 50, 60, 70, 65, 60, 55],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                },
                {
                    label: '2024',
                    data: [140, 130, 160, 110, 95, 150, 170, 120, 115],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize the page and render the chart on page load
window.onload = function() {
    renderSalesChart();
};
