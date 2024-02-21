/* beginning of a script designed to run once the DOM (Document Object Model) is fully loaded. 
This is a common approach to ensure that all HTML elements are fully loaded and accessible via 
JavaScript 

document.addEventListener('DOMContentLoaded', function() {...}); 
adds an event listener that waits for the DOMContentLoaded event. 
This event fires when the initial HTML document has been completely 
loaded and parsed, without waiting for stylesheets, images, 
and sub frames to finish loading. This is the point where it's 
safe to manipulate the DOM because all elements are available.

const slides = document.querySelectorAll('.slide'); uses the 
document.querySelectorAll method to select all elements with 
the class .slide. This returns a NodeList containing all the slide
 elements found in the document. These elements are likely individual 
 items in a slideshow or carousel.
 
 let currentIndex = 0; declares a variable named currentIndex and 
 initializes it to 0. This variable is used to track the current active 
 slide in the slideshow.
 
 The purpose of this setup is to prepare for implementing slideshow functionality, 
 such as changing slides automatically or in response to user input 
 (e.g., clicking next/previous buttons). The slides NodeList will be 
 used to access and modify slide elements, and currentIndex will be 
 updated to reflect the currently visible slide.*/

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0; // Track the current slide

    // Function to update slides visibility
    function updateSlides(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Show the first slide initially
    updateSlides(currentIndex);

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Cycle to the first slide if at the end
        updateSlides(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Cycle to the last slide if at the beginning
        updateSlides(currentIndex);
    }

    // Attach event listeners to buttons
    document.getElementById('right').addEventListener('click', nextSlide);
    document.getElementById('left').addEventListener('click', prevSlide);
});


/* 


The `updateSlides` function you've provided is designed to control the visibility 
of slides in a slideshow by adding or removing the `active` class based on the index 
of the current slide. Here's a step-by-step explanation of how it works:

1. **Parameter**: The function takes one parameter, `index`, which is intended to 
be the index of the slide that should be displayed as active.

2. **Looping Through Slides**: The function uses `slides.forEach((slide, i) => { ... });` 
to loop through all slide elements. For each slide, it performs the following actions:
   - `slide.classList.remove('active');` This line removes the `active` class from 
   the current slide element in the loop. The `active` class is assumed to control the 
   visibility or styling of the slide, making it visible when present and hidden when absent.
   - `if (i === index) { slide.classList.add('active'); }` This conditional statement
    checks if the current slide's index (`i`) matches the `index` parameter passed to 
    the function. If it does, the `active` class is added to this slide, making it the 
    currently visible slide.

3. **Effect**: The result of running this function is that all slides will have the 
`active` class removed, effectively hiding them or making them inactive, except for 
the slide at the specified `index`, which becomes the active (visible) slide.

This function is a critical part of slideshow functionality, allowing you to change 
which slide is visible based on user interaction (e.g., clicking next/previous buttons) 
or automatic slideshow progression. The `index` parameter enables you to select any 
slide in the sequence to be displayed, providing flexibility in controlling the 
slideshow's behavior.*/