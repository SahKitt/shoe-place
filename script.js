
// //adding items to cart
// Function to add item to cart
function addToCart() {
  const productName = document.getElementById('x').textContent.trim();
  const productPriceElement = document.getElementById('y');
  const productPriceString = productPriceElement.textContent.trim();

  // Extract the numeric price from the string
  const priceMatch = productPriceString.match(/\d+(\.\d+)?/); 
  const productPrice = priceMatch ? parseFloat(priceMatch[0]) : NaN;

  if (isNaN(productPrice)) {
    console.error('Invalid product price:', productPriceString);
    return;
  }
  
  // Create an object representing the item to add to the cart
  const item = {
    name: productName,
    price: productPrice
  };

  // Retrieve existing cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new item to the cart
  cartItems.push(item);

  // Save updated cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update cart display
  updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(index) {
  // Retrieve existing cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Remove the item from the cart
  cartItems.splice(index, 1);

  // Save updated cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update cart display
  updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
  const cartElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Retrieve existing cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Clear existing cart items
  cartElement.innerHTML = "";

  // Update cart items
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} = ${item.price}`;
    // Add remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeFromCart(index);
    li.appendChild(removeButton);
    cartElement.appendChild(li);
  });

  // Calculate and update cart total
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotalElement.textContent = cartTotal.toFixed(2);

  // Update cart count
  updateCartCount();
}

// Function to update cart count
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");

  // Retrieve existing cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Get the count of items in the cart
  const itemCount = cartItems.length;

  // Update the content of the cart count element
  cartCountElement.textContent = itemCount;
}

// Initial setup: Update cart display and count
updateCartDisplay();
updateCartCount();



// ////login home
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// ////login home

