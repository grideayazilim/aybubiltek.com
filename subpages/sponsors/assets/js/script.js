/*============== REALIGNING SPONSORS ==============*/
const parent = document.querySelector(".white-container");
const goldContainer = document.getElementById("gold");
const silverContainer = document.getElementById("silver");

// When divs are sorted one under the other, bring the golden div to the top
const realignSponsors = () => {
  if (window.innerWidth <= 1200) parent.insertBefore(goldContainer, silverContainer);
  else parent.insertBefore(silverContainer, goldContainer);
};

window.addEventListener("resize", realignSponsors);
window.addEventListener("load", realignSponsors);

/* =============== SCROLL REVEAL ANIMATION =============== */
sr.reveal(`.title-area`);
sr.reveal(`.division`, { delay: 700, interval: 700 });