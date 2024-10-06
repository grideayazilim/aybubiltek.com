/*===================||| LANDING PAGE |||===================*/
/*============== REALIGNING CONTENT ==============*/
const boxParent = document.querySelector(".container");
const leftBox = document.querySelector(".left-box");
const rightBox = document.querySelector(".right-box");

// When divs are sorted one under the other, bring the golden div to the top
const realignContent = () => {
  if (window.innerWidth <= 1300) boxParent.insertBefore(rightBox, leftBox);
  else boxParent.insertBefore(leftBox, rightBox);
};

window.addEventListener("resize", realignContent);
window.addEventListener("load", realignContent);

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

/*===================||| ABOUT US |||===================*/
/*============== ABOUT US SWIPER ==============*/
const swiper = new Swiper(".about-us-swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true, // Slaytlar arasında yumuşak geçiş
  },
  speed: 2000, // Geçiş hızı (milisaniye cinsinden)
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
});

/*============== INCREASE MEMBER COUNT ==============*/
let count = 0;
const targetCount = 700;
const increment = 9;
const speed = 10;

function updateCounter() {
  if (count < targetCount) {
    count += increment;
    document.getElementById("counter").textContent = count + "+ BİLTEK'li";
    setTimeout(updateCounter, speed);
  } else {
    document.getElementById("counter").textContent =
      targetCount + "+ BİLTEK'li";
  }
}

updateCounter();

/*===================||| TEAMS |||===================*/
const teamSlider = new Swiper(".team-area-slider", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function alignTeamSlider() {
  if(window.innerWidth <= 714) teamSlider.params.slidesPerView = 1;
  else if (window.innerWidth <= 1250) teamSlider.params.slidesPerView = 2;
  else if (window.innerWidth > 1250) teamSlider.params.slidesPerView = 3;

  teamSlider.update();
}

window.addEventListener("load", alignTeamSlider);
window.addEventListener("resize", alignTeamSlider);

/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
});

sr.reveal(`.bg-img, .ornament`);
sr.reveal(`.left-box, .right-box`, { delay: 1200 });
sr.reveal(`.newCard`, { delay: 500, interval: 100 });
sr.reveal(`.shopCard`, { interval: 100 });
