/*============== ben de bilmiyom ==============*/
const activatorItem = document.querySelector(".activator-item");
const openSubmenu = activatorItem.querySelector(".sublist");

// Use closures to pass `openSubmenu` to the event handlers
activatorItem.addEventListener("mouseover", () => {
  openSubmenu.style.height = openSubmenu.scrollHeight + "px";
});

activatorItem.addEventListener("mouseout", () => {
  openSubmenu.removeAttribute("style");
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
