function submitProduct() {
    // Get form values
    const productName = document.getElementById("productName").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const productImage = document.getElementById("productImage").files[0];
  
    if (!productImage) {
      alert("Please upload an image for the product.");
      return false;
    }
  
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageUrl = event.target.result;
  
      // Create product object
      const product = {
        productName,
        description,
        category,
        price,
        imageUrl
      };
  
      // Fetch existing products from localStorage or initialize an empty array
      let products = JSON.parse(localStorage.getItem("cartProducts")) || [];
      products.push(product);
  
      // Save updated products array back to localStorage
      localStorage.setItem("cartProducts", JSON.stringify(products));
  
      // Add product to the display list
      displayProduct(product);
  
      // Reset the form after submission
      document.getElementById("productForm").reset();
    };
    
    reader.readAsDataURL(productImage);
  
    return false; // Prevent actual form submission
  }
  
  function displayProduct(product) {
    const productList = document.getElementById("productDisplay");
    const listItem = document.createElement("li");
  
    listItem.innerHTML = `
      <strong>${product.productName}</strong> - ₹${product.price} <br>
      <em>Category:</em> ${product.category} <br>
      <p>${product.description}</p>
      <img src="${product.imageUrl}" alt="${product.productName}" width="100" style="border-radius: 5px; margin-top: 5px;">
    `;
    
    productList.appendChild(listItem);
  }
  
  