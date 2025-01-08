// "Buy Now" Button Alert
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

// Image Lightbox
const overlay = document.createElement('div');
overlay.style.display = 'none';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.zIndex = '1000';
document.body.appendChild(overlay);

document.querySelectorAll('.product-card img').forEach(image => {
    image.addEventListener('click', () => {
        const largeImg = document.createElement('img');
        largeImg.src = image.src;
        largeImg.style.maxWidth = '80%';
        largeImg.style.maxHeight = '80%';
        overlay.innerHTML = '';
        overlay.appendChild(largeImg);
        overlay.style.display = 'flex';
    });
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Scroll to Top Button
const topButton = document.createElement('button');
topButton.innerHTML = '⬆'; // Up arrow
topButton.id = 'topButton';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.padding = '10px';
topButton.style.backgroundColor = '#b5b5b5';
topButton.style.color = 'black';
topButton.style.border = 'none';
topButton.style.borderRadius = '20px';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none';
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
