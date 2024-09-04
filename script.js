
// JavaScript for graceful degradation 
document.addEventListener("DOMContentLoaded", function() {
    // Check if the browser supports JavaScript
    if (typeof document.querySelector === 'function') {
        // JavaScript is supported, enhance functionality here 
        const searchForm = document.getElementById("search-form");
        
        searchForm.addEventListener("submit", function(event) {
            // Perform advanced search functionality using AJAX or fetch API
            // Prevent the form from submitting normally
            event.preventDefault();
        }); 
    } else {
        // JavaScript is not supported or disabled, provide basic functionality 
        // For example, the form will submit and trigger a server-side search
    }
});



