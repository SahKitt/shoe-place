// Function to add a new review
function addReview() {
    // Get the review text from the textarea
    const reviewText = document.getElementById('reviewText').value;
    
    // Create a new review object
    const review = {
      text: reviewText,
      date: new Date().toLocaleDateString()
    };
    
    // Retrieve existing reviews from session storage
    let reviews = JSON.parse(sessionStorage.getItem('reviews')) || [];
    
    // Add the review to the array
    reviews.push(review);
    
    // Save the updated reviews back to session storage
    sessionStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Clear the textarea
    document.getElementById('reviewText').value = '';
    
    // Display the reviews
    displayReviews();
}

// Function to display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');
    
    // Clear existing reviews
    reviewsContainer.innerHTML = '';
    
    // Retrieve reviews from session storage
    const reviews = JSON.parse(sessionStorage.getItem('reviews')) || [];
    
    // Loop through the reviews array and display each review
    reviews.forEach((review, index) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `<p>${review.text}</p><small>${review.date}</small>`;
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteReview(index); // Attach event handler to delete the review
        
        // Append delete button to the reviewDiv
        reviewDiv.appendChild(deleteButton);
        
        // Append reviewDiv to the reviewsContainer
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Function to delete a review
function deleteReview(index) {
    // Retrieve existing reviews from session storage
    let reviews = JSON.parse(sessionStorage.getItem('reviews')) || [];
    
    // Remove the review at the specified index
    reviews.splice(index, 1);
    
    // Save the updated reviews back to session storage
    sessionStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Update the display
    displayReviews();
}

// Initial setup: Display reviews
displayReviews();
