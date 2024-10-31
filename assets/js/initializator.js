/* =============== SCROLL REVEAL INITIALIZATION =============== */
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2500,
  delay: 0,
  // reset: true, // Animations repeat
});

/*============== NAVBAR & FOOTER INITIALIZATION ==============*/
fetch("/navbar/index.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    initializeNavbar();
    if (document.getElementById("home-page")) {
      document.querySelector("nav").classList.add("load-hidden");
      sr.reveal(`nav`);
    }
  })
  .catch((error) => console.error("Error loading navbar:", error));

fetch("/footer/index.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
    initializeFooter();
  })
  .catch((error) => console.error("Error loading footer:", error));