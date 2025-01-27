const menuIcon = document.querySelector(".menu-icon"),
  header = document.querySelector("header");
//   body = document.querySelector('body');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-icon--active");
  header.classList.toggle("header--mobile");
  // body.classList.toggle('no-scroll');
});

// Slider with arrows

const sliderArrows = document.querySelector(".slider-arrows"),
  slidesArrow = sliderArrows.querySelectorAll(".slider-arrows__item"),
  prev = sliderArrows.querySelector(".slider-arrows__arrow--left"),
  next = sliderArrows.querySelector(".slider-arrows__arrow--rigth");

let slideIndex = 0;

prev.addEventListener("click", () => showSlideArrows(-1));
next.addEventListener("click", () => showSlideArrows(1));

function showSlideArrows(n = 0) {
  slideIndex += n;

  if (slideIndex < 0) slideIndex = slidesArrow.length - 1;
  if (slideIndex > slidesArrow.length - 1) slideIndex = 0;

  slidesArrow.forEach((item) => (item.style.display = "none"));
  slidesArrow[slideIndex].style.display = "block";
}

showSlideArrows();

// Slider with dots

const sliderDots = document.querySelector(".slider-dots"),
  slidesDots = sliderDots.querySelectorAll(".slider-dots__item"),
  wrapperDots = sliderDots.querySelector(".slider-dots__nav");

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement("button");

  dot.dataset.slideTo = i;

  dot.classList.add("slider-dots__nav-item");

  if (i == 0) dot.classList.add("slider-dots__nav-item--active");

  if (i != 0) slidesDots[i].style.display = "none";
    dot.addEventListener('click', showSlideDots);

  wrapperDots.append(dot);
  dots.push(dot)
}

function showSlideDots(event) {
    const slideTo = event.target.dataset.slideTo;

    slidesDots.forEach(item => item.style.display = 'none');
    slidesDots[slideTo].style.display = 'block';

    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
    event.target.classList.add('slider-dots__nav-item--active');
}
