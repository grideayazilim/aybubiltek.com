function initializeFooter() {
  /*============== REGISTER BUTTON ==============*/
  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
      button.classList.remove("animate");
    }, 400);
  });

  function goPageTime() {
    setTimeout(() => window.alert("wdqwe"), 500);
  }

  /*============== SOCIAL BUTTON HOVER ==============*/
  const socialButtons = document.querySelectorAll(".social-media-icon");

  socialButtons.forEach((button) => {
    const text = button.querySelector(".social-text");
    console.log(text.scrollWidth);

    // Show dropdown menu
    button.addEventListener("mouseover", () => {
      text.style.width = text.scrollWidth + "px";
    });

    // Hide dropdown menu
    button.addEventListener("mouseout", () => {
      text.removeAttribute("style");
    });
  });
}