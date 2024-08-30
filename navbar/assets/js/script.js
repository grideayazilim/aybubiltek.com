/*============== değiştir burayı ==============*/
const activatorItem = document.querySelectorAll(".activator-item");

activatorItem.forEach((item) => {
  const openSubmenu = item.querySelector(".sublist");

  item.addEventListener("mouseover", () => {
    openSubmenu.style.height = openSubmenu.scrollHeight + "px";
  });

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
const blurDiv = document.getElementById("blur-div");
let isHomePage = "isHomePage";

//Check if the site is home page
document.getElementById("home-page") === null
  ? (isHomePage = false)
  : (isHomePage = true);

/*
  Navbar background color structure:

  At the top of the page:
    -->If user is in the homepage, transparent background.
    -->If not, white background.
  When scrolled:
    -->Blurred and translucent background.

  --------------------------------------------------------

  handleNavbarBackground implements the structure above.
*/
const handleNavbarBackground = () => {
  if (!isHomePage) navbar.classList.add("white-container");

  if (this.scrollY >= 50) {
    blurDiv.classList.remove("anti-blur");
    if (!isHomePage) navbar.classList.remove("white-container");
  } else {
    blurDiv.classList.add("anti-blur");
    if (!isHomePage) navbar.classList.add("white-container");
  }
};

window.addEventListener("scroll", handleNavbarBackground);
