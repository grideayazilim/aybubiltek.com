function initializeNavbar() {
  /*============== DROPDOWN MENU ==============*/
  const activatorItem = document.querySelectorAll(".activator-item");

  activatorItem.forEach((item) => {
    const openSubmenu = item.querySelector(".sublist");

    // Show dropdown menu
    item.addEventListener("mouseover", () => {
      openSubmenu.style.height = openSubmenu.scrollHeight + "px";
    });

    // Hide dropdown menu
    item.addEventListener("mouseout", () => {
      openSubmenu.removeAttribute("style");
    });
  });

  /*============== TOGGLE MENU ==============*/
  const closeButton = document.querySelector(".nav-close");
  const toggleButton = document.querySelector(".nav-toggle");
  const toggleMenu = document.querySelector(".nav-menu");

  // Show menu
  toggleButton.addEventListener("click", () => {
    toggleMenu.classList.add("show-menu");
  });

  // Close menu
  closeButton.addEventListener("click", () => {
    toggleMenu.classList.remove("show-menu");
  });

  /*============== BLUR AND WHITEN NAVBAR ==============*/
  const navbar = document.querySelector("nav");
  const blurDivs = document.querySelectorAll(".blur-div");
  let isHomePage = "isHomePage";

  /*
  Navbar and dropdown menus have 3 classes:
  1-) 'blur-div'
  2-) 'anti-blur'
  3-) 'blur-container'

  Here is the summary of the algorithm: 'blur-div' is to sign and
  select the elements that needs to be blurred. 'blur-container' is 
  always active on these elements and 'anti-blur' is used to deactivate
  the features provided by 'blur-container'. This process is done to 
  add and remove blur effect smoothly.

  After the logic above, navbar background color structure is as follows:
  ->At the top of the page:
      -->Deactivate blur always
      -->If user is not in the home page, add white background (white-container)
  ->When scrolled:
      -->Activate blur and remove white background

  --------------------------------------------------------

  handleNavbarBackground implements the structure above.
  */

  document.getElementById("home-page") === null
    ? (isHomePage = false)
    : (isHomePage = true);

  // Handle navbar background color
  const handleNavbarBackground = () => {
    console.log(document.getElementById("home-page"));
    // Get scroll position
    if (!isHomePage) navbar.classList.add("white-container");

    if (window.scrollY >= 50) {
      blurDivs.forEach((blurDiv) => blurDiv.classList.remove("anti-blur"));

      if (!isHomePage) navbar.classList.remove("white-container");
    } else {
      blurDivs.forEach((blurDiv) => blurDiv.classList.add("anti-blur"));
      if (!isHomePage) navbar.classList.add("white-container");
    }
  };

  window.addEventListener("scroll", handleNavbarBackground);

  document.addEventListener("DOMContentLoaded", handleNavbarBackground);

  // interesting
  if (!document.getElementById("home-page")) {
    handleNavbarBackground();
  }

  /*============== NAVIGATE TO TEAM SUBPAGE ==============*/
  const navigateToTeams = (teamId) =>
    sessionStorage.setItem("selectedTeamId", teamId);
}

// document.addEventListener("DOMContentLoaded", (event) => {
//   initializeNavbar();
//   window.addEventListener("scroll", () => {
//     console.log("Scroll Y:", window.scrollY);
//   });
// });
