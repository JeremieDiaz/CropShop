document.addEventListener("DOMContentLoaded", function () {
  displayCheckoutItems(); // Display items in checkout
  attachButtonEvents(); // Attach button events for quantity changes
  updateOverallTotal(); // Calculate total on page load
});

function attachButtonEvents() {
  const plusBtns = document.querySelectorAll(".quantity_btn.plus");
  const minusBtns = document.querySelectorAll(".quantity_btn.minus");

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.previousElementSibling;
      input.value = parseInt(input.value) + 1; // Increment quantity
      updateTotal(input);
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const input = this.nextElementSibling;
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1; // Decrement quantity
        updateTotal(input);
      }
    });
  });
}

function updateTotal(input) {
  const priceText = input
    .closest(".product_details")
    .querySelector(".p_price")
    .getAttribute("data-price");

  // Extract numeric value from price string (e.g., "₱44/kilo" becomes 44)
  const price = parseFloat(priceText.replace(/[^\d.]/g, "")) || 0;

  const totalCost = input
    .closest(".product_details")
    .querySelector(".total_cost");
  const quantity = parseInt(input.value) || 1; // Default to 1 if invalid

  // Calculate the total for the individual product
  const productTotal = price * quantity;
  totalCost.textContent = "Total: ₱ " + productTotal.toFixed(2);

  // Update the overall total price
  updateOverallTotal();
}

function updateOverallTotal() {
  const allProducts = document.querySelectorAll(".product");
  let overallTotal = 0;

  allProducts.forEach((product) => {
    const priceText = product
      .querySelector(".p_price")
      .getAttribute("data-price");

    // Extract numeric value from price string (e.g., "₱44/kilo" becomes 44)
    const productPrice = parseFloat(priceText.replace(/[^\d.]/g, "")) || 0;

    const quantityInput = product.querySelector(".quantity_input");
    const quantity = parseInt(quantityInput.value) || 1; // Default to 1 if invalid

    overallTotal += productPrice * quantity; // Accumulate the total
  });

  // Update the total price display
  document.getElementById("price").textContent = "₱ " + overallTotal.toFixed(2);
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
    "/Images/BackgroundImages/wheat.svg",
  ];

  const container = document.querySelector(".background-container");
  container.innerHTML = "";

  imageSources.forEach((src) => {
    const count = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < count; i++) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "";

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
  const container = document.querySelector(".background-container");
  const checkoutBox = document.querySelector(".check_out");

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
  document.querySelector(".client_details .name").textContent =
    "Name: " + newName;
  document.querySelector(".client_details .address").textContent =
    "Address: " + newAddress;
  document.querySelector(".client_details .contact").textContent =
    "Contact Number: " + newContact;
}

updateClientDetails("Jane Smith", "456 Elm St", "(987) 654-3210");

function initializeFunctions() {
  initializeImages();
  updateClientDetails("Jane Smith", "456 Elm St", "(987) 654-3210");
}

document.addEventListener("DOMContentLoaded", function () {
  displayCheckoutItems(); // Display items in checkout
  updateOverallTotal(); // Calculate total on page load
});

function displayCheckoutItems() {
  const checkoutItems = JSON.parse(localStorage.getItem("checkoutItems")) || [];

  const productsMenu = document.querySelector(".products_menu");
  productsMenu.innerHTML = ""; // Clear any existing content

  if (checkoutItems.length === 0) {
    productsMenu.innerHTML = "<p>No items in checkout.</p>";
    return;
  }

  checkoutItems.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Create product HTML dynamically
    productDiv.innerHTML = `
              <div class="p_image" style="background-image: url(${
                item.image
              })"></div>
              <div class="product_details">
                <div class="p_name">Product: ${item.title}</div>
                <div class="p_price" data-price="${item.price}">Price: ${
      item.price
    }</div>
                <div class="p_quantity">
                  Number of Product:
                  <div class="quantity_container">
                    <button class="quantity_btn minus">-</button>
                    <input type="number" value="${
                      item.quantity
                    }" min="1" class="quantity_input" readonly />
                    <button class="quantity_btn plus">+</button>
                  </div>
                </div>
                <div class="total_cost">Total: ₱${(
                  parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity
                ).toFixed(2)}</div>
              </div>
          `;

    productsMenu.appendChild(productDiv);
  });

  // Reattach button events after displaying items
  attachButtonEvents();
  document.addEventListener("DOMContentLoaded", function () {
    displayCheckoutItems(); // Display items in checkout
    updateOverallTotal(); // Calculate total on page load
  });
}

function checkOutToShip() {
  const checkoutItems = document.querySelectorAll(".product"); // Get all products from the checkout page

  // Retrieve existing order details from localStorage, or initialize a new object if none exists
  let existingOrderDetails = JSON.parse(
    localStorage.getItem("orderDetails")
  ) || {
    orderNumber: Math.floor(Math.random() * 100000), // Generate a random order number if not already present
    items: [], // Initialize an empty array for the items
  };

  if (checkoutItems.length === 0) {
    const nocCheckoutToast = document.getElementById("no-item-checkout-toast");
    nocCheckoutToast.className = "show";
    setTimeout(function () {
      nocCheckoutToast.className = nocCheckoutToast.className.replace(
        "show",
        ""
      );
    }, 3000);
    return;
  }

  // Iterate over the products being checked out
  checkoutItems.forEach((item) => {
    const title = item.querySelector(".p_name").textContent.split(": ")[1]; // Extract title
    const image = item
      .querySelector(".p_image")
      .style.backgroundImage.slice(5, -2); // Extract image URL
    const price = item.querySelector(".p_price").getAttribute("data-price"); // Extract price
    const quantity = item.querySelector(".quantity_input").value; // Extract quantity

    // Generate a unique order number for each product
    const orderNumber = `${title.replace(/\s+/g, "-")}-${Math.floor(
      Math.random() * 100000
    )}`;

    // Add the new item details to the existing orderDetails items array
    existingOrderDetails.items.push({
      title,
      image,
      price,
      quantity,
      orderNumber, // Add the unique order number
    });
  });

  // Save the updated order details back to localStorage
  localStorage.setItem("orderDetails", JSON.stringify(existingOrderDetails));

  // Clear checkout items from localStorage
  localStorage.removeItem("checkoutItems");

  // Redirect to order.html
  window.location.href = "http://127.0.0.1:5500/Frontend/Profile/order.html"; // Update with the correct path
}
