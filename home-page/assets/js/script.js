/*===================||| LANDING PAGE |||===================*/
/*=============== DARK LIGHT THEME ===============*/
// Note: Dark theme initialization is on root js!!
const themeButton = document.querySelector(".theme-button");
const darkTheme = "darkTheme";

// Activate /deactivate theme manually with the biltek logo
themeButton.addEventListener("click", () => {
  const oppositeTheme = document.body.classList.contains(darkTheme)
    ? "light"
    : "dark";

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle("theme-button-dark");
  localStorage.setItem("biltekTheme", oppositeTheme);
});

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

/*============== ROTATE LOGO ON LOAD ==============*/
function rotateLogoOnLoad() {
  const landingPageLogo = document.querySelector(".landing-page__logo");
  landingPageLogo.style.transform = "rotateZ(0)";
}

/*===================||| ABOUT US |||===================*/
/*============== ABOUT US SWIPER ==============*/
const swiper = new Swiper(".about-us-slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true, // Slaytlar arasında yumuşak geçiş
  },
  speed: 2000, // Geçiş hızı (milisaniye cinsinden)
  allowTouchMove: false,
  autoplay: {
    delay: 8000,
  },
});

/*============== INCREASE MEMBER COUNT ==============*/
let count = 500;
const targetCount = 2000;
const increment = 9;
const speed = 15; // per second

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
  speed: 500,
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
  },
});

function alignTeamArea() {
  // Align slider
  if (window.innerWidth <= 575) teamSlider.params.slidesPerView = 1.2;
  else if (window.innerWidth <= 875) teamSlider.params.slidesPerView = 1.8;
  else if (window.innerWidth <= 1100) teamSlider.params.slidesPerView = 2.6;
  else if (window.innerWidth <= 1483) teamSlider.params.slidesPerView = 3;
  else if (window.innerWidth > 1483) teamSlider.params.slidesPerView = 3.2;
  teamSlider.update();

  // Set the card heights to the card with the highest height
  const cards = document.querySelectorAll(".team-area-slide");
  const mostHeight = document.querySelector(".most-height").style.height;
  cards.forEach((card) => {
    card.style.height = `${mostHeight}px`;
  });
}

window.addEventListener("load", alignTeamArea);
window.addEventListener("resize", alignTeamArea);

/*===================||| DEPARTMANTS |||===================*/
// Swiper initialization
const departmantSwiper = new Swiper(".departmant-slider", {
  spaceBetween: 25,
  initialSlide: 1,
  speed: 800,
  autoplay: false,
  allowTouchMove: true,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    // width > 1400px
    1400: {
      autoplay: true,
      spaceBetween: 18,
      allowTouchMove: false,
    },
  },
});

function alignDepartmantArea() {
  // Center slider in big devices
  if (window.innerWidth > 1400) departmantSwiper.slideTo(1);
}

window.addEventListener("load", alignDepartmantArea);
window.addEventListener("resize", alignDepartmantArea);

/*===================||| SUMMARY |||===================*/
// Swiper initialization
const summarySwiper = new Swiper(".summary-slider", {
  spaceBetween: 35,
  speed: 800,
  slidesPerView: 1,
  autoplay: true,

  autoplay: {
    delay: 12000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // width > 680px
    680: {
      slidesPerView: 2,
    },
    // width > 1150px
    1150: {
      slidesPerView: 3,
    },
  },
});

/*===================||| SCROLL REVEAL ANIMATION |||===================*/
document.addEventListener("DOMContentLoaded", () => {
  sr.reveal(`.bg-img, .ornament`);

  sr.reveal(`.bg-img`, {
    afterReveal: function (el) {
      el.style.transform = "";
    },
  });

  sr.reveal(`.landing-page__container`, {
    origin: "bottom",
    delay: 900,
    beforeReveal: function () {
      setTimeout(function () {
        rotateLogoOnLoad();
      }, 1400);
    },
  });

  sr.reveal(`.about-us-slider`, { origin: "bottom", delay: 900 });

  sr.reveal(`.section-title, .team-area, .summary, .departmants, .summary`, {
    delay: 300,
  });

  sr.reveal(`.about-content`, {
    delay: 300,
    beforeReveal: function () {
      updateCounter();
    },
  });

  sr.reveal(`.collaborator`, {
    distance: "20px",
    duration: 2000,
    delay: 200,
    interval: 100,
  });
});
