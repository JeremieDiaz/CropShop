function showSection(sectionId, clickedLink) {
    // Hide all sections
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('marketplace').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('product-details').style.display = 'none';
    
    // Ensure 'view all trends' section is hidden when navigating away from the dashboard
    document.getElementById('all-products').style.display = 'none'; // Hide All Products (view all trends)

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Remove 'active' class from all links and add to clicked link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');

    // Handle visibility for the carousel, special offer heading, and top trends
    const carouselSection = document.getElementById('carousel-section'); 
    const specialOfferHeading = document.querySelector('section[aria-label="Special Offers"] h2'); 
    const topTrendsSection = document.querySelector('.top-trends-section'); 

    // Show or hide sections based on the selected section
    if (sectionId === 'dashboard') {
        carouselSection.style.display = 'block';  // Show carousel on Dashboard
        if (specialOfferHeading) specialOfferHeading.style.display = 'block'; // Show special offer heading if exists
        if (topTrendsSection) topTrendsSection.style.display = 'block'; // Show Top Trends on Dashboard
    } else if (sectionId === 'marketplace') {
        if (carouselSection) carouselSection.style.display = 'none';  // Hide carousel on Marketplace
        if (specialOfferHeading) specialOfferHeading.style.display = 'none'; // Hide special offer heading
        if (topTrendsSection) topTrendsSection.style.display = 'none'; // Hide Top Trends on Marketplace
    }else if (sectionId === 'cart') {
        if (carouselSection) carouselSection.style.display = 'none';  // Hide carousel on Marketplace
        if (specialOfferHeading) specialOfferHeading.style.display = 'none'; // Hide special offer heading
        if (topTrendsSection) topTrendsSection.style.display = 'none'; // Hide Top Trends on Marketplace
       
        if (cart && cart.length > 0) {
            document.getElementById('empty-cart-message').style.display = 'none'; // Hide empty cart message
            document.getElementById('cart-items').style.display = 'block'; // Hide empty cart message
        
        } else {
            document.getElementById('empty-cart-message').style.display = 'block'; // Show empty cart message
        }
        
       
        document.getElementById('cart-content').style.display = 'block';
        
    } else {
        if (carouselSection) carouselSection.style.display = 'none';  // Hide carousel on other sections
        if (specialOfferHeading) specialOfferHeading.style.display = 'none'; // Hide special offer heading
        if (topTrendsSection) topTrendsSection.style.display = 'none'; // Hide Top Trends on other sections
    }
}



