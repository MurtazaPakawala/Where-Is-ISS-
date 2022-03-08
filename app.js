setInterval(getISS, 2000);
//   getISS();
const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
  const response = await fetch(
    "https://api.wheretheiss.at/v1/satellites/25544"
  );
  // console.log(response);
  const data = await response.json();
  console.log(data);
  latitude = data["latitude"];
  longitude = data["longitude"];
  console.log(longitude + " " + latitude);
  document.querySelector("#log").textContent = longitude;
  document.querySelector("#lat").textContent = latitude;
  initMap(longitude, latitude);
}
let map;

function initMap(lon, lat) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lon, lng: lat },
    zoom: 8,
  });
}

// console.log("hello everyone is this even working");
