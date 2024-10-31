function initializeFooter() {
  /*============== REGISTER BUTTON ==============*/
  const button = document.querySelector(".button");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
      button.classList.remove("animate");
      window.open("https://linktr.ee/biltek?fbclid=PAZXh0bgNhZW0CMTEAAaZUw6dBiC783GX44EDVC7QFXCa66PbbcBXXVObG1_cAGl9YpV_TdQXmzcg_aem_MhP_wy2OsfAMjoMen1OH3Q", "_blank");
    }, 400);
  });

  function goPageTime() {
    setTimeout(() => window.alert("wdqwe"), 500);
  }

  /*============== SOCIAL BUTTON HOVER ==============*/
  const socialButtons = document.querySelectorAll(".social-media-button");

  socialButtons.forEach((button) => {
    const text = button.querySelector(".social-text");

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