function goBackToMarketplace() {
    // Hide the product details section
    document.getElementById('product-details').style.display = 'none';
    
    // Hide the All Products (view all trends) section if visible
    document.getElementById('all-products').style.display = 'none'; 

    // Check where the user came from and navigate back to the previous section
    if (previousSection === 'marketplace') {
        // Show the marketplace section
        document.getElementById('marketplace').style.display = 'block';
    } else if (previousSection === 'all-products') {
        // Show the all-products (view all trends) section
        document.getElementById('all-products').style.display = 'block';
    } else {
        // Default to showing the dashboard if no previous section is found
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('carousel-section').style.display = 'block';  // Show the carousel again
        document.querySelector('.top-trends-section').style.display = 'block'; // Show the Top Trends section
    }
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
            } else if (criteria === 'Crops' && ['Rice', 'Corn', 'Potato', 'Garlic', 'Onion', 'Ginger', 'Sugarcane', 'Carrot', 'Radish','Soybeans','Barley','Oats','Tomato','Cassava','Coconut','Banana','Pineapple','Mango','Calamansi','Eggplant'].includes(productName)) {
                product.style.display = 'block';
            } else if (criteria === 'Seeds' && productName.toLowerCase().includes('seeds')) {
                product.style.display = 'block';
            } else if (criteria === 'Fertilizers' && productName.toLowerCase().includes('fertilizer')) {
                product.style.display = 'block';
            } else if (criteria === 'Tools' && ['Trowel', 'Mini Hand Rake', 'Water Sprinkler','Gloves','Pruning Shears','Loopers','Spade','Rake','Hoe'].includes(productName)) {
                product.style.display = 'block';
            } else if (criteria === 'Dairy' && ['Milk', 'Cheese', 'Butter', 'Yogurt', 'Cream', 'Cottage Cheese', 'Sour Cream', 'Whipped Cream', 'Cream Cheese', 'Ghee', 'Ice Cream', 'Kefir', 'Condensed Milk', 'Buttermilk', 'Skimmed Milk', 'Paneer', 'Ricotta Cheese', 'Mozzarella Cheese', 'Parmesan Cheese', 'Greek Yogurt'].includes(productName)) {
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
    let previousSection = 'dashboard'; // Default to 'dashboard'
let currentIndex = 0; // Track the current image index

    function showProductDetails(productName) {
        previousSection = 'marketplace';
        const products = {
            'Rice': {
                img: 'Images/Dashboard imgs/1.jpg', // Main image
                images: ['Images/Dashboard imgs/1.jpg', 'Images/Dashboard imgs/1-2.jpg', 'Images/Dashboard imgs/1-3.jpg'], // Additional images for slider
                price: '₱44/kilo',
                rating: 4,
                description: 'Rice is a staple food in many countries.'
            },
            'Corn': {
                img: 'Images/Dashboard imgs/2.jpg', // Main image
                images: ['Images/Dashboard imgs/2.jpg', 'Images/Dashboard imgs/2-2.jpg', 'Images/Dashboard imgs/2-3.jpg'], // Additional images for slider
                price: '₱46/kilo',
                rating: 5,
                description: 'Corn is rich in vitamins and minerals.'
            },
            'Potato': {
                img: 'Images/Dashboard imgs/3.jpg', // Main image
                images: ['Images/Dashboard imgs/3.jpg', 'Images/Dashboard imgs/3-2.jpg', 'Images/Dashboard imgs/3-3.jpg'], // Additional images for slider
                price: '₱48/kilo',
                rating: 4,
                description: 'Potatoes are versatile and nutritious.'
            },
            'Garlic': {
                img: 'Images/Dashboard imgs/4.jpg', // Main image
                images: ['Images/Dashboard imgs/4.jpg', 'Images/Dashboard imgs/4-2.jpg', 'Images/Dashboard imgs/4-3.jpg'], // Additional images for slider
                price: '₱60/kilo',
                rating: 4,
                description: 'Garlic is a popular seasoning in many dishes worldwide.'
            },
            'Onion': {
                img: 'Images/Dashboard imgs/5.jpg', // Main image
                images: ['Images/Dashboard imgs/5.jpg', 'Images/Dashboard imgs/5-2.jpg', 'Images/Dashboard imgs/5-3.jpg'], // Additional images for slider
                price: '₱50/kilo',
                rating: 5,
                description: 'Onions are essential in various cuisines for their flavor.'
            },
            'Ginger': {
                img: 'Images/Dashboard imgs/6.jpg', // Main image
                images: ['Images/Dashboard imgs/6.jpg', 'Images/Dashboard imgs/6-2.jpg', 'Images/Dashboard imgs/6-3.jpg'], // Additional images for slider
                price: '₱70/kilo',
                rating: 4,
                description: 'Ginger is known for its medicinal and culinary uses.'
            },
            'Sugarcane': {
                img: 'Images/Dashboard imgs/7.jpg', // Main image
                images: ['Images/Dashboard imgs/7.jpg', 'Images/Dashboard imgs/7-2.jpg', 'Images/Dashboard imgs/7-3.jpg'], // Additional images for slider
                price: '₱65/kilo',
                rating: 5,
                description: 'Sugarcane is used to produce sugar and other sweeteners.'
            },
            'Carrot': {
                img: 'Images/Dashboard imgs/8.jpg', // Main image
                images: ['Images/Dashboard imgs/8.jpg', 'Images/Dashboard imgs/8-2.jpg', 'Images/Dashboard imgs/8-3.jpg'], // Additional images for slider
                price: '₱60/kilo',
                rating: 4,
                description: 'Carrots are rich in beta-carotene, which is good for eyesight.'
            },
            'Radish': {
                img: 'Images/Dashboard imgs/9.jpg', // Main image
                images: ['Images/Dashboard imgs/9.jpg', 'Images/Dashboard imgs/9-2.jpg', 'Images/Dashboard imgs/9-3.jpg'], // Additional images for slider
                price: '₱55/kilo',
                rating: 4,
                description: 'Radish is a crunchy, edible root vegetable.'
            },
            'Soybeans': {
                img: 'Images/Dashboard imgs/10.jpg', // Main image
                images: ['Images/Dashboard imgs/10.jpg', 'Images/Dashboard imgs/10-2.jpg', 'Images/Dashboard imgs/10-3.jpg'], // Additional images for slider
                price: '₱44/kilo',
                rating: 4,
                description: 'Soybeans are a rich source of protein and healthy fats.'
            },
            'Barley': {
                img: 'Images/Dashboard imgs/11.jpg', // Main image
                images: ['Images/Dashboard imgs/11.jpg', 'Images/Dashboard imgs/11-2.jpg', 'Images/Dashboard imgs/11-3.jpg'], // Additional images for slider
                price: '₱46/kilo',
                rating: 4,
                description: 'Barley is a versatile grain used in various dishes.'
            },
            'Oats': {
                img: 'Images/Dashboard imgs/12.jpg', // Main image
                images: ['Images/Dashboard imgs/12.jpg', 'Images/Dashboard imgs/12-2.jpg', 'Images/Dashboard imgs/12-3.jpg'], // Additional images for slider
                price: '₱48/kilo',
                rating: 4,
                description: 'Oats are a great source of fiber and nutrition.'
            },
            'Tomato': {
                img: 'Images/Dashboard imgs/13.jpg', // Main image
                images: ['Images/Dashboard imgs/13.jpg', 'Images/Dashboard imgs/13-2.jpg', 'Images/Dashboard imgs/13-3.jpg'], // Additional images for slider
                price: '₱50/kilo',
                rating: 5,
                description: 'Tomatoes are rich in vitamins and antioxidants.'
            },
            'Cassava': {
                img: 'Images/Dashboard imgs/14.jpg', // Main image
                images: ['Images/Dashboard imgs/14.jpg', 'Images/Dashboard imgs/14-2.jpg', 'Images/Dashboard imgs/14-3.jpg'], // Additional images for slider
                price: '₱60/kilo',
                rating: 4,
                description: 'Cassava is a starchy root vegetable.'
            },
            'Coconut': {
                img: 'Images/Dashboard imgs/15.jpg', // Main image
                images: ['Images/Dashboard imgs/15.jpg', 'Images/Dashboard imgs/15-2.jpg', 'Images/Dashboard imgs/15-3.jpg'], // Additional images for slider
                price: '₱70/kilo',
                rating: 5,
                description: 'Coconuts are used for their meat and milk.'
            },
            'Banana': {
                img: 'Images/Dashboard imgs/16.jpg', // Main image
                images: ['Images/Dashboard imgs/16.jpg', 'Images/Dashboard imgs/16-2.jpg', 'Images/Dashboard imgs/16-3.jpg'], // Additional images for slider
                price: '₱65/kilo',
                rating: 4,
                description: 'Bananas are a popular fruit known for their potassium content.'
            },
            'Pineapple': {
                img: 'Images/Dashboard imgs/17.jpg', // Main image
                images: ['Images/Dashboard imgs/17.jpg', 'Images/Dashboard imgs/17-2.jpg', 'Images/Dashboard imgs/17-3.jpg'], // Additional images for slider
                price: '₱60/kilo',
                rating: 5,
                description: 'Pineapples are sweet and tangy tropical fruits.'
            },
            'Mango': {
                img: 'Images/Dashboard imgs/18.jpg', // Main image
                images: ['Images/Dashboard imgs/18.jpg', 'Images/Dashboard imgs/18-2.jpg', 'Images/Dashboard imgs/18-3.jpg'], // Additional images for slider
                price: '₱55/kilo',
                rating: 5,
                description: 'Mangoes are known as the king of fruits for their sweetness.'
            },
            'Calamansi': {
                img: 'Images/Dashboard imgs/19.jpg', // Main image
                images: ['Images/Dashboard imgs/19.jpg', 'Images/Dashboard imgs/19-2.jpg', 'Images/Dashboard imgs/19-3.jpg'], // Additional images for slider
                price: '₱60/kilo',
                rating: 4,
                description: 'Calamansi is a small citrus fruit used in various dishes.'
            },
            'Eggplant': {
                img: 'Images/Dashboard imgs/20.jpg', // Main image
                images: ['Images/Dashboard imgs/20.jpg', 'Images/Dashboard imgs/20-2.jpg', 'Images/Dashboard imgs/20-3.jpg'], // Additional images for slider
                price: '₱55/kilo',
                rating: 4,
                description: 'Eggplants are versatile and can be used in many recipes.'
            },
            'Rice seeds': {
                img: 'Images/Dashboard imgs/seeds.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds.jpg', 'Images/Dashboard imgs/seeds-2.jpg', 'Images/Dashboard imgs/seeds-3.jpg'], // Additional images for slider
                price: '₱200/kilo',
                rating: 4,
                description: 'Rice seeds for planting.'
            },
            'Corn seeds': {
                img: 'Images/Dashboard imgs/seeds2.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds2.jpg', 'Images/Dashboard imgs/seeds2-2.jpg', 'Images/Dashboard imgs/seeds2-3.jpg'], // Additional images for slider
                price: '₱180/kilo',
                rating: 4,
                description: 'Corn seeds for planting.'
            },
            'Sunflower seeds': {
                img: 'Images/Dashboard imgs/seeds3.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds3.jpg', 'Images/Dashboard imgs/seeds3-2.jpg', 'Images/Dashboard imgs/seeds3-3.jpg'], // Additional images for slider
                price: '₱250/kilo',
                rating: 4,
                description: 'Sunflower seeds for planting.'
            },
            'Tomato seeds': {
                img: 'Images/Dashboard imgs/seeds4.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds4.jpg', 'Images/Dashboard imgs/seeds4-2.jpg', 'Images/Dashboard imgs/seeds4-3.jpg'], // Additional images for slider
                price: '₱230/250grams',
                rating: 4,
                description: 'Tomato seeds for planting.'
            },
            'Lettuce seeds': {
                img: 'Images/Dashboard imgs/seeds5.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds5.jpg', 'Images/Dashboard imgs/seeds5-2.jpg', 'Images/Dashboard imgs/seeds5-3.jpg'], // Additional images for slider
                price: '₱180/250grams',
                rating: 4,
                description: 'Lettuce seeds for planting.'
            },
            'Carrot seeds': {
                img: 'Images/Dashboard imgs/seeds6.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds6.jpg', 'Images/Dashboard imgs/seeds6-2.jpg', 'Images/Dashboard imgs/seeds6-3.jpg'], // Additional images for slider
                price: '₱200/250grams',
                rating: 4,
                description: 'Carrot seeds for planting.'
            },
            'Cucumber seeds': {
                img: 'Images/Dashboard imgs/seeds7.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds7.jpg', 'Images/Dashboard imgs/seeds7-2.jpg', 'Images/Dashboard imgs/seeds7-3.jpg'], // Additional images for slider
                price: '₱210/250grams',
                rating: 4,
                description: 'Cucumber seeds for planting.'
            },
            'Pepper seeds': {
                img: 'Images/Dashboard imgs/seeds8.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds8.jpg', 'Images/Dashboard imgs/seeds8-2.jpg', 'Images/Dashboard imgs/seeds8-3.jpg'], // Additional images for slider
                price: '₱220/250grams',
                rating: 4,
                description: 'Pepper seeds for planting.'
            },
            'Pumpkin seeds': {
                img: 'Images/Dashboard imgs/seeds9.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds9.jpg', 'Images/Dashboard imgs/seeds9-2.jpg', 'Images/Dashboard imgs/seeds9-3.jpg'], // Additional images for slider
                price: '₱240/250grams',
                rating: 4,
                description: 'Pumpkin seeds for planting.'
            },
            'Barley seeds': {
                img: 'Images/Dashboard imgs/seeds10.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds10.jpg', 'Images/Dashboard imgs/seeds10-2.jpg', 'Images/Dashboard imgs/seeds10-3.jpg'], // Additional images for slider
                price: '₱170/250grams',
                rating: 4,
                description: 'Barley seeds for planting.'
            },
            'Canola seeds': {
                img: 'Images/Dashboard imgs/seeds11.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds11.jpg', 'Images/Dashboard imgs/seeds11-2.jpg', 'Images/Dashboard imgs/seeds11-3.jpg'], // Additional images for slider
                price: '₱260/250grams',
                rating: 4,
                description: 'Canola seeds for planting.'
            },
            'Pea seeds': {
                img: 'Images/Dashboard imgs/seeds12.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds12.jpg', 'Images/Dashboard imgs/seeds12-2.jpg', 'Images/Dashboard imgs/seeds12-3.jpg'], // Additional images for slider
                price: '₱200/250grams',
                rating: 4,
                description: 'Pea seeds for planting.'
            },
            'Sesame seeds': {
                img: 'Images/Dashboard imgs/seeds13.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds13.jpg', 'Images/Dashboard imgs/seeds13-2.jpg', 'Images/Dashboard imgs/seeds13-3.jpg'], // Additional images for slider
                price: '₱280/250grams',
                rating: 4,
                description: 'Sesame seeds for planting.'
            },
            'Broccoli seeds': {
                img: 'Images/Dashboard imgs/seeds14.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds14.jpg', 'Images/Dashboard imgs/seeds14-2.jpg', 'Images/Dashboard imgs/seeds14-3.jpg'], // Additional images for slider
                price: '₱240/250grams',
                rating: 4,
                description: 'Broccoli seeds for planting.'
            },
            'Okra seeds': {
                img: 'Images/Dashboard imgs/seeds15.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds15.jpg', 'Images/Dashboard imgs/seeds15-2.jpg', 'Images/Dashboard imgs/seeds15-3.jpg'], // Additional images for slider
                price: '₱160/250grams',
                rating: 4,
                description: 'Okra seeds for planting.'
            },
            'Cauliflower seeds': {
                img: 'Images/Dashboard imgs/seeds16.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds16.jpg', 'Images/Dashboard imgs/seeds16-2.jpg', 'Images/Dashboard imgs/seeds16-3.jpg'], // Additional images for slider
                price: '₱220/250grams',
                rating: 4,
                description: 'Cauliflower seeds for planting.'
            },
            'Turnip seeds': {
                img: 'Images/Dashboard imgs/seeds17.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds17.jpg', 'Images/Dashboard imgs/seeds17-2.jpg', 'Images/Dashboard imgs/seeds17-3.jpg'], // Additional images for slider
                price: '₱200/250grams',
                rating: 4,
                description: 'Turnip seeds for planting.'
            },
            'Melon seeds': {
                img: 'Images/Dashboard imgs/seeds18.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds18.jpg', 'Images/Dashboard imgs/seeds18-2.jpg', 'Images/Dashboard imgs/seeds18-3.jpg'], // Additional images for slider
                price: '₱230/250grams',
                rating: 4,
                description: 'Melon seeds for planting.'
            },
            'Squash seeds': {
                img: 'Images/Dashboard imgs/seeds19.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds19.jpg', 'Images/Dashboard imgs/seeds19-2.jpg', 'Images/Dashboard imgs/seeds19-3.jpg'], // Additional images for slider
                price: '₱220/250grams',
                rating: 4,
                description: 'Squash seeds for planting.'
            },
            'Papaya seeds': {
                img: 'Images/Dashboard imgs/seeds20.jpg', // Main image
                images: ['Images/Dashboard imgs/seeds20.jpg', 'Images/Dashboard imgs/seeds20-2.jpg', 'Images/Dashboard imgs/seeds20-3.jpg'], // Additional images for slider
                price: '₱210/250grams',
                rating: 4,
                description: 'Papaya seeds for planting.'
            },
