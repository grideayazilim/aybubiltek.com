let currentSlide = 0;
const totalSlides = document.querySelectorAll('.column').length;
let slidesToShow = window.innerWidth > 1000 ? 3 : 2; // 3 slides for 1000px and above, 2 slides for below 1000px
const slideWidth = 100 / slidesToShow;

// Show slide based on index
function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const maxSlideIndex = totalSlides - slidesToShow;

    if (index > maxSlideIndex) {
        currentSlide = maxSlideIndex;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * slideWidth;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Update slidesToShow based on window width
function updateSlidesToShow() {
    slidesToShow = window.innerWidth > 1000 ? 3 : 2;
    showSlide(currentSlide); 
}

window.onload = () => {
    showSlide(currentSlide);
};

window.onresize = updateSlidesToShow; 
