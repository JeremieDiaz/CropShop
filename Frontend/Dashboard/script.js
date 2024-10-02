function showSection(sectionId, clickedLink) {
    // Hide all sections
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('marketplace').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    
    // Hide the product details section when navigating to other sections
    document.getElementById('product-details').style.display = 'none';
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    
    // Remove 'active' class from all navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add 'active' class to the clicked link
    clickedLink.classList.add('active');
}


function goBackToMarketplace() {
    // Hide product details and show the marketplace
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('marketplace').style.display = 'block';
}

function addToCart() {
    alert('Product added to cart');
}

// Enhanced Filter Products based on criteria
function filterProducts(criteria, event) {
    // Add 'active' class to the clicked button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const productName = product.querySelector('p').textContent;
        if (criteria === 'Crops' && ['Rice', 'Corn', 'Potato', 'Garlic', 'Onion', 'Ginger', 'Sugarcane', 'Carrot', 'Radish'].includes(productName)) {
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
        'Rice': { img: '1.jpg', price: '₱44/kilo', stock: 'Available: 100 kg', description: 'Rice is a staple food in many countries.' },
        'Corn': { img: '2.jpg', price: '₱46/kilo', stock: 'Available: 50 kg', description: 'Corn is rich in vitamins and minerals.' },
        'Potato': { img: '3.jpg', price: '₱48/kilo', stock: 'Available: 60 kg', description: 'Potatoes are versatile and nutritious.' },
        'Garlic': { img: '4.jpg', price: '₱50/kilo', stock: 'Available: 70 kg', description: 'Garlic has numerous health benefits.' },
        'Onion': { img: '5.jpg', price: '₱60/kilo', stock: 'Available: 80 kg', description: 'Onions add flavor to many dishes.' },
        'Ginger': { img: '6.jpg', price: '₱70/kilo', stock: 'Available: 40 kg', description: 'Ginger has anti-inflammatory properties.' },
        'Sugarcane': { img: '7.jpg', price: '₱65/kilo', stock: 'Available: 60 kg', description: 'Sugarcane is the source of most sugar.' },
        'Carrot': { img: '8.jpg', price: '₱60/kilo', stock: 'Available: 80 kg', description: 'Carrots are a great source of beta-carotene.' },
        'Radish': { img: '9.jpg', price: '₱55/kilo', stock: 'Available: 90 kg', description: 'Radish is a crunchy, edible root vegetable.' },
        'Rice seeds': { img: 'seeds.jfif', price: '₱55/kilo', stock: 'Available: 150 kg', description: 'Rice seeds for planting.' },
        'Corn seeds': { img: 'seeds2.jfif', price: '₱55/kilo', stock: 'Available: 200 kg', description: 'Corn seeds for planting.' },
        'Sunflower seeds': { img: 'seeds3.jfif', price: '₱55/kilo', stock: 'Available: 180 kg', description: 'Sunflower seeds for planting.' },
        'Phosphorus fertilizer': { img: 'pfertilizers.jfif', price: '₱55/kilo', stock: 'Available: 120 kg', description: 'Phosphorus fertilizer.' },
        'Nitrogen fertilizer': { img: 'nfertilizers.jfif', price: '₱55/kilo', stock: 'Available: 130 kg', description: 'Nitrogen fertilizer.' },
        'Potassium fertilizer': { img: 'kfertilizers.jfif', price: '₱55/kilo', stock: 'Available: 110 kg', description: 'Potassium fertilizer.' },
        'Trowel': { img: 'tools1.jfif', price: '₱55', stock: 'Available: 50 units', description: 'Trowel for gardening.' },
        'Mini Hand Rake': { img: 'tools2.jfif', price: '₱55', stock: 'Available: 45 units', description: 'Mini Hand Rake for gardening.' },
        'Water Sprinkler': { img: 'tools3.jfif', price: '₱55', stock: 'Available: 60 units', description: 'Water Sprinkler for gardening.' }
    };

    const product = products[productName];
    
    if (product) {
        // Update the image, title, price, stock, and description
        document.getElementById('product-image').src = product.img;
        document.getElementById('product-title').textContent = productName;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-stock').textContent = product.stock;
        document.getElementById('product-description').textContent = product.description;

        // Hide the marketplace and show the product details
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
