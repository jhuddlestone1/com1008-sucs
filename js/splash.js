/*	splash.js
*
*	COM1008 Web and Internet Technology
*	Assignment 1
*
*	Michael Gardiner & Jamie Huddlestone
*/

// Apply event handler to splash screen lock widget
(function () {
	
	var widget = document.getElementById("lock_widget");
	widget.addEventListener("click", update);
	
	function update() {
		
		var lock = widget.querySelector(".lock");							// Element containing image of lock
		
		this.style.textShadow = "none";										// Remove text shadows
		this.style.color = "rgba(255, 255, 255, 0)";						// Set text to transparent
		lock.style.left = "84%";											// Set lock icon to move to the right
		setTimeout(function () { lock.classList.add("unlocked") }, 300);	// Duration to match the CSS transition
		setTimeout(function () { location.replace("home.html") }, 500);		// Forward to home page after 500ms
	}
	
})();