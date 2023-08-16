const productContainer = document.querySelector(".product-container");
const categoryFilter = document.querySelector("#category-filter"); 
let products = []; 

async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
}

function displayProducts(category) {
    productContainer.innerHTML = "";
    products.forEach(product => {
        if (!category || product.category === category) { 
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const productImage = document.createElement("img");
            productImage.src = product.thumbnail;
            productImage.alt = product.title;

            const productTitle = document.createElement("h2");
            productTitle.classList.add("product-title");
            productTitle.textContent = product.title;

            const productPrice = document.createElement("p");
            productPrice.classList.add("product-price");
            productPrice.textContent = `$${product.price}`;

            const productDescription = document.createElement("p");
            productDescription.classList.add("product-description");
            productDescription.textContent = product.description;

            const productRating = document.createElement("p");
            productRating.classList.add("product-rating");
            productRating.textContent = `Rating: ${product.rating.toFixed(2)}`;

            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);
            productCard.appendChild(productDescription);
            productCard.appendChild(productRating);

            productContainer.appendChild(productCard);
        }
    });
}

categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;
    displayProducts(selectedCategory);
});

async function init() {
    await fetchProducts();

}

init();
