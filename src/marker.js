
const mapboxgl = require('mapbox-gl');
module.exports = makeMarker;


function makeMarker (type, coordinatesArray) {
  let url = "";

  if(type === 'activity') {
    url = 'http://i.imgur.com/WbMOfMl.png';
  }
  else if(type === 'hotel') {
    url = 'http://i.imgur.com/D9574Cu.png';
  }
  else if(type === 'restaurant') {
    url = 'http://i.imgur.com/cqR6pUI.png';
  }
  const markerDiv = document.createElement('div');
  markerDiv.style.width = "32px";
  markerDiv.style.height = "39px";
  markerDiv.style.backgroundImage = `url(${url})`;
  return new mapboxgl.Marker(markerDiv).setLngLat(coordinatesArray);
}

