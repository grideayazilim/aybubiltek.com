/*============== SET PAGE ==============*/
// team id that got from the links
const id = sessionStorage.getItem("selectedTeamId");

/*==== PROPERTIES TO SET ====*/
// landing page
const title = document.querySelector(".bigger-title");
const logo = document.querySelector(".team-logo");
const mainDescription = document.querySelector(".landing-page__description");

// achievements
const achievementsContainer = document.querySelector(".swiper-wrapper");

/*==== FUNCTION TO SET PROPER INFOS ====*/
async function loadPage() {
    // Get json data and initialize it as object
    const response = await fetch("assets/teams.json");
    const teams = await response.json();

    // Find the correct team info according to 'id' variable
    const selectedTeam = teams.find(team => team.id === parseInt(id));

    // Set the selected team's info to the site
    title.textContent = selectedTeam.teamName;
    logo.src = selectedTeam.logo;
    mainDescription.textContent = selectedTeam.description;

    // Reset and fill the achievements slider
    achievementsContainer.innerHTML = "";
    selectedTeam.achievements.forEach(achievement => {
        achievementsContainer.innerHTML += 
            `<div class="achievements__card swiper-slide">
                <img src="${achievement.imgSrc}" alt="" class="achievements__img">
                <div class="achievements__title subtitle">${achievement.title}</div>
                <div class="achievements__description">${achievement.description}</div>
             </div>`;
    });
};

loadPage();

/*============== SWIPER INITIALIZATION ==============*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 3, // Bir sayfada 3 eleman gösterir
    spaceBetween: 8, // Slaytlar arasındaki boşluk
  });