// Google Map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 6.524379, lng: 3.379206 },
    zoom: 8
  });
}
