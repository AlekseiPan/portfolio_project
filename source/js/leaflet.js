/* global L:readonly */
const map = L.map("map").setView(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  250
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mapPinIcon = L.icon({
  iconUrl: "../img/map-pin.png",
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mapPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mapPinIcon,
  }
);

mapPinMarker.addTo(map);
