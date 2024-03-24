function addCartToCheckout() {
  window.location.href = "checkout.html";
  // Retrieve cart items
  var cartItems = document.getElementById('cart-items').innerHTML;
  
  // Append cart items to the checkout section
  document.getElementById('cart-sectn').innerHTML = cartItems;
  
  // Move to the next step (Shipping) after adding cart items
  nextStep();
}

function nextStep() {
  // Logic for moving to the next step (Shipping, Payment, Confirmation)
  var progressBar = document.getElementById('progress-bar');
  var steps = progressBar.querySelectorAll('.progress-step');
  var currentStep = progressBar.querySelector('.active');

  // Find the index of the current step
  var currentIndex = Array.prototype.indexOf.call(steps, currentStep);

  // Mark the current step as completed
  currentStep.classList.remove('active');
  currentStep.classList.add('completed');

  // Move to the next step
  if (currentIndex < steps.length - 1) {
    var nextStep = steps[currentIndex + 1];
    nextStep.classList.add('active');
  }
}

function placeOrder() {
  // Logic for placing the order
  // For demonstration purposes, let's just alert a message
  alert('Your order has been placed successfully!');
}