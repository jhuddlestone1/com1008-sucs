/*	background.js
*
*	COM1008 Web and Internet Technology
*	Assignment 1
*
*	Michael Gardiner & Jamie Huddlestone
*/

// Interactive backgrounds... because! - Jamie
(function () {
	
	// Only bother with this if the page is being loaded with CSS files...
	if (document.styleSheets.length) {
		
		var textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
		
		document.body.addEventListener("mousemove", function (event) {
			
			// 'Flashlight' the body background according to the mouse position...
			this.style.backgroundImage = (
				"radial-gradient(circle at "+ event.clientX +"px "+ event.clientY +"px, transparent, black"
			);
			
			// and add shadows! :)
			for (var i = 0; i < textElements.length; i++) {
				
				var e = textElements[i];
				var eRect = e.getBoundingClientRect();
				
				var diffX = eRect.left + eRect.width/2 - event.clientX;
				var diffY = eRect.top + eRect.height/2 - event.clientY;
				
				// Not perfectly realistic, but good enough...
				var blur = Math.pow(Math.pow(diffX, 2) + Math.pow(diffY, 2), 0.25);
				var shadowX = diffX / blur;
				var shadowY = diffY / blur;
					
				e.style.textShadow = (
					shadowX +"px "+ shadowY +"px "+ blur +"px rgba(0, 0, 0, 0.5)"
				);
			}
			
		});
	}
	
})();