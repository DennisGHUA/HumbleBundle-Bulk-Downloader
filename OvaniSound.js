// This script can be executed in the browser console.
// Make sure to set a default download folder beforehand to avoid download popups.
// Execute this code on "Downloads and Order Confirmation" page. After the orders have loaded.
// It should download each item with a 10 second delay between them.

// Get all parent elements with the class name "sdd-checkout-item"
var parentElements = document.getElementsByClassName("sdd-checkout-item");

// Function to click the second child <a> element with a delay
function clickSecondLinkWithDelay(parentElements, index) {
    if (index < parentElements.length) {
        // Get all child <a> elements within the parent element
        var childLinks = parentElements[index].getElementsByTagName("a");
        
        // Check if there is a second <a> element
        if (childLinks.length > 1) {
            // Click the second <a> element
            childLinks[1].click();
        }
        
        // Move to the next parent element after a 10-second delay
        setTimeout(function() {
            clickSecondLinkWithDelay(parentElements, index + 1);
        }, 10000); // 10 seconds delay
    }
}

// Start clicking the second <a> elements with a delay, starting from the first parent element (index 0)
clickSecondLinkWithDelay(parentElements, 0);
