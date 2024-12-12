import { reviews, addReview } from './reviews.mjs';

// Function to render reviews
function renderReviews() {
    const mainContent = document.querySelector('.maincontent');
    
    // Clear existing reviews
    if (mainContent) {
        mainContent.innerHTML = '';
        
        // Create reviews dynamically
        reviews.forEach(review => {
            // Create review container
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            
            // Create review text section
            const reviewTextDiv = document.createElement('div');
            reviewTextDiv.classList.add('reviewtext');
            
            // Create game title
            const gameTitle = document.createElement('h2');
            gameTitle.textContent = review.gameName;
            
            // Create username
            const username = document.createElement('h4');
            username.textContent = `By ${review.username}`;
            
            // Create review paragraph
            const reviewParagraph = document.createElement('p');
            reviewParagraph.textContent = review.reviewText;
            
            // Append text elements to review text div
            reviewTextDiv.appendChild(gameTitle);
            reviewTextDiv.appendChild(username);
            reviewTextDiv.appendChild(reviewParagraph);
            
            // Create review image section
            const reviewImageDiv = document.createElement('div');
            reviewImageDiv.classList.add('reviewimage');
            
            // Create image
            const reviewImage = document.createElement('img');
            reviewImage.src = review.imageUrl;
            reviewImage.alt = `${review.gameName} image`;
            
            // Append image to image div
            reviewImageDiv.appendChild(reviewImage);
            
            // Append text and image divs to review container
            reviewDiv.appendChild(reviewTextDiv);
            reviewDiv.appendChild(reviewImageDiv);
            
            // Append review to main content
            mainContent.appendChild(reviewDiv);
        });
    }
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {
    // Render reviews on index page
    renderReviews();
    
    // Handle form submission
    const reviewForm = document.getElementById('reviewSubmitForm');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const gameName = document.getElementById('gamename').value;
            const username = document.getElementById('username').value;
            const imageUrl = document.getElementById('imageform').value;
            const reviewText = document.getElementById('reviewtext').value;
            
            // Create new review object
            const newReview = {
                gameName,
                username,
                reviewText,
                imageUrl
            };
            
            // Add review
            addReview(newReview);
            
            // Reset form
            reviewForm.reset();
            
            // Optional: Provide feedback to user
            alert('Review submitted successfully!');
            
            // Redirect to home page
            window.location.href = 'index.html';
        });
    }
});