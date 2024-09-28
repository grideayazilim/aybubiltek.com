/*============== NAVBAR INITIALIZATION ==============*/
fetch("/navbar/index.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    initializeNavbar();
  })
  .catch((error) => console.error("Error loading navbar:", error));