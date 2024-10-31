/* =============== SCROLL REVEAL ANIMATION =============== */
sr.reveal(`.title-area`);
sr.reveal(`.big-title`, { delay: 300 });
sr.reveal(`.member-card`, {
  delay: 400,
  interval: 450,
  duration: 2000,
  afterReveal: function () {
    document.querySelectorAll(".member-card").forEach((memberCard) => {
      memberCard.style.transition = "box-shadow 0.3s, transform 0.3s linear";

      memberCard.addEventListener("mouseover", function () {
        memberCard.classList.add("hovered");
      });
      memberCard.addEventListener("mouseout", function () {
        memberCard.classList.remove("hovered");
      });
    });
  },
});
