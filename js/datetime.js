/*	datetime.js
*
*	COM1008 Web and Internet Technology
*	Assignment 1
*
*	Michael Gardiner & Jamie Huddlestone
*/

// Fill elements with class 'date' or 'time' with relevant text
(function () {
	
	var DAYS = [
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	];
	var MONTHS = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	
	var timeElements = document.querySelectorAll(".time");
	var dateElements = document.querySelectorAll(".date");
	var date = new Date();
	
	function update() {
		
		// Update the time held by the date object
		date.setTime(Date.now());
		
		var hours = date.getHours();		
		var minutes = date.getMinutes();
		// Add leading zeros if required
		if (hours < 10) hours = "0"+ hours;
		if (minutes < 10) minutes = "0"+ minutes;
		
		var currentTime = hours +":"+ minutes;
		var currentDate = (
			DAYS[date.getDay()] +" "+
			date.getDate() +" "+
			MONTHS[date.getMonth()]
		);
		
		for (i = 0; i < timeElements.length; i++) {
			timeElements[i].innerHTML = currentTime;
		}
		
		for (i = 0; i < dateElements.length; i++) {
			dateElements[i].innerHTML = currentDate;
		}
	}
	
	// Initialise time and date elements
	update();
	
	// After however many seconds are left in the current minute,
	// update once more, and use setInterval to update every 60 seconds thereafter.
	setTimeout(
	
		function () {
			update();
			setInterval(update, 60000);
		},
		
		(60 - date.getSeconds()) * 1000
	);
	
})();

