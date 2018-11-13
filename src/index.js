const mapboxgl = require('mapbox-gl');
const makeMarker = require('./marker.js')

mapboxgl.accessToken =
  'pk.eyJ1IjoiYnJ5bm4iLCJhIjoiY2o4bzd5bTkxMDBlMzJ3bzNrcjR3ZG9rdCJ9.nBAzCA8QfCROI6eBLf-dxA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});


const markerDiv = document.createElement('div');
markerDiv.style.width = "32px";
markerDiv.style.height = "39px";
markerDiv.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
console.log(map.center);

makeMarker('hotel', [-74.009, 40.705]).addTo(map);
