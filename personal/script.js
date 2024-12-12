import { reviews, addReview } from './reviews.js';


function renderReviews() {
    const mainContent = document.querySelector('.maincontent');
    
    if (mainContent) {
        mainContent.innerHTML = '';
        
        reviews.forEach(review => {
            
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            
            const reviewTextDiv = document.createElement('div');
            reviewTextDiv.classList.add('reviewtext');
            
            
            const gameTitle = document.createElement('h2');
            gameTitle.textContent = review.gameName;
            
            const username = document.createElement('h4');
            username.textContent = `By ${review.username}`;
            
            
            const reviewParagraph = document.createElement('p');
            reviewParagraph.textContent = review.reviewText;
            reviewTextDiv.appendChild(gameTitle);

            reviewTextDiv.appendChild(username);
            reviewTextDiv.appendChild(reviewParagraph);
            
            
            const reviewImageDiv = document.createElement('div');
            reviewImageDiv.classList.add('reviewimage');
            
            
            const reviewImage = document.createElement('img');
            reviewImage.src = review.imageUrl;
            reviewImage.alt = `${review.gameName} image`;
            reviewImageDiv.appendChild(reviewImage);
            
            reviewDiv.appendChild(reviewTextDiv);
            reviewDiv.appendChild(reviewImageDiv);
            
            mainContent.appendChild(reviewDiv);
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    renderReviews();
    
    
    const reviewForm = document.getElementById('reviewSubmitForm');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const gameName = document.getElementById('gamename').value;
            const username = document.getElementById('username').value;
            const imageUrl = document.getElementById('imageform').value;
            const reviewText = document.getElementById('reviewtext').value;
            const newReview = {
                gameName,
                username,
                reviewText,
                imageUrl
            };
            
            
            addReview(newReview);
            reviewForm.reset();
            alert('Review submitted successfully!');
            
            window.location.href = 'index.html';
        });
    }
});