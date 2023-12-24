function initMap() {
  var myLatLng = { lat: -6.133969, lng: 106.733392 }; // Ganti dengan koordinat yang diinginkan
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "My Map",
  });
}
