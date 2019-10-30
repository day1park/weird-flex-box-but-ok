// initialize and add the map
function initMap() {
  // your location
  const loc = { lat: -33.854522, lng: 151.209691 };

  // centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  // the marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// smooth scroll
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      650
    );
  }
});
