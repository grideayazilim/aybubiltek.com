/*============== NAVBAR INITIALIZATION ==============*/
fetch("/navbar/index.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    initializeNavbar();
  })
  .catch((error) => console.error("Error loading navbar:", error));

fetch("/footer/index.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
    initializeFooter();
  })
  .catch((error) => console.error("Error loading footer:", error));