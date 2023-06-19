
// function reload() {
// 	// $("#desktop-tab-content").load(location.href+" #desktop-tab-content>*","");
// 	location.href="index.sh.htm?checked_refresh=checked";
// 	// alert('Algumacoisa');
// };


const checkboxes = document.querySelectorAll('input[type="checkbox"].autoReload');

// Function to check and update the URLs
function checkAndUpdateURLs() {
    checkboxes.forEach(function(checkbox) {
        const url = checkbox.getAttribute('data-url');
        const param = checkbox.checked ? 'true' : 'false';
        sendRequest(url, function(response) {
			// Convert string response to boolean
			responseBool = response.includes("true") ? true : false;
            if (param != responseBool) {
				if (responseBool == true) {
					checkbox.checked = true;
				}
				if (responseBool == false) {
					checkbox.checked = false;
				}
            }
        });
    });
}

// Function to send the HTTP request
function sendRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}`);
    xhr.addEventListener('load', function() {
        const response = xhr.responseText;
        callback(response);
    });
	xhr.send();
}




// Check and update the URLs every 2 seconds
setInterval(checkAndUpdateURLs, 2000);
