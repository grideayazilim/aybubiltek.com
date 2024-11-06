/* =============== SCROLL REVEAL ANIMATION =============== */
document.addEventListener("DOMContentLoaded", () => {
  sr.reveal(`.title-area`);
  sr.reveal(`.team-card`, {
    delay: 300,
    interval: 400,
    afterReveal: function (el) {
      el.style.transition = "box-shadow 0.3s, transform 0.3s linear";

      el.addEventListener("mouseover", function () {
        el.classList.add("hovered");
      });
      el.addEventListener("mouseout", function () {
        el.classList.remove("hovered");
      });
    },
  });
});
