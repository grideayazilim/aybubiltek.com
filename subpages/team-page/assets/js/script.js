/*============== SWIPER ==============*/
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 8,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Responsive swiper function
const activateResponsiveSwiper = () => {
  if (window.innerWidth < 600) swiper.params.slidesPerView = 1;
  else if (window.innerWidth < 1200) swiper.params.slidesPerView = 2;
  else swiper.params.slidesPerView = 3;

  swiper.update();
};

window.addEventListener("resize", activateResponsiveSwiper);
window.onload = activateResponsiveSwiper;

/*============== SET PAGE ==============*/
// Team id that got from the links
const id = sessionStorage.getItem("selectedTeamId");

/*==== PROPERTIES TO SET ====*/
// Landing page
const title = document.querySelector(".bigger-title");
const logo = document.querySelector(".team-logo");
const mainDescription = document.querySelector(".landing-page__description");

// Achievements
const achievementsContainer = document.querySelector(".swiper-wrapper");

/*==== FUNCTION TO SET PROPER INFOS ====*/
async function loadPage() {
  // Get json data and initialize it as object
  const response = await fetch("assets/data/teams.json");
  const teams = await response.json();

  // Find the correct team info according to 'id' variable
  const selectedTeam = teams.find((team) => team.id === parseInt(id));

  // Set the selected team's info to the site
  title.textContent = selectedTeam.teamName;
  logo.src = selectedTeam.logo;
  mainDescription.textContent = selectedTeam.description;

  // Reset and fill the achievements slider
  achievementsContainer.innerHTML = "";
  selectedTeam.achievements.forEach((achievement) => {
    achievementsContainer.innerHTML += `<div class="achievements__card swiper-slide">
                <img src="${achievement.imgSrc}" alt="" class="achievements__img">
                <div class="achievements__title subtitle">${achievement.title}</div>
                <div class="achievements__description">${achievement.description}</div>
             </div>`;
  });
}

loadPage();
