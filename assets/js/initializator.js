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
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    initializeNavbar();

    // Animate navbar items
    /*
      inner items are animated instead of nav itself due to not to 
      lose backdrop-filter on load
    */ 
    if (document.getElementById("home-page")) {
      document.querySelectorAll(".reveal-nav").forEach(revealItem => {
        revealItem.classList.add("load-hidden");
      });;
      sr.reveal(`.reveal-nav`);
    }
  })
  .catch((error) => console.error("Error loading navbar:", error));

fetch("/footer/index.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
    initializeFooter();
  })
  .catch((error) => console.error("Error loading footer:", error));
