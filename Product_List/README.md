#  Project Task Document: Display Products with Category Filters

## Project Description

In this project, you will create a web page that displays a list of products retrieved from the `products.js` file. The page will include category buttons at the top, and when a category button is clicked, it will filter and display products belonging to that category. This project focuses on manipulating the DOM and dynamically rendering products based on user interaction.

## Project Skeleton

Your project should consist of the following components:

- `index.html`: The HTML file that includes the structure of the web page.
- `products.js`: The JavaScript file containing the product data.
- `script.js`: The JavaScript file for dynamic rendering and interactivity.
- CSS files for styling (optional).

## Tasks

### 1. HTML Structure

Create an `index.html` file with the necessary HTML structure, including placeholders for the products and category buttons. Ensure that the product items are organized within a container with the class `section-center`, and category buttons are within a container with the class `btn-container`.

### 2. Product Data

In the [products.js](./products.js) file you have all the data for every product. Have a look to the structure.

### 3. JavaScript Logic

In the `script.js` file, write JavaScript code to achieve the following:

#### 3.1. Display Products

Create a function `displayProducts(products)` that takes the product data and dynamically generates HTML markup for each product item. Append these product items to the `.section-center` container in the HTML.

#### 3.2. Extract Categories

Create a function `displayCategoryButtons(products)` that extracts all unique categories from the product data and generates category buttons dynamically. Append these buttons to the `.btn-container` in the HTML.

#### 3.3. Category Filtering

Add an event listener to each category button to listen for clicks. When a category button is clicked, filter the products based on the selected category and display the filtered products in the `.section-center` container. If the "All" button is clicked, display all products.

### 4. Styling (Optional)

You can add CSS styles to make your web page visually appealing. This step is optional but recommended for a polished project.

### 5. Testing

Test your web page by opening the `index.html` file in a web browser. Verify that the products are displayed, and category filtering works as expected.

## Additional Guides

- Document your code with comments for clarity.
- Ensure the web page is responsive and works on different screen sizes.
- You can enhance the user experience by adding animations or transitions (optional).
- Share the project with others for feedback and further improvements.
- You can check the deployed [sample app](https://cw-barry.github.io/Products-List/).

By completing this project, students will gain hands-on experience in manipulating the DOM and creating interactive web pages. It's a practical exercise to reinforce JavaScript skills and enhance their understanding of dynamic content rendering.

Good luck with your project, and don't hesitate to seek assistance or clarification on any tasks.
