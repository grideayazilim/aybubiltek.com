/*============== UPDATE SLIDER ==============*/
document.addEventListener("DOMContentLoaded", () => {
  // Swiper initialization
  const swiper = new Swiper(".swiper", {
    // Update slider line when slide changes
    on: {
      slideChange: function () {
        updateSliderLine(this);
      },
    },
  });

  updateSliderByTitle(swiper);
  resetLineWidth(swiper);
});

// Elements that are going to be used
const line = document.querySelector(".current-line");
const titles = document.querySelectorAll(".subtitle");

/*=== Update slider line and titles when slider changes ===*/
const updateSliderLine = (swiper) => {
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
const updateSliderByTitle = (swiper) => {
  titles.forEach((title) => {
    title.addEventListener("click", () => {
      swiper.slideTo(parseInt(title.id));
    });
  });
};

/*=== Trigger updateSliderLine when resized to realign slider line ===*/
const resetLineWidth = (swiper) => {
  window.addEventListener("resize", () => {
    updateSliderLine(swiper);
  });
};