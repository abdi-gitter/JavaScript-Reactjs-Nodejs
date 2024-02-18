// Function to display products
function displayProducts(products) {
    const sectionCenter = document.querySelector('.section-center');
    const productHtml = products.map(product => {
      return `<article class="product-item">
                <img src="${product.thumbnail}" alt="${product.title}" class="photo" />
                <div class="item-info">
                  <header>
                    <h4>${product.title}</h4>
                  </header>
                  <p class="item-text">${product.description}</p>
                  <h4 class="price">$${product.price}</h4>
                </div>
              </article>`;
    }).join('');
    sectionCenter.innerHTML = productHtml;
  }
  
  // Function to display category buttons
  function displayCategoryButtons(products) {
    const btnContainer = document.querySelector('.btn-container');
    const categories = ['all', ...new Set(products.map(product => product.category))];
    const categoryButtons = categories.map(category => {
      return `<button type="button" class="filter-btn" data-id="${category}">
                ${category}
              </button>`;
    }).join('');
    btnContainer.innerHTML = categoryButtons;
  }
  
  // Function to filter products by category
  function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
  
  // Initial setup
  document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    displayCategoryButtons(products);
  
    const btnContainer = document.querySelector('.btn-container');
    btnContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterProducts(e.target.dataset.id);
      }
    });
  });




  

/* document.addEventListener('DOMContentLoaded', () => {
    const sectionCenter = document.querySelector('.section-center');
    const btnContainer = document.querySelector('.btn-container');

    // Display products function
    function displayProducts(products) {
        let display = products.map((product) => {
            return `<article class="product-item">
                        <img src="${product.thumbnail}" alt="${product.title}" class="photo">
                        <div class="item-info">
                            <header>
                                <h4>${product.title}</h4>
                            </header>
                            <p class="item-text">${product.description}</p>
                            <h4 class="price">$${product.price}</h4>
                        </div>
                    </article>`;
        }).join('');
        sectionCenter.innerHTML = display;
    }

    // Display category buttons function
    function displayCategoryButtons(products) {
        const categories = ['all', ...new Set(products.map(product => product.category))];
        const categoryButtons = categories.map(category => {
            return `<button class="filter-btn" data-id="${category}">${category}</button>`;
        }).join('');
        btnContainer.innerHTML = categoryButtons;

        // Category filtering
        btnContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const category = e.target.dataset.id;
                const productCategory = category === 'all' ? products : products.filter(product => product.category === category);
                displayProducts(productCategory);
            }
        });
    }

    // Initial display of products and category buttons
    displayProducts(products); // Make sure 'products' variable is accessible
    displayCategoryButtons(products);
});
 */