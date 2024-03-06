
// Fetch products data from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const products = await response.json();

        // Filters and Transformations
        const productsUnder50 = products.filter(product => product.price < 50);
        console.log('Products under $50:', productsUnder50);

        const productsOver4Rating = products.filter(product => product.rating.rate > 4);
        console.log('Products with rating over 4:', productsOver4Rating);

        // Assuming a specific category for demonstration. Replace 'electronics' with any desired category.
        const filterCategory = 'electronics';
        const productsByCategory = products.filter(product => product.category === filterCategory);
        console.log(`Products in the ${filterCategory} category:`, productsByCategory);

        const categories = [...new Set(products.map(product => product.category))];
        console.log('List of categories:', categories);

        // Assuming a search keyword for demonstration.
        const searchKeyword = 'jacket';
        const searchedProducts = products.filter(product => product.title.toLowerCase().includes(searchKeyword.toLowerCase()));
        console.log(`Products that match the search "${searchKeyword}":`, searchedProducts);

        const productPrice15_99Index = products.findIndex(product => product.price === 15.99);
        console.log(`Index of the product with price $15.99:`, productPrice15_99Index);

        // Generate HTML cards for products
        const productsContainer = document.getElementById('main');
        productsContainer.innerHTML = products.map(product => generateProductCard(product)).join('');

    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}

// Function to generate HTML for a single product card
function generateProductCard(product) {
    return `
        <div class="card" style="width: 18rem; margin: 10px;">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text"><small class="text-muted">$${product.price}</small></p>
                <p class="card-text">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
            </div>
        </div>
    `;
}

// Call fetchProducts on script load
fetchProducts();

