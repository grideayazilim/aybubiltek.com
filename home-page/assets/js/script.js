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
  console.log(text.scrollWidth);

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
let count = 0;
const targetCount = 700;
const increment = 9;
const speed = 10;

function updateCounter() {
  if (count < targetCount) {
    count += increment;
    document.getElementById('counter').textContent = count + '+ BİLTEK\'li';
    setTimeout(updateCounter, speed);
  } else {
    document.getElementById('counter').textContent = targetCount +  '+ BİLTEK\'li';
  }
}

updateCounter();

let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // 3 saniyede bir değiştir
}

showSlides();

/*===================||| TEAMS |||===================*/
const teamSlider = new Swiper('.team-area-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: '3',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true, 
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
