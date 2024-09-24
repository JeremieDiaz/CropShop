function showSection(sectionId) {
    // Hide all sections
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('marketplace').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    
    // Hide the product details section as well when navigating to other sections
    document.getElementById('product-details').style.display = 'none';
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function goBackToMarketplace() {
    // Hide product details and show the marketplace
    document.getElementById('product-details').style.display = 'none';
    document.getElementById('marketplace').style.display = 'block';
}

function addToCart() {
    alert('Product added to cart');
}

// Filter Products based on criteria
function filterProducts(criteria, event) {
    // Reset all filter buttons to inactive
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

    // Set the clicked button to active
    event.target.classList.add('active');

    // Logic to filter products (You can implement this based on actual data)
    if (criteria === 'new') {
        console.log('Filtering by New');
    } else if (criteria === 'asc') {
        console.log('Sorting by Price Ascending');
    } else if (criteria === 'desc') {
        console.log('Sorting by Price Descending');
    } else if (criteria === 'rating') {
        console.log('Sorting by Rating');
    }
}

// Search Bar functionality
document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        let productName = product.querySelector('p').textContent.toLowerCase();
        if (productName.includes(filter)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

function showProductDetails(productName) {
    const products = {
        'Rice': { img: '1.jpg', price: '₱44/kilo', description: 'Rice is a staple food in many countries.' },
        'Corn': { img: '2.jpg', price: '₱46/kilo', description: 'Corn is rich in vitamins and minerals.' },
        'Potato': { img: '3.jpg', price: '₱48/kilo', description: 'Potatoes are a good source of carbohydrates.' },
        'Garlic': { img: '4.jpg', price: '₱50/kilo', description: 'Garlic is widely used for its strong flavor.' },
        'Onion': { img: '5.jpg', price: '₱60/kilo', description: 'Onions are a common ingredient in many dishes.' },
        'Ginger': { img: '6.jpg', price: '₱70/kilo', description: 'Ginger has anti-inflammatory properties.' },
        'Sugarcane': { img: '7.jpg', price: '₱65/kilo', description: 'Sugarcane is the source of most sugar.' },
        'Carrot': { img: '8.jpg', price: '₱60/kilo', description: 'Carrots are a great source of beta-carotene.' },
        'Radish': { img: '9.jpg', price: '₱55/kilo', description: 'Radish is a crunchy, edible root vegetable.' }
    };
    
    const product = products[productName];

    if (product) {
        document.getElementById('product-title').textContent = productName;
        document.querySelector('#product-details img').src = product.img;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        // Show product details section
        document.getElementById('marketplace').style.display = 'none';
        document.getElementById('product-details').style.display = 'block';
    }
}
// Render the Sales Chart
function renderSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'bar', // Type of chart: bar chart
        data: {
            labels: ['Rice', 'Corn', 'Potato', 'Garlic', 'Onion', 'Ginger', 'Sugarcane', 'Carrot', 'Radish'], // X-axis labels
            datasets: [
                {
                    label: 'Series ', // First dataset label (for 2023)
                    data: [44, 46, 48, 50, 60, 70, 65, 60, 55], // Series
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
                    borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
                    borderWidth: 1
                },
                {
                    label: 'Series 2', // Second dataset label (for 2024)
                    data: [140, 130, 160, 110, 95, 150, 170, 120, 115], // Series 2
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Bar color for the second dataset
                    borderColor: 'rgba(255, 99, 132, 1)', // Bar border color
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Y-axis starts from zero
                }
            }
        }
    });
}


// Call this function when the page loads to render the chart
window.onload = function() {
    renderSalesChart();
};
