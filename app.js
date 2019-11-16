// Google Map
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 6.524379, lng: 3.379206 },
    zoom: 8
  });
}

// Hamburger Menu

// const hamburgerButton = document
//   .getElementById("hamburger")
//   .addEventListener("click", hideList);

// function hideList() {
//   const navList = document.getElementById("nav-list");
//   if (navList.style.display === "none") {
//     navList.style.display === "grid";
//   } else {
//     navList.style.display === "none";
//   }
// }
