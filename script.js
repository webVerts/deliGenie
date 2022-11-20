var map = L.map('map').setView([13.0864,80.2644], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 7,
    maxZoom: 18,
    attribution: ' &copy; webGenie contributors  | DO NOT USE FOR ANY COMMERCIAL PURPOSES | Disclaimer  | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/* Add a custom default location for test purposes. Should be removed when used on live websites */
var marker = new L.Marker([13.0864,80.2644], 14);
marker.addTo(map);

var marker = new L.Marker([13.0864,80.2644], 14);
marker.addTo(map);

function PopupContent(outlet){
		
	var name = outlet.properties.name;
	var diet = outlet.properties.diet;
	var cuisine = outlet.properties.cuisine;
	var KM = (outlet.properties.radius)/1000;
	
	
	return `<div>
	<h4> ${name} </h1>
	<p> Diet: ${diet} </p>
	<p> Cuisine: ${cuisine} </p>
	<p> ${KM} KM Free delivery </p>
	<a href ="#"> Menu </a><br><br>
	<a href ="#"> Contact  </a>
	</div> `
	

	
}



function circle(outlet){
	
	op(outlet);
	
	
	
	
	function op(outlet){
	var theMarker = {};
	console.log(lat)
	
	
	var radius = outlet.properties.radius;
	var lat = outlet.geometry.coordinates[1];
	var lng = outlet.geometry.coordinates[0];
	
		if (theMarker != undefined) {
              map.removeLayer(theMarker);
			  
	};
			theMarker = L.circle([lat,lng], {radius: radius,color: '#c6993a', fillOpacity:0.00 
      }).addTo(map); 
			
	}
	
  function onEachFeature(feature, layer){
	layer.on('click', function (e) {
		 circle(feature);
		 layer.bindPopup(PopupContent(feature));
		
	});
	
}

var myIcon = L.icon({
	iconUrl: 'images/restaurant.png',
	iconSize:[30,40]
	
});

const hotelLayer = L.geoJSON(restaurantList, {
	onEachFeature: onEachFeature,
	//onEachFeature: onEachFeature1.
	pointToLayer: function(feature, latlng) {
		return L.marker(latlng, {icon: myIcon});
		


}

	
});
hotelLayer.addTo(map)
	
}
