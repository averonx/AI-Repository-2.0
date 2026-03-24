%%javascript
// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the search input and all tool cards
    const searchInput = document.getElementById('searchInput');
    // Select all elements that have the class 'tool-card'
    const toolCards = document.querySelectorAll('.tool-card');

    // 2. Add an event listener to the search input
    // The 'input' event fires whenever the value of an <input>, <select>, or <textarea> element has been changed.
    searchInput.addEventListener('input', function() {
        // 3. Get the current search term from the input field
        // .value gets the current text in the input.
        // .toLowerCase() converts it to lowercase for case-insensitive searching.
        const searchTerm = searchInput.value.toLowerCase();

        // 4. Iterate over each tool card
        toolCards.forEach(card => {
            // Get the text content of the entire card
            // .textContent gets all the text inside the element and its children.
            const cardText = card.textContent.toLowerCase();

            // Check if the card's text contains the search term
            // .includes() returns true if the search term is found, false otherwise.
            if (cardText.includes(searchTerm)) {
                // If it includes the search term, display the card
                card.style.display = ''; // Reset to default display (e.g., 'block' or 'flex')
            } else {
                // If it doesn't include the search term, hide the card
                card.style.display = 'none';
            }
        });
    });
});
