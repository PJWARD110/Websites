/* 
   Lakeland Reeds Bed and Breakfast menu toggle script 
   Filename: script.js
   HTML5 and CSS3 Illustrated Unit I, Skills Review
 */

var submitButton = document.querySelector(".submitbutton");
var form = document.querySelector(".contact-form");

/* show button when form filled out */
function showSubmitButton() {
	if (form.checkValidity() === true) {
		submitButton.className = "submitbutton show";
	}
}

/* create event listener for changes to form */
form.addEventListener("change",showSubmitButton, false);