'Phosphorus fertilizer': { 
    img: 'Images/Dashboard imgs/pfertilizers.jpg', 
    images: ['Images/Dashboard imgs/pfertilizers.jpg', 'Images/Dashboard imgs/pfertilizers-2.jpg', 'Images/Dashboard imgs/pfertilizers-3.jpg'], 
    price: '₱600/kilo', 
    rating: 4, 
    description: 'Phosphorus fertilizer, essential for root development and blooming.' 
},
'Nitrogen fertilizer': { 
    img: 'Images/Dashboard imgs/nfertilizers.jpg', 
    images: ['Images/Dashboard imgs/nfertilizers.jpg', 'Images/Dashboard imgs/nfertilizers-2.jpg', 'Images/Dashboard imgs/nfertilizers-3.jpg'], 
    price: '₱500/kilo', 
    rating: 4, 
    description: 'Nitrogen fertilizer, perfect for promoting leafy growth.' 
},
'Potassium fertilizer': { 
    img: 'Images/Dashboard imgs/kfertilizers.jpg', 
    images: ['Images/Dashboard imgs/kfertilizers.jpg', 'Images/Dashboard imgs/kfertilizers-2.jpg', 'Images/Dashboard imgs/kfertilizers-3.jpg'], 
    price: '₱550/kilo', 
    rating: 4, 
    description: 'Potassium fertilizer, ideal for fruiting and flower formation.' 
},
'Compost fertilizer': { 
    img: 'Images/Dashboard imgs/fertilizers1.jpg', 
    images: ['Images/Dashboard imgs/fertilizers1.jpg', 'Images/Dashboard imgs/fertilizers1-2.jpg', 'Images/Dashboard imgs/fertilizers1-3.jpg'], 
    price: '₱150/kilo', 
    rating: 4, 
    description: 'Compost fertilizer, improves soil health and provides organic nutrients.' 
},
'Organic fertilizer': { 
    img: 'Images/Dashboard imgs/fertilizers2.jpg', 
    images: ['Images/Dashboard imgs/fertilizers2.jpg', 'Images/Dashboard imgs/fertilizers2-2.jpg', 'Images/Dashboard imgs/fertilizers2-3.jpg'], 
    price: '₱200/kilo', 
    rating: 4, 
    description: 'Organic fertilizer, made from natural materials for sustainable farming.' 
},
'Inorganic fertilizer': { 
    img: 'Images/Dashboard imgs/fertilizers3.jpg', 
    images: ['Images/Dashboard imgs/fertilizers3.jpg', 'Images/Dashboard imgs/fertilizers3-2.jpg', 'Images/Dashboard imgs/fertilizers3-3.jpg'], 
    price: '₱450/kilo', 
    rating: 4, 
    description: 'Inorganic fertilizer, quickly delivers essential nutrients.' 
},
'Nitrate fertilizer': { 
    img: 'Images/Dashboard imgs/fertilizers4.jpg', 
    images: ['Images/Dashboard imgs/fertilizers4.jpg', 'Images/Dashboard imgs/fertilizers4-2.jpg', 'Images/Dashboard imgs/fertilizers4-3.jpg'], 
    price: '₱500/kilo', 
    rating: 4, 
    description: 'Nitrate fertilizer, provides fast nitrogen release for plants.' 
},

           'Trowel': { 
    img: 'Images/Dashboard imgs/tools1.jpg', 
    images: ['Images/Dashboard imgs/tools1.jpg', 'Images/Dashboard imgs/tools1-2.jpg', 'Images/Dashboard imgs/tools1-3.jpg'], 
    price: '₱150', 
    rating: 4, 
    description: 'A handy tool for digging and planting.' 
},
'Mini Hand Rake': { 
    img: 'Images/Dashboard imgs/tools2.jpg', 
    images: ['Images/Dashboard imgs/tools2.jpg', 'Images/Dashboard imgs/tools2-2.jpg', 'Images/Dashboard imgs/tools2-3.jpg'], 
    price: '₱130', 
    rating: 4, 
    description: 'A small rake for loosening soil and removing debris.' 
},
'Water Sprinkler': { 
    img: 'Images/Dashboard imgs/tools3.jpg', 
    images: ['Images/Dashboard imgs/tools3.jpg', 'Images/Dashboard imgs/tools3-2.jpg', 'Images/Dashboard imgs/tools3-3.jpg'], 
    price: '₱300', 
    rating: 4, 
    description: 'A tool for watering plants evenly.' 
},
'Gloves': { 
    img: 'Images/Dashboard imgs/tools4.jpg', 
    images: ['Images/Dashboard imgs/tools4.jpg', 'Images/Dashboard imgs/tools4-2.jpg', 'Images/Dashboard imgs/tools4-3.jpg'], 
    price: '₱80', 
    rating: 4, 
    description: 'Gardening gloves for hand protection.' 
},
'Pruning Shears': { 
    img: 'Images/Dashboard imgs/tools5.jpg', 
    images: ['Images/Dashboard imgs/tools5.jpg', 'Images/Dashboard imgs/tools5-2.jpg', 'Images/Dashboard imgs/tools5-3.jpg'], 
    price: '₱250', 
    rating: 4, 
    description: 'A tool for trimming plants and branches.' 
},
'Loopers': { 
    img: 'Images/Dashboard imgs/tools6.jpg', 
    images: ['Images/Dashboard imgs/tools6.jpg', 'Images/Dashboard imgs/tools6-2.jpg', 'Images/Dashboard imgs/tools6-3.jpg'], 
    price: '₱400', 
    rating: 4, 
    description: 'Ideal for cutting thicker branches.' 
},
'Spade': { 
    img: 'Images/Dashboard imgs/tools7.jpg', 
    images: ['Images/Dashboard imgs/tools7.jpg', 'Images/Dashboard imgs/tools7-2.jpg', 'Images/Dashboard imgs/tools7-3.jpg'], 
    price: '₱350', 
    rating: 4, 
    description: 'A tool for digging and turning soil.' 
},
'Rake': { 
    img: 'Images/Dashboard imgs/tools8.jpg', 
    images: ['Images/Dashboard imgs/tools8.jpg', 'Images/Dashboard imgs/tools8-2.jpg', 'Images/Dashboard imgs/tools8-3.jpg'], 
    price: '₱300', 
    rating: 4, 
    description: 'Used for leveling soil and gathering debris.' 
},
'Hoe': { 
    img: 'Images/Dashboard imgs/tools9.jpg', 
    images: ['Images/Dashboard imgs/tools9.jpg', 'Images/Dashboard imgs/tools9-2.jpg', 'Images/Dashboard imgs/tools9-3.jpg'], 
    price: '₱280', 
    rating: 4, 
    description: 'Tool for cultivating and breaking up soil.' 
},

    
                'Milk': {
    img: 'Images/Dashboard imgs/dairy1.jpg', // Main image
    images: ['Images/Dashboard imgs/dairy1.jpg', 'Images/Dashboard imgs/dairy1-2.jpg', 'Images/Dashboard imgs/dairy1-3.jpg'], // Additional images for slider
    price: '₱70/liter',
    rating: 4,
    description: 'Fresh cow’s milk, perfect for daily use.'
},
                'Cheese': { 
    img: 'Images/Dashboard imgs/dairy2.jpg', 
    images: ['Images/Dashboard imgs/dairy2.jpg', 'Images/Dashboard imgs/dairy2-2.jpg', 'Images/Dashboard imgs/dairy2-3.jpg'], 
    price: '₱350/kg', 
    rating: 5, 
    description: 'Delicious cheddar cheese, great for sandwiches and cooking.' 
},
'Butter': { 
    img: 'Images/Dashboard imgs/dairy3.jpg', 
    images: ['Images/Dashboard imgs/dairy3.jpg', 'Images/Dashboard imgs/dairy3-2.jpg', 'Images/Dashboard imgs/dairy3-3.jpg'], 
    price: '₱200/block', 
    rating: 4.5, 
    description: 'Rich and creamy butter, perfect for baking and cooking.' 
},
'Yogurt': { 
    img: 'Images/Dashboard imgs/dairy4.jpg', 
    images: ['Images/Dashboard imgs/dairy4.jpg', 'Images/Dashboard imgs/dairy4-2.jpg', 'Images/Dashboard imgs/dairy4-3.jpg'], 
    price: '₱90/200g', 
    rating: 4.2, 
    description: 'Smooth and tangy yogurt, great for breakfast or snacks.' 
},
'Cream': { 
    img: 'Images/Dashboard imgs/dairy5.jpg', 
    images: ['Images/Dashboard imgs/dairy5.jpg', 'Images/Dashboard imgs/dairy5-2.jpg', 'Images/Dashboard imgs/dairy5-3.jpg'], 
    price: '₱150/250ml', 
    rating: 4.7, 
    description: 'Heavy cream, ideal for desserts and sauces.' 
},
'Cottage Cheese': { 
    img: 'Images/Dashboard imgs/dairy6.jpg', 
    images: ['Images/Dashboard imgs/dairy6.jpg', 'Images/Dashboard imgs/dairy6-2.jpg', 'Images/Dashboard imgs/dairy6-3.jpg'], 
    price: '₱250/500g', 
    rating: 4.3, 
    description: 'Fresh cottage cheese, perfect for salads and healthy meals.' 
},
'Sour Cream': { 
    img: 'Images/Dashboard imgs/dairy7.jpg', 
    images: ['Images/Dashboard imgs/dairy7.jpg', 'Images/Dashboard imgs/dairy7-2.jpg', 'Images/Dashboard imgs/dairy7-3.jpg'], 
    price: '₱120/250g', 
    rating: 4.1, 
    description: 'Tangy sour cream, ideal for dips and baked potatoes.' 
},
'Whipped Cream': { 
    img: 'Images/Dashboard imgs/dairy8.jpg', 
    images: ['Images/Dashboard imgs/dairy8.jpg', 'Images/Dashboard imgs/dairy8-2.jpg', 'Images/Dashboard imgs/dairy8-3.jpg'], 
    price: '₱200/300ml', 
    rating: 4.8, 
    description: 'Light and fluffy whipped cream, perfect for topping desserts.' 
},
'Cream Cheese': { 
    img: 'Images/Dashboard imgs/dairy9.jpg', 
    images: ['Images/Dashboard imgs/dairy9.jpg', 'Images/Dashboard imgs/dairy9-2.jpg', 'Images/Dashboard imgs/dairy9-3.jpg'], 
    price: '₱180/250g', 
    rating: 4.6, 
    description: 'Smooth cream cheese, perfect for spreading and baking.' 
},
'Ghee': { 
    img: 'Images/Dashboard imgs/dairy10.jpg', 
    images: ['Images/Dashboard imgs/dairy10.jpg', 'Images/Dashboard imgs/dairy10-2.jpg', 'Images/Dashboard imgs/dairy10-3.jpg'], 
    price: '₱400/500g', 
    rating: 4.9, 
    description: 'Clarified butter, used in traditional cooking and baking.' 
},
'Ice Cream': { 
    img: 'Images/Dashboard imgs/dairy11.jpg', 
    images: ['Images/Dashboard imgs/dairy11.jpg', 'Images/Dashboard imgs/dairy11-2.jpg', 'Images/Dashboard imgs/dairy11-3.jpg'], 
    price: '₱150/pint', 
    rating: 5, 
    description: 'Creamy vanilla ice cream, a perfect treat.' 
},
'Kefir': { 
    img: 'Images/Dashboard imgs/dairy12.jpg', 
    images: ['Images/Dashboard imgs/dairy12.jpg', 'Images/Dashboard imgs/dairy12-2.jpg', 'Images/Dashboard imgs/dairy12-3.jpg'], 
    price: '₱130/250ml', 
    rating: 4.2, 
    description: 'Fermented milk drink, rich in probiotics.' 
},
'Condensed Milk': { 
    img: 'Images/Dashboard imgs/dairy13.jpg', 
    images: ['Images/Dashboard imgs/dairy13.jpg', 'Images/Dashboard imgs/dairy13-2.jpg', 'Images/Dashboard imgs/dairy13-3.jpg'], 
    price: '₱50/100g', 
    rating: 4.5, 
    description: 'Sweetened condensed milk, ideal for desserts and drinks.' 
},
'Buttermilk': { 
    img: 'Images/Dashboard imgs/dairy14.jpg', 
    images: ['Images/Dashboard imgs/dairy14.jpg', 'Images/Dashboard imgs/dairy14-2.jpg', 'Images/Dashboard imgs/dairy14-3.jpg'], 
    price: '₱70/500ml', 
    rating: 4.1, 
    description: 'Traditional buttermilk, perfect for baking and cooking.' 
},
'Skimmed Milk': { 
    img: 'Images/Dashboard imgs/dairy15.jpg', 
    images: ['Images/Dashboard imgs/dairy15.jpg', 'Images/Dashboard imgs/dairy15-2.jpg', 'Images/Dashboard imgs/dairy15-3.jpg'], 
    price: '₱65/liter', 
    rating: 3.8, 
    description: 'Low-fat milk, a healthier option for daily consumption.' 
},
'Paneer': { 
    img: 'Images/Dashboard imgs/dairy16.jpg', 
    images: ['Images/Dashboard imgs/dairy16.jpg', 'Images/Dashboard imgs/dairy16-2.jpg', 'Images/Dashboard imgs/dairy16-3.jpg'], 
    price: '₱300/kg', 
    rating: 4.6, 
    description: 'Indian cottage cheese, perfect for vegetarian dishes.' 
},
'Ricotta Cheese': { 
    img: 'Images/Dashboard imgs/dairy17.jpg', 
    images: ['Images/Dashboard imgs/dairy17.jpg', 'Images/Dashboard imgs/dairy17-2.jpg', 'Images/Dashboard imgs/dairy17-3.jpg'], 
    price: '₱350/500g', 
    rating: 4.7, 
    description: 'Soft ricotta cheese, ideal for pasta and desserts.' 
},
'Mozzarella Cheese': { 
    img: 'Images/Dashboard imgs/dairy18.jpg', 
    images: ['Images/Dashboard imgs/dairy18.jpg', 'Images/Dashboard imgs/dairy18-2.jpg', 'Images/Dashboard imgs/dairy18-3.jpg'], 
    price: '₱400/kg', 
    rating: 4.9, 
    description: 'Fresh mozzarella, perfect for pizzas and salads.' 
},
'Parmesan Cheese': { 
    img: 'Images/Dashboard imgs/dairy19.jpg', 
    images: ['Images/Dashboard imgs/dairy19.jpg', 'Images/Dashboard imgs/dairy19-2.jpg', 'Images/Dashboard imgs/dairy19-3.jpg'], 
    price: '₱500/kg', 
    rating: 5, 
    description: 'Hard parmesan cheese, great for grating over pasta.' 
},
'Greek Yogurt': { 
    img: 'Images/Dashboard imgs/dairy20.jpg', 
    images: ['Images/Dashboard imgs/dairy20.jpg', 'Images/Dashboard imgs/dairy20-2.jpg', 'Images/Dashboard imgs/dairy20-3.jpg'], 
    price: '₱110/200g', 
    rating: 4.8, 
    description: 'Thick and creamy Greek yogurt, high in protein.' 
},

        };

        const product = products[productName];

        if (product) {
            // Set product details
            document.getElementById('product-image').src = product.img;
            document.getElementById('product-title').textContent = productName;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
        
            // Check which section the user came from before showing details
            if (document.getElementById('all-products').style.display === 'block') {
                previousSection = 'all-products';  // User was in "All Products"
            } else if (document.getElementById('marketplace').style.display === 'block') {
                previousSection = 'marketplace';  // User was in "Marketplace"
            } else {
                previousSection = 'dashboard';  // User was in "Dashboard"
            }
    
            // Set the star rating
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                stars += `<span class="star-rating ${i <= product.rating ? 'filled' : ''}">&#9733;</span>`;
            }
            document.getElementById('product-rating').innerHTML = `Ratings: ${stars}`;
            document.getElementById('product-description').textContent = product.description;

                   // Reset current image index to the first image
        currentIndex = 0;
        document.getElementById('product-image').src = product.images[currentIndex]; // Show first image
         updateImageIndex(currentIndex, product.images.length);
        // Add functionality for Next and Previous buttons
        document.getElementById('next-btn').onclick = () => {
            currentIndex = (currentIndex + 1) % product.images.length; // Increment index
            document.getElementById('product-image').src = product.images[currentIndex]; // Update main image
            updateImageIndex(currentIndex, product.images.length);
        };

        document.getElementById('prev-btn').onclick = () => {
            currentIndex = (currentIndex - 1 + product.images.length) % product.images.length; // Decrement index
            document.getElementById('product-image').src = product.images[currentIndex]; // Update main image
            updateImageIndex(currentIndex, product.images.length);
        };

            // Hide marketplace and show product details
            document.getElementById('marketplace').style.display = 'none';
            document.getElementById('product-details').style.display = 'block';
            document.getElementById('topTrendsSection').style.display = 'none';
            document.getElementById('all-products').style.display = 'none';  
            // Hide carousel and top trends when viewing product details
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('all-products-section').style.display = 'none';
            document.getElementById('carousel-section').style.display = 'none';
            document.querySelector('.top-trends-section').style.display = 'none';
        }
    }

    // Function to update the image index display
