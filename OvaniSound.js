// This script can be executed in the browser console.
// Make sure to set a default download folder beforehand to avoid download popups.
// Execute this code on the "Downloads and Order Confirmation" page after the orders have loaded.
// It will download each item with a random delay between 30 and 40 seconds.

// Get all parent elements with the class name "dda-order__asset-link"
var assetLinkElements = document.getElementsByClassName("dda-order__asset-link");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to click the <a> element with a delay
function clickDownloadLinkWithDelay(assetLinkElements, index) {
    if (index < assetLinkElements.length) {
        // Find the <a> tag within the current element
        var downloadLink = assetLinkElements[index].getElementsByTagName("a")[0];

        // Check if a download link exists
        if (downloadLink) {
            console.log("Downloading (" + (index + 1) + "/" + assetLinkElements.length + "): " + downloadLink.href);
            downloadLink.click();
        }

        var delay = getRandomArbitrary(30000, 40000);

        console.log("Waiting " + delay + " milliseconds before downloading the next item...");

        // Move to the next asset link element after the delay
        setTimeout(function() {
            clickDownloadLinkWithDelay(assetLinkElements, index + 1);
        }, delay);
    } else {
        console.log("Finished script.");
        alert("All " + assetLinkElements.length + " download buttons have been pressed. You can now close this tab.");
    }
}

// Start clicking the download links with a delay, starting from the first asset link (index 0)
clickDownloadLinkWithDelay(assetLinkElements, 0);
