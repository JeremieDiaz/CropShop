function showProductDetails(productName) {
    // Hide the marketplace and show product details
    document.getElementById('marketplace').style.display = 'none';
    document.getElementById('product-details').style.display = 'block';
    
    // Update the product details with dynamic content
    document.getElementById('product-title').textContent = productName;
    // You can add more dynamic content like price and description here
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
function filterProducts(criteria) {
    // Reset all filter buttons to inactive
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

    // Set the clicked button to active
    event.target.classList.add('active');

    // Logic to filter products (You can implement this based on actual data)
    if (criteria === 'new') {
        // Example logic for filtering by 'new'
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



//function showProductDetails(productName) {

    function showProductDetails(productName) {
        // Define product data
        const products = {
            'Rice': {
                img: '1.jpg',
                price: '₱50',
                description: 'Rice is a staple food in many countries.'
            },
            'Corn': {
                img: '2.jpg',
                price: '₱50',
                description: 'Corn is rich in vitamins and minerals.'
            },
            'Potato': {
                img: '3.jpg',
                price: '₱50',
                description: 'Potatoes are a good source of carbohydrates.'
            },
            'Garlic': {
                img: '4.jpg',
                price: '₱50',
                description: 'Garlic is widely used for its strong flavor.'
            },
            'Onion': {
                img: '5.jpg',
                price: '₱50',
                description: 'Onions are a common ingredient in many dishes.'
            },
            'Ginger': {
                img: '6.jpg',
                price: '₱50',
                description: 'Ginger has anti-inflammatory properties.'
            },
            'Sugarcane': {
                img: '7.jpg',
                price: '₱50',
                description: 'Sugarcane is the source of most sugar.'
            },
            'Carrot': {
                img: '8.jpg',
                price: '₱50',
                description: 'Carrots are a great source of beta-carotene.'
            },
            'Rdish': {
                img: '9.jpg',
                price: '₱50',
                description: 'Radish is a crunchy, edible root vegetable.'
            }
        };
    
        // Get product data based on the productName
        const product = products[productName];
    
        if (product) {
            // Hide the marketplace and show product details
            document.getElementById('marketplace').style.display = 'none';
            document.getElementById('product-details').style.display = 'block';
    
            // Update product details section with the selected product data
            document.getElementById('product-title').textContent = productName;
            document.querySelector('#product-details img').src = product.img;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
        } else {
            alert('Product details not found!');
        }
    }
    