function updateImageIndex(currentIndex, totalImages) {
    document.getElementById('image-index').textContent = `${currentIndex + 1}/${totalImages}`;
}


    function showTopTrendProductDetails(productName) {
        previousSection = 'dashboard';
        const products = {
            'Corn': {
                img: 'Images/Dashboard imgs/2.jpg', // Main image
                images: ['Images/Dashboard imgs/2.jpg', 'Images/Dashboard imgs/2-2.jpg', 'Images/Dashboard imgs/2-3.jpg'], // Additional images for slider
                price: '₱46/kilo',
                rating: 5,
                description: 'Corn is rich in vitamins and minerals.'},
           'Sugarcane': {
                img: 'Images/Dashboard imgs/7.jpg', // Main image
                images: ['Images/Dashboard imgs/7.jpg', 'Images/Dashboard imgs/7-2.jpg', 'Images/Dashboard imgs/7-3.jpg'], // Additional images for slider
                price: '₱65/kilo',
                rating: 5,
                description: 'Sugarcane is used to produce sugar and other sweeteners.'
            },
            'Rice': {
                img: 'Images/Dashboard imgs/1.jpg', // Main image
                images: ['Images/Dashboard imgs/1.jpg', 'Images/Dashboard imgs/1-2.jpg', 'Images/Dashboard imgs/1-3.jpg'], // Additional images for slider
                price: '₱44/kilo',
                rating: 4,
                description: 'Rice is a staple food in many countries.'
            },
            'Garlic': {
                img: 'Images/Dashboard imgs/4.jpg', // Main image
                images: ['Images/Dashboard imgs/4.jpg', 'Images/Dashboard imgs/4-2.jpg', 'Images/Dashboard imgs/4-3.jpg'], // Additional images for slider
                price: '₱60/kilo',
                rating: 4,
                description: 'Garlic is a popular seasoning in many dishes worldwide.'
            },
        
        };
    
        const product = products[productName];
    
        if (product) {
            document.getElementById('product-image').src = product.img;
            document.getElementById('product-title').textContent = productName;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-rating').innerHTML = `Ratings: ${product.rating}/5`;
            document.getElementById('product-description').textContent = product.description;

            let stars = '';
            for (let i = 1; i <= 5; i++) {
                stars += `<span class="star-rating ${i <= product.rating ? 'filled' : ''}">&#9733;</span>`;
            }
            document.getElementById('product-rating').innerHTML = `Ratings: ${stars}`;

             // Reset current image index to the first image
        currentIndex = 0;
        document.getElementById('product-image').src = product.images[currentIndex]; // Show first image
         updateImageIndex(currentIndex, product.images.length);
        // Add functionality for Next and Previous buttons
        document.getElementById('next-btn').onclick = () => {
            currentIndex = (currentIndex + 1) % product.images.length; // Increment index
            document.getElementById('product-image').src = product.images[currentIndex]; // Update main image
            updateImageIndex(currentIndex, product.images.length);
        };

        document.getElementById('prev-btn').onclick = () => {
            currentIndex = (currentIndex - 1 + product.images.length) % product.images.length; // Decrement index
            document.getElementById('product-image').src = product.images[currentIndex]; // Update main image
            updateImageIndex(currentIndex, product.images.length);
        };

            // Hide carousel and top trends when viewing product details
            document.getElementById('carousel-section').style.display = 'none';
            document.querySelector('.top-trends-section').style.display = 'none';
    
            // Hide dashboard and marketplace
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('marketplace').style.display = 'none';
            document.getElementById('product-details').style.display = 'block';
        }
    }
    

    // Start Cart Code
   
    

    let cart = [];

