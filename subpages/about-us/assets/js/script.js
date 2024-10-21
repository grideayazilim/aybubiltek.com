/*============== DESCRIPTION SLIDER ==============*/
document.addEventListener("DOMContentLoaded", () => {
  // Swiper initialization
  const descriptionSwiper = new Swiper(".description-slider", {
    // Update slider line when slide changes
    on: {
      slideChange: function () {
        updateDescriptionSliderLine(this);
      },
    },
  });

  updateDescriptionSliderByTitle(descriptionSwiper);
  resetLineWidth(descriptionSwiper);
});

// Elements that are going to be used
const line = document.querySelector(".current-line");
const titles = document.querySelectorAll(".subtitle");

/*=== Update description slider line and titles when slider changes ===*/
const updateDescriptionSliderLine = (swiper) => {
  const slideIndex = swiper.activeIndex;
  const activeSlide = swiper.slides[slideIndex];
  const slideWidth = activeSlide.clientWidth / 3.0;

  // Set new features of slider line
  line.style.width = `${slideWidth}px`;
  line.style.transform = `translateX(${slideWidth * slideIndex}px)`;

  // Set title activeness
  titles.forEach((title) => {
    title.classList.remove("active-title");

    if (parseInt(title.id) === parseInt(slideIndex))
      title.classList.add("active-title");
  });
};

/*=== Update slider when a title is clicked ===*/
const updateDescriptionSliderByTitle = (swiper) => {
  titles.forEach((title) => {
    title.addEventListener("click", () => {
      swiper.slideTo(parseInt(title.id));
    });
  });
};

/*=== Trigger updateSliderLine when resized to realign slider line ===*/
const resetLineWidth = (swiper) => {
  window.addEventListener("resize", () => {
    updateDescriptionSliderLine(swiper);
  });
};

/*============== SWIPER IMAGES ==============*/
const imageSwiper = new Swiper(".image-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 8,
  allowTouchMove: false,
  simulateTouch: false,
  speed: 3000,

  autoplay: {
    delay: 5000,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

/* =============== SCROLL REVEAL ANIMATION =============== */
sr.reveal(`.title-area`);
sr.reveal(`.content`, { delay: 700 });
sr.reveal('.sponsor', { delay: 1200, interval: 500 });