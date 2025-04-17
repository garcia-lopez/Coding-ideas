import { markers } from './js/MarkersNoPics.js';
import { markersWithPics } from './js/MarkersWithPics.js';

var map = L.map('map').setView([12.1403630,-86.2234044042226], 17);
// Initialize the map with the default layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

new L.Control.Scale({
    imperial: false, 
    position: 'bottomright' 
}).addTo(map);
// Define the polygon coordinates
var polygon = L.polygon([
    [12.1423, -86.2244], // Northwest corner
    [12.1425, -86.2241], // Northwest corner
    [12.1425, -86.2241], // Northwest corner
    [12.1422, -86.2230],
    [12.1417, -86.2210], // Northeast corner (moved further right)
    [12.1384, -86.2210], // Southeast corner (moved further right)
    [12.1384, -86.2275]  // Southwest corner 
], {
    color: '#C4742C',       // Border color
    fillColor: 'lightblue', // Fill color
    fillOpacity: 0.5     // Transparency
}).addTo(map);

//Adding Mini map
// Tile layer for the MiniMap
let miniMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 13,
    attribution: '&copy; OpenStreetMap contributors'
});

// MiniMap control
let miniMap = new L.Control.MiniMap(miniMapLayer, {
    toggleDisplay: true,
    minimized: false,
    position: 'bottomright',
    width: 85,  // Set smaller width
    height: 85, // Set smaller height
    
}).addTo(map);

//Adding markers with pics
for (const i in markersWithPics) { //`String text ${expression}` is called a template literal
    L.marker(markersWithPics[i].coords, {icon: markersWithPics[i].icon}).addTo(map).bindPopup(`<img src=${markersWithPics[i].pic} width="100" height="100">`);
}

//Adding markers with no pics
for (const i in markers) {
    L.marker(markers[i].coords, {icon: markers[i].icon}).addTo(map);
}
//Adding the location button
 document.addEventListener('DOMContentLoaded', function() { 
    const locationButton = document.getElementById("location");
    if (locationButton) {
        locationButton.addEventListener("click", function () {
            if (map && typeof map.flyTo === "function") {
                map.flyTo([12.1403630,-86.2234044042226], 17);
            } else {
                console.error("map or flyTo function not defined");
            }
        });
    } else {
        console.error("location element not found");
    }
  } )





//var myIcon = L.icon({
//    iconUrl: 'assets/bote-de-basura.png',
//    iconSize: [32, 32],
//});

//L.marker([12.1389, -86.2250], {icon: myIcon}).addTo(map);