// Function to update the cart count displayed in the UI
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length; // Update the text content with the cart length
}

// Function to add the product to the cart
function addToCart() {
    // Get product details
    const productTitle = document.getElementById("product-title").innerText;
    const productPrice = document.getElementById("product-price").innerText;
    const productImage = document.getElementById("product-image").src;
    const productDescription = document.getElementById("product-description").innerText;
    
    // Function to get the filled star rating
    function getFilledStarRating() {
        // Count the filled stars
        const filledStars = document.querySelectorAll('#product-rating .filled').length; 
        return filledStars; // Returns the number of filled stars
    }

    // Get the current filled star rating
    const rating = getFilledStarRating();

    // Create a product object
    const product = {
        title: productTitle,
        price: productPrice,
        image: productImage,
        description: productDescription,
        rating: rating,
        quantity: 1 // Default quantity
    };

    // Add product to the cart array
    cart.push(product);

    alert('Product added to cart');
    // Update the cart display
    updateCartDisplay();
    updateCartCount();
}


  
        // Function to create a cart item element
        function createCartItem(item, index) {
            // Create a cart item row element
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item-row"; // Add class for styling

            // Set the star rating for the current item
            const stars = Array.from({ length: 5 }, (_, i) => `
                <span class="star-rating ${i < item.rating ? 'filled' : ''}">&#9733;</span>
            `).join('');

     // Populate cart item HTML
            cartItem.innerHTML = `
            <input type="checkbox" class="product-checkbox" id="product-${index}">
            <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px;">
            <p class="item-title">${item.title}</p>
            <p class="item-description" onclick="toggleDescription(this)">${item.description}</p>
                <div class="description-detail" style="display: none;">
                    ${item.description}
                </div>
            <p>Ratings: ${stars}</p>
            <p>${item.price}</p>
            <div class="quantity-controls">
                <button type="button" class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <input type="number" id="quantity-${index}" value="${item.quantity}" min="1" readonly style="width: 50px; text-align: center;">
                <button type="button" class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <button class="profile-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            return cartItem;
        }


        function toggleDescription(element) {
            const descriptionDetail = element.nextElementSibling; // This is the div with the description
            const descriptionText = descriptionDetail.innerHTML; // Get the inner HTML (description)

            // Show the description in an alert
            alert(descriptionText);
        }
        

        // Function to update quantity
        function updateQuantity(index, change) {
            // Get the current quantity
            const quantityInput = document.getElementById(`quantity-${index}`);
            let currentQuantity = parseInt(quantityInput.value);

            // Adjust quantity based on change
            if (change === -1) {
                currentQuantity -= 1; // Decrease quantity
            } else if (change === 1) {
                currentQuantity += 1; // Increase quantity
            }

            // Check if the quantity is less than 1
            if (currentQuantity < 1) {
                // Show alert that the item will be removed
                alert("This item will be removed from the cart.");
                removeFromCart(index); // Remove the item from the cart
                return; // Exit the function
            }

            // Update the input value
            quantityInput.value = currentQuantity;

            // Update the cart object
            cart[index].quantity = currentQuantity;

            // Call updateCartDisplay() to refresh the display
            updateCartDisplay();

           

        }



        // Function to update cart display (remains the same)
        function updateCartDisplay() {
            console.log(cart);

            const cartItemsContainer = document.getElementById("cart-items");
            cartItemsContainer.innerHTML = ""; // Clear previous cart items

            if (cart.length === 0) {
                document.getElementById("empty-cart-message").style.display = "block"; // Show empty cart message
                document.getElementById("checkout-btn").style.display = "none"; // Hide checkout button
            } else {
                document.getElementById("empty-cart-message").style.display = "none"; // Hide empty cart message
                document.getElementById("checkout-btn").style.display = "block"; // Show checkout button

                cart.forEach((item, index) => {
                    const cartItem = createCartItem(item, index);
                    cartItemsContainer.appendChild(cartItem);
                });
            }
        }



    // Function to remove an item from the cart
    function removeFromCart(index) {
        cart.splice(index, 1); // Remove item from cart array
        updateCartDisplay(); // Update cart display
        updateCartCount();
    }

    // Function to checkout
    function checkout() {
        // const selectedProducts = cart.filter((_, index) => document.getElementById(`product-${index}`).checked);
        
        // if (selectedProducts.length === 0) {
        //     alert("Please select at least one product to checkout.");
        //     return;
        // }

        // // Implement checkout process (e.g., proceed to payment, send data to server, etc.)
        // console.log("Checkout with the following products:", selectedProducts);
        // alert("Checkout successful!"); // Placeholder for a successful checkout message
        // cart = []; // Clear cart after checkout
        // updateCartDisplay(); // Update cart display
        //  updateCartCount();
    }


    // End Cart Code

    function buyNow() {
        alert('Proceeding to purchase');
        // Add functionality to handle purchase or payment redirection
    }

    // Initialize the page and render the chart on page load
    window.onload = function() {
        renderSalesChart();
    };

    let currentSlide = 0;

    function moveCarousel(direction) {
        const carousel = document.querySelector('.carousel');
        const totalItems = document.querySelectorAll('.carousel-item').length;

        currentSlide += direction;

        if (currentSlide >= totalItems) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalItems - 1;
        }

        // Move the carousel by 100% of the width per slide
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Automatically move to the next slide every 5 seconds
    setInterval(() => {
        moveCarousel(1); // Move to the next slide
    }, 5000); // Change 5000 to your desired interval in milliseconds

    function viewAllTrends() {
        // Hide the top trends and other dashboard sections
        document.getElementById('topTrendsSection').style.display = 'none';
        document.getElementById('carousel-section').style.display = 'none';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('all-products').style.display = 'block'; // Show All Products
    
        // Attach event listeners only once
        document.querySelectorAll('#all-products .trend-item').forEach(item => {
            item.onclick = function() {
                const productName = this.querySelector('.overlay-text').textContent; // Get product name
                showProductDetails(productName);  // Show product details
            };
        });
    }
    
    function goBackToDashboard() {
        // Show the Top Trends section again
        document.getElementById('topTrendsSection').style.display = 'block';
        document.getElementById('carousel-section').style.display = 'block';
        document.getElementById('dashboard').style.display = 'block';
        
        // Hide the All Products section
        document.getElementById('all-products').style.display = 'none';
    }

    
    function loadAllProducts() {
        const trendsGrid = document.querySelector('.trends-grid');
        trendsGrid.classList.add('all-products-view');
    }
    
    const products = {
        crops: [
            { name: "Rice", price: 44 },
            { name: "Corn", price: 46 },
            { name: "Potato", price: 48 },
            { name: "Garlic", price: 50 },
            { name: "Onion", price: 60 },
            { name: "Ginger", price: 70 },
            { name: "Sugarcane", price: 65 },
            { name: "Carrot", price: 60 },
            { name: "Radish", price: 55 },
            { name: "Soybeans", price: 44 },
            { name: "Barley", price: 46 },
            { name: "Oats", price: 48 },
            { name: "Tomato", price: 50 },
            { name: "Cassava", price: 60 },
            { name: "Coconut", price: 70 },
            { name: "Banana", price: 65 },
            { name: "Pineapple", price: 60 },
            { name: "Mango", price: 55 },
            { name: "Calamansi", price: 60 },
            { name: "Eggplant", price: 55 }
        ],
        seeds: [
            { name: "Rice seeds", price: 200 },
            { name: "Corn seeds", price: 180 },
            { name: "Sunflower seeds", price: 250 },
            { name: "Tomato seeds", price: 230 },
            { name: "Lettuce seeds", price: 180 },
            { name: "Carrot seeds", price: 200 },
            { name: "Cucumber seeds", price: 210 },
            { name: "Pepper seeds", price: 220 },
            { name: "Pumpkin seeds", price: 240 },
            { name: "Barley seeds", price: 170 },
            { name: "Canola seeds", price: 260 },
            { name: "Pea seeds", price: 200 },
            { name: "Sesame seeds", price: 280 },
            { name: "Broccoli seeds", price: 240 },
            { name: "Okra seeds", price: 160 },
            { name: "Cauliflower seeds", price: 220 },
            { name: "Turnip seeds", price: 200 },
            { name: "Melon seeds", price: 230 },
            { name: "Squash seeds", price: 220 },
            { name: "Papaya seeds", price: 210 }
        ],
        dairy: [
            { name: "Milk", price: 70 },
            { name: "Cheese", price: 150 },
            { name: "Butter", price: 120 },
            { name: "Yogurt", price: 80 },
            { name: "Cream", price: 90 },
            { name: "Cottage Cheese", price: 140 },
            { name: "Sour Cream", price: 100 },
            { name: "Whipped Cream", price: 120 },
            { name: "Cream Cheese", price: 180 },
            { name: "Ghee", price: 200 },
            { name: "Ice Cream", price: 100 },
            { name: "Kefir", price: 120 },
            { name: "Condensed Milk", price: 80 },
            { name: "Buttermilk", price: 60 },
            { name: "Skimmed Milk", price: 60 },
            { name: "Paneer", price: 150 },
            { name: "Ricotta Cheese", price: 180 },
            { name: "Mozzarella Cheese", price: 200 },
            { name: "Parmesan Cheese", price: 250 },
            { name: "Greek Yogurt", price: 90 }
        ],
        fertilizers: [
            { name: "Phosphorus fertilizer", price: 600 },
            { name: "Nitrogen fertilizer", price: 500 },
            { name: "Potassium fertilizer", price: 550 },
            { name: "Compost fertilizer", price: 150 },
            { name: "Organic fertilizer", price: 200 },
            { name: "Inorganic fertilizer", price: 450 },
            { name: "Nitrate fertilizer", price: 500 }
        ],
        
        tools: [
            { name: "Trowel", price: 150 },
            { name: "Mini Hand Rake", price: 130 },
            { name: "Water Sprinkler", price: 300 },
            { name: "Gloves", price: 80 },
            { name: "Pruning Shears", price: 250 },
            { name: "Loopers", price: 400 },
            { name: "Spade", price: 350 },
            { name: "Rake", price: 300 },
            { name: "Hoe", price: 280 }
        ]
    };

    // Initialize the chart
    const ctx = document.getElementById('priceChart').getContext('2d');
    let priceChart = new Chart(ctx, {
        type: 'bar', // You can change this to 'line', 'pie', etc.
        data: {
            labels: [], // Placeholder for product names
            datasets: [{
                label: 'Product Prices',
                data: [],
                backgroundColor: 'rgba(141, 73, 32, 0.2)',
                borderColor: 'rgba(141, 73, 32, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Product Name' }
                },
                y: {
                    title: { display: true, text: 'Price (₱)' },
                    beginAtZero: true
                }
            }
        }
    });

    // Function to update the graph based on selected filters
    function updateGraph() {
        const selectedCategory = document.getElementById('category').value;
        const selectedMonth = document.getElementById('month').value;
        const selectedYear = document.getElementById('year').value;

        // Filter products based on the selected category
        let filteredProducts = [];
        if (selectedCategory === 'all') {
            // Combine all categories if 'All' is selected
            filteredProducts = [...products.crops, ...products.seeds, ...products.dairy, ...products.fertilizers, ...products.tools];
        } else {
            filteredProducts = products[selectedCategory] || [];
        }

        // Date-based price adjustment (Example: adjust prices for predictions)
        filteredProducts = filteredProducts.map(product => {
            let adjustedPrice = product.price;

            // Simple example: Increase price by 2% for each year after 2023, and 1% per month for seasonality
            const yearDifference = selectedYear - 2023;
            const monthDifference = selectedMonth - 1; // 0 for January, 1 for February, etc.

            // Adjust price based on year and month
            adjustedPrice *= (1 + 0.02 * yearDifference); // Year adjustment
            adjustedPrice *= (1 + 0.01 * monthDifference); // Month adjustment

            return { ...product, price: adjustedPrice.toFixed(2) }; // Format price to 2 decimal places
        });

        // Update chart with filtered products
        const productNames = filteredProducts.map(product => product.name);
        const productPrices = filteredProducts.map(product => product.price);

        priceChart.data.labels = productNames;
        priceChart.data.datasets[0].data = productPrices;
        priceChart.update();
    }

    // Initial graph display
    updateGraph();


    
