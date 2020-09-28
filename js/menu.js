/*	menu.js
*
*	COM1008 Web and Internet Technology
*	Assignment 1
*
*	Michael Gardiner & Jamie Huddlestone
*/

// Drop-down menu behaviour
(function () {

	var menu = document.getElementById("menu");
	var menuList = menu.querySelector("ul");
	
	// Allows tab navigation by making the menu visible when it has keyboard focus
	menuList.addEventListener("focus", function () { menuList.style.transform = "scaleY(1)"; }, true);
	menuList.addEventListener("blur", function () { menuList.style.transform = "scaleY(0)"; }, true);

	menu.addEventListener("click", function () {
		
		// Detect the current visibility of the menu's <ul> element
		var isHidden = menuList.style.transform == "scaleY(0)" || menuList.style.transform == "";
		
		// Extend <ul> to full height if currently hidden; collapse if currently visible
		isHidden ? menuList.focus() : menuList.blur();
	});
	
})();