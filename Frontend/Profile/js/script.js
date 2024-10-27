function saveChanges() {
  // Implement save changes functionality
  alert("Changes saved!");
  // Close the modal after saving
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("editModal")
  );
  modal.hide();
}

function showOrders(status) {
  // Update active button
  document.querySelectorAll(".order-status-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.add("inactive");
  });

  // Set the clicked button as active
  const activeButton = document.querySelector(
    `.order-status-btn[onclick="showOrders('${status}')"]`
  );
  activeButton.classList.add("active");
  activeButton.classList.remove("inactive");

  // Clear the order details container
  const orderDetails = document.getElementById("order-details");
  orderDetails.innerHTML = ""; // Clear current orders

  // Retrieve order details from localStorage
  const orderDetailsFromStorage = JSON.parse(
    localStorage.getItem("orderDetails")
  );

  if (!orderDetailsFromStorage || !orderDetailsFromStorage.items.length) {
    orderDetails.innerHTML = "<p>No orders found.</p>";
    return;
  }

  // Display filtered items based on status
  orderDetailsFromStorage.items.forEach((item) => {
    // Extract numeric price from item.price (e.g., from "₱220/250grams" to "220")
    const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, "")); // Extract only the number from price
    const itemQuantity = parseInt(item.quantity); // Extract quantity as an integer
    const totalPrice = itemPrice * itemQuantity; // Calculate total price for the item

    const orderCard = `
          <li class="flex py-6 bg-white p-2 rounded mb-2">
              <div class="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img src="${
                    item.image
                  }" alt="Image of the product" class="h-full w-full object-cover object-center" />
              </div>
              <div class="ml-4 flex flex-1 flex-col">
                  <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3><a href="#">${item.title}</a></h3>
                          <div class="total_cost">Total: ₱${totalPrice.toFixed(
                            2
                          )}</div>
                      </div>
                      <p class="mt-1 text-sm text-gray-500">Description</p>
                      <p class="mt-1 text-sm text-gray-500">Order#${
                        item.orderNumber.split("-")[1]
                      }</p>
                  </div>
                  <div class="flex flex-1 items-end justify-between text-sm">
                      <p class="text-gray-500">Qty ${itemQuantity}</p>
                  </div>
              </div>
          </li>
      `;
    orderDetails.innerHTML += orderCard;
  });
}

// Function to toggle the sidebar visibility
document.getElementById("toggleSidebar").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("visible");
  const contentArea = document.querySelector(".content-area");
  contentArea.classList.toggle("collapsed");
});

// Function to close the sidebar
document.getElementById("closeSidebar").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  const contentArea = document.querySelector(".content-area");
  sidebar.classList.remove("visible");
  contentArea.classList.add("collapsed");
});

// Handle the logout link click
document
  .getElementById("logout-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default action
    var logoutModal = new bootstrap.Modal(
      document.getElementById("logoutModal")
    ); // Initialize Bootstrap modal
    logoutModal.show(); // Show the modal
  });

// Handle the "Yes" button click in the modal
document
  .getElementById("confirm-logout")
  .addEventListener("click", function () {
    // Perform the logout action here, e.g., redirect to the logout URL
    window.location.href = "login.html"; // Replace with actual logout URL
  });

// Initialize with the "To Ship" orders on page load
window.onload = function () {
  showOrders("to-ship");
};
