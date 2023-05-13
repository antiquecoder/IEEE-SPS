const products = [
    {
      name: "Product 1",
      price: 10.99,
      image: "	https://m.media-amazon.com/images/I/51Q8DUDT2eL._AC._SR360,460.jpg"
    },
    {
      name: "Product 2",
      price: 19.99,
      image: "https://m.media-amazon.com/images/I/61b91WUDxmL._AC._SR360,460.jpg"
    },
    {
      name: "Product 3",
      price: 19.99,
      image: "https://m.media-amazon.com/images/I/61gPyXlv5UL._AC._SR360,460.jpg"
    },
    {
      name: "Product 4",
      price: 19.99,
      image: "	https://m.media-amazon.com/images/I/61US9yCTRJL._AC._SR360,460.jpg"
    },
  
    // Add more products...
  ];
  
    // Render products on the page
    const productsSection = document.getElementById("products");
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
    
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productElement.appendChild(productImage);
    
      const productName = document.createElement("h3");
      productName.innerText = product.name;
      productElement.appendChild(productName);
    
      const productPrice = document.createElement("p");
      productPrice.innerText = "$" + product.price;
      productElement.appendChild(productPrice);
    
      const addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Add to Cart";
      addToCartButton.addEventListener("click", () => {
        addToCart(product);
      });
      productElement.appendChild(addToCartButton);
    
      productsSection.appendChild(productElement);
    });
    
    // Add a product to the cart
    function addToCart(product) {
      const cartItems = document.getElementById("cart-items");
      const cartItem = document.createElement("li");
      cartItem.innerText = product.name + " - $" + product.price;
      cartItems.appendChild(cartItem);
    }