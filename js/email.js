/*	email.js
*
*	COM1008 Web and Internet Technology
*	Assignment 1
*
*	Michael Gardiner & Jamie Huddlestone
*/

// Insert email address as value to form field with id="email_address"
(function () {
	
	// Some base64 trickery to throw off the robots!
	var EMAIL_ADDRESSES = {
		"Jamie":	"amh1ZGRsZXN0b25lMUBzaGVmZmllbGQuYWMudWs=",
		"Michael":	"bWdhcmRpbmVyMUBzaGVmZmllbGQuYWMudWs="
	};
	
	var email = document.getElementById("email_address");
	email.value = atob(EMAIL_ADDRESSES.Jamie);
	
})();