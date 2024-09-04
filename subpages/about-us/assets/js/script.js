/*============== DESCRIPTION SLIDER ==============*/
// Math explanations are in SCSS at mixin 'setContentGrid'
const titles = document.querySelectorAll(".subtitle");
const descriptionSlider = document.querySelector(".description-slider");
const lineSlider = document.querySelector(".current-line");

/*===== Function to slide description and line =====*/
const slideItems = (title) => {
  const keyword = title.innerHTML;
  let containerWidth = document.querySelector(".info").clientWidth;
  let descriptionLeftPosition = "";
  let lineLeftPosition = "";

  // Change position values according to which title is clicked
  if (keyword === "Hakkımızda") {
    descriptionLeftPosition = 0;
    lineLeftPosition = 0;
  } else if (keyword === "Misyonumuz") {
    descriptionLeftPosition = containerWidth;
    lineLeftPosition = containerWidth / 3.0;
  } else if (keyword === "Vizyonumuz") {
    descriptionLeftPosition = containerWidth * 2;
    lineLeftPosition = (containerWidth / 3.0) * 2;
  }

  // Assign the final position values
  descriptionSlider.style.transform =
    "translateX(" + -descriptionLeftPosition + "px)";
  lineSlider.style.transform = "translateX(" + lineLeftPosition + "px)";
};

titles.forEach((title) => {
  title.addEventListener("click", () => {
    // Get current active title
    const activeTitle = document.querySelector(".active-title");
    // If selected title is different from the current active title, remove the former active title
    if (activeTitle != title) {
      activeTitle.classList.remove("active-title");
      title.classList.add("active-title");
    }

    // Invoke function to align the items
    slideItems(title);
  });
});

/*============== RESET SLIDER ==============*/
/*
  When the grid width changes, slider stucks at the former
  alignment if it is not triggered again, which causes to
  collapse slider.
  Therefore, the following function triggers the slider to 
  the beginning when responsive design is enabled.
*/
const resetSliders = () => {
  let windowWidth = document.body.clientWidth;

  // Activate the process when the responsive design is enabled
  if (windowWidth <= 1380) {
    // reset transform
    descriptionSlider.style.transform = "translateX(0px)";
    lineSlider.style.transform = "translateX(0px)";

    // reset title activeness
    titles.forEach((title) => {
      title.innerHTML === "Hakkımızda"
        ? title.classList.add("active-title")
        : title.classList.remove("active-title");
    });
  }
};

window.addEventListener("resize", resetSliders);
