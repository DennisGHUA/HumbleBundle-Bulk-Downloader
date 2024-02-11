// Improved version of: https://www.reddit.com/r/humblebundles/comments/8y1udw/script_i_created_to_download_multiple_humble/

// This script can be executed in the browser console.
// Make sure to set a default download folder beforehand to avoid download popups.


//desiredFormat = "PDF";
desiredFormat = "Download";


function waitASecond(i, listOfLinks){
    setTimeout(function(){
        if (i < listOfLinks.length){
            listOfLinks[i].click();
            forceDownload();
			i++;
            waitASecond(i, listOfLinks);
        } else{
            sleep(30000)
            console.log("Finished script.")
            alert("All " + listOfLinks.length + " download buttons have been pressed you can now close this tab.")
        }
 
    }, getRandomArbitrary(10000, 20000) // Using a low timeout prevents humble bundle from downloading the file
    )
}

function formatSorter(listOfLinks){

    completeListOfLinks = [];
 
    for(i = 0; i < listOfLinks.length; i++){
        if (listOfLinks[i].innerText == desiredFormat){
            completeListOfLinks.push(listOfLinks[i]);
        }
 
    }
    console.log(completeListOfLinks);
    waitASecond(0, completeListOfLinks);
}


// Force downloading
async function forceDownload() {
    await sleep(getRandomArbitrary(1000, 2000)); // Make sure popup is there
	let spans = document.getElementsByTagName("span");
	let forced=false;
	for(let i=0;i<spans.length;i++)
	{
		if (spans[i].innerHTML == "Download anyway") {
			console.log("Forcing download")
			spans[i].click();
            forced=true;
		}
		if (spans[i].innerHTML == "Cancel") {
		    if (forced==true) {
                console.log("Closing popup")
                spans[i].click();
            } else {
		        alert("FATAL ERROR:58")
            }
		}
	}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


allLinks = document.querySelectorAll('a');

formatSorter(allLinks);