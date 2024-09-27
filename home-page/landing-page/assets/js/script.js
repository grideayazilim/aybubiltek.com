// Change background image based on window width
function changeImage() {
  var bgImage = document.getElementsByClassName("bg-img")[0];
  if (window.innerWidth <= 1100) {
    console.log(window.innerWidth);
    bgImage.src = "/assets/media/bg-logo-dik.png";
  } else {
    bgImage.src = "/assets/media/bg-logo.png";
  }
}

// Call changeImage on page load and window resize
window.onload = changeImage;
window.onresize = changeImage;

// Fetch and insert navbar HTML, then initialize it
fetch("/navbar/index.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    initializeNavbar();
  })
  .catch((error) => console.error("Error loading navbar:", error));
