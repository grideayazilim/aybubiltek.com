/* =============== SCROLL REVEAL ANIMATION =============== */
sr.reveal(`.title-area`);
sr.reveal(`.team-card`, {
  delay: 300,
  interval: 400,
  afterReveal: function () {
    document.querySelectorAll(".team-card").forEach((teamCard) => {
      teamCard.style.transition = "box-shadow 0.3s, transform 0.3s linear";
      teamCard.addEventListener("mouseover", function () {
        teamCard.classList.add("hovered");
      });
      teamCard.addEventListener("mouseout", function () {
        teamCard.classList.remove("hovered");
      });
    });
  },
});
