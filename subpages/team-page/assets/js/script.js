/*============== SET PAGE ==============*/
async function loadPage() {
  // Team key got from the links
  const key = localStorage.getItem("teamKey");

  fetch("assets/data/teams.json")
    .then((response) => response.json())
    .then((teams) => {
      // Get the proper team
      const selectedTeam = teams.find((team) => team.key === key);

      // Fill the page
      const title = document.querySelector(".big-title");
      const logo = document.querySelector(".team-logo-img");
      const mainDescription = document.querySelector(".descriptions-wrapper");
      const socialMediaButtons = document.querySelectorAll(
        ".social-media-button"
      );
      const achievementsContainer = document.querySelector(".swiper-wrapper");
      const leadersContainer = document.querySelector(".leaders");
      const coresContainer = document.querySelector(".cores");
      const retiredsContainer = document.querySelector(".retireds");
      const retiredsOuterContainer = document.querySelector(
        ".retireds-outer-container"
      );

      // General info
      document.title = selectedTeam.name;
      title.textContent = selectedTeam.name;
      logo.src = selectedTeam.logo;
      selectedTeam.descriptions.forEach((description) => {
        mainDescription.innerHTML += `<p>${description}</p>`;
      });
      let socialCount = 0;
      socialMediaButtons.forEach((socialMediaButton) => {
        let socialLink = selectedTeam.social[socialCount];
        if (socialLink === "#") socialMediaButton.style.display = "none";
        socialMediaButton.href = socialLink;
        socialCount++;
      });

      // Achievements
      achievementsContainer.innerHTML = "";
      selectedTeam.achievements.forEach((achievement) => {
        achievementsContainer.innerHTML += `
          <div class="achievements__card swiper-slide">
            <img src="${achievement.image}" alt="${achievement.title}" class="achievements__img">
            <div class="achievements__title subtitle">${achievement.title}</div>
            <div class="achievements__description">${achievement.description}</div>
          </div>`;
      });

      // Members
      leadersContainer.innerHTML = "";
      coresContainer.innerHTML = "";
      retiredsContainer.innerHTML = "";
      // To delete these containers if no member is exist in there
      let leaderExist,
        coreExist,
        retiredExist = false;

      selectedTeam.members.forEach((member) => {
        if (member.type === "leader") leaderExist = true;
        if (member.type === "core") coreExist = true;
        if (member.type === "retired") retiredExist = true;

        let cardContent = `
            <div class="member-card">
              <div class="image-container">
                <img src="${member.image}" alt="member photo" />
              </div>

              <div class="member-info">
                <div class="subtitle">${member.position}</div>
                <p>${member.name}</p>
              </div>

              <div class="accounts">
                <a href="${
                  member.linkedin ? member.linkedin : "#"
                }" class="member-link" target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="${
                  member.github ? member.github : "#"
                }" class="member-link" target="_blank">
                  <i class="fa-brands fa-square-github"></i>
                </a>

                <a href="${
                  member.behance ? member.behance : "#"
                }" class="member-link" target="_blank">
                  <i class="fa-brands fa-square-behance"></i>
                </a>

                <a href="${
                  member.dribble ? member.dribble : "#"
                }" class="member-link" target="_blank">
                  <i class="fa-brands fa-dribbble"></i>
                </a>

                <a href="${
                  member.pinterest ? member.pinterest : "#"
                }" class="member-link" target="_blank">
                  <i class="fa-brands fa-pinterest"></i>
                </a>
              </div>
            </div>
            `;

        switch (member.type) {
          case "leader":
            leadersContainer.innerHTML += cardContent;
            break;
          case "core":
            coresContainer.innerHTML += cardContent;
            break;
          case "retired":
            retiredsContainer.innerHTML += cardContent;
            break;
        }

        // Deleting the empty social links of the members
        let memberSocialLinks = document.querySelectorAll(".member-link");
        memberSocialLinks.forEach((memberLink) => {
          if (memberLink.getAttribute("href") == "#")
            memberLink.style.display = "none";
        });
      });

      // Delete the empty member containers
      if (!leaderExist) leadersContainer.style.display = "none";
      if (!coreExist) coresContainer.style.display = "none";
      if (!retiredExist) retiredsOuterContainer.style.display = "none";

      // Scroll reveal
      sr.reveal(`.member-card`, {
        delay: 400,
        interval: 300,
      });
    })
    .catch((error) => {
      console.error("Error loading team data:", error);
    });
}

loadPage();

/*============== SWIPER ==============*/
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 8,

  pagination: {
    el: ".swiper-pagination",
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

/* =============== SCROLL REVEAL ANIMATION =============== */
document.addEventListener("DOMContentLoaded", () => {
  sr.reveal(`.bg-image`);
  sr.reveal(`.content, .social`, {
    origin: "bottom",
    delay: 900,
  });
  sr.reveal(`.big-title, .achievements`, { delay: 300 });
});
