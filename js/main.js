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

// sticky menu background
window.addEventListener("scroll", function() {
  // if scroll is past 150 length select style on navbar through id and change opacity
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.7;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// smooth scroll
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        // .top - 65 <-- scroll -65 from the section start
        scrollTop: $(hash).offset().top - 65
      },
      650
    );
  }
});
