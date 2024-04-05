//How previous nnd next work
    const contents = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]; // Example content
    let currentIndex = 0;

    const displayElement = document.getElementById('displayContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Function to display content
    function displayContent(index) {
        displayElement.innerText = contents[index];
    }

    // Show the first content initially
    displayContent(currentIndex);

    // Event listener for Previous button
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            displayContent(currentIndex);
        }
    });

    // Event listener for Next button
    nextBtn.addEventListener('click', function() {
        if (currentIndex < contents.length - 1) {
            currentIndex++;
            displayContent(currentIndex);
        }
    });

