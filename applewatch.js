document.addEventListener("DOMContentLoaded", function () {
    // Load saved reviews from localStorage if available
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewList = document.querySelector('.review-list');
  
    // Render saved reviews
    savedReviews.forEach((review) => {
      const newReview = document.createElement('div');
      newReview.classList.add('review');
      newReview.innerHTML = `
        <p class="review-text">"${review.text}"</p>
        <div class="rating">${'⭐'.repeat(review.rating)}</div>
        <p class="review-author">- ${review.author}</p>
        <button class="delete-review">Delete</button>
      `;
  
      // Add the delete functionality to the new review
      newReview.querySelector('.delete-review').addEventListener('click', () => {
        deleteReview(newReview, review);
      });
  
      reviewList.appendChild(newReview);
    });
  
    // Handle review form submission
    document.getElementById('reviewForm').addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form refresh
  
      const reviewText = document.getElementById('reviewText').value;
      const reviewRating = document.getElementById('reviewRating').value;
      const reviewAuthor = document.getElementById('reviewAuthor').value;
  
      // Create a new review object
      const newReview = {
        text: reviewText,
        rating: reviewRating,
        author: reviewAuthor,
      };
  
      // Add the new review to the saved reviews array
      savedReviews.push(newReview);
      localStorage.setItem('reviews', JSON.stringify(savedReviews));
  
      // Create the review element and append it to the list
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
      reviewElement.innerHTML = `
        <p class="review-text">"${reviewText}"</p>
        <div class="rating">${'⭐'.repeat(reviewRating)}</div>
        <p class="review-author">- ${reviewAuthor}</p>
        <button class="delete-review">Delete</button>
      `;
  
      // Add the delete functionality to the new review
      reviewElement.querySelector('.delete-review').addEventListener('click', () => {
        deleteReview(reviewElement, newReview);
      });
  
      reviewList.appendChild(reviewElement);
  
      // Clear the form
      document.getElementById('reviewForm').reset();
    });
  
    // Delete a review function
    function deleteReview(reviewElement, review) {
      // Remove the review element from the DOM
      reviewElement.remove();
  
      // Remove the review from the saved reviews array
      const index = savedReviews.indexOf(review);
      if (index > -1) {
        savedReviews.splice(index, 1);
      }
  
      // Update the local storage with the new list of reviews
      localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }
  
    // QR Code generation functionality
    const qrCodeContainer = document.getElementById('qrCode');
    const productPageURL = 'https://www.elitekart.com/products/apple-watch-series-9';
  
    // Generate the QR code and append it to the container
    QRCode.toCanvas(qrCodeContainer, productPageURL, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000', // Dark color for the QR code
        light: '#ffffff', // Light background color
      }
    }, function (error) {
      if (error) {
        console.error("QR Code Error: ", error);
      } else {
        console.log("QR Code generated successfully!");
      }
    });
  });
  