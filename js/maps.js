/*	maps.js
*
*	COM1008 Web and Internet Technology
*	Assignment 1
*
*	Michael Gardiner & Jamie Huddlestone
*/

// Following code based on the Leaflet API Quick Start Guide: https://leafletjs.com/examples/quick-start/
(function () {
	
	// Set up the map
	var map = new L.Map('map');
	
	// Parameters
	var MIN_ZOOM = 5;
	var MAX_ZOOM = 18;	/* maximum 18 */
	var INITIAL_ZOOM = 16;
	var DEFAULT_COORDS = [53.3808,-1.4875];		/* Sheffield SU! */
	
	// Create the tile layer with correct attribution
	var tileURL='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
	var tileAttrib='Map tiles by '+
			'<a href="https://carto.com/location-data-services/basemaps/">Carto</a>, '+
			'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. '+
			'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, '+
			'under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.';
	var tile = new L.TileLayer(tileURL, {minZoom: MIN_ZOOM, maxZoom: MAX_ZOOM, attribution: tileAttrib});		

	// Map will show Student's Union location by default
	map.setView(DEFAULT_COORDS, INITIAL_ZOOM);
	map.addLayer(tile);
	var marker = L.marker(DEFAULT_COORDS).addTo(map);
	marker.bindPopup(
		"<b>Sheffield Students' Union</b><br>"+
		"Western Bank<br>"+
		"Sheffield<br>"+
		"S10 2AT"
	);	
	getLocation();

	// Gets current location of user
	function getLocation() {
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
			
				// success
				function (position) {
					route(position.coords.latitude, position.coords.longitude);
				},
				
				// error
				function (error) {
					console.log("Geolocation is not currently enabled by this browser.");
				}
			);
			return true;
		}
		else {
			console.log("Geolocation is not supported by this browser.");
			return false;
		}
	}

	function route(lat, lon) {
		
		/*
			CALLS TO DEMO SERVER MAY NOT WORK DUE
			 TO RESTRICTIONS ON SERVER REQUESTS
		*/
			
		// Routing between SU and current location
		L.Routing.control({
			waypoints: [
				[lat, lon],
				DEFAULT_COORDS
			]
		}).addTo(map);
		
		map.fitBounds([
			[lat, lon],
			DEFAULT_COORDS
		]);	
	}

})();