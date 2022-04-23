let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#amber")

	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([103.864273, 1.282375])
		.addTo(map);

	var img2 = document.querySelector("#gateway")
	// Create a  Gateway of India, Mumbai Marker and add it to the map.
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([103.858528, 1.282302])
		.addTo(map);

	var img3 = document.querySelector("#gate")
	// Create a India Gate Marker and add it to the map.
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([103.815914, 1.313840])
		.addTo(map);


	var img4 = document.querySelector("#lotus")

	// Create a Lotus Temple, Delhi Marker and add it to the map.
	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([103.8238084, 1.2540421])
		.addTo(map);


	//Create a Victoria Memorial, Kolkata Marker and add it to the map.
	var img5 = document.querySelector("#victoria")

	var marker5 = new mapboxgl.Marker({
		element: img5
	})
		.setLngLat([103.763732273, 1.38476909091])
		.addTo(map);
}