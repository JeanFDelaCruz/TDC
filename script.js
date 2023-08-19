///////////////////////////////////
// SLIDER FOR TESTIMONIAL CONTAINERS //
///////////////////////////////////
const slides = document.querySelectorAll(".testimonial__container");
const btnPrev = document.querySelector(".testimonial--button-prev");
const btnNext = document.querySelector(".testimonial--button-next");
const dotContainer = document.querySelector(".dots__container--slider");

const sliderContainer = function () {
  let curSlide = 0;
  const maxSlide = slides.length;

  // CREATE DOTS FUNCTION //

  const createDots = function () {
    // Use the index to create how many dots there are adjacent to the amount of slides
    slides.forEach(function (_, i) {
      // inserted to the bottom 'beforeend' adds data-slide for increasing increments for later slides
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });

    // PAGINATION FOR THE DOTS CREATED //
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        curSlide = i;
        goToSlide(curSlide);
        activateDot(curSlide);
      });
    });
  };

  const activateDot = function (slide) {
    // This resets the default class value to no active classes
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    // For every slide that occurs this adds a classlist to active
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    // This translates all the boxes out of the view port
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${150 * (i - slide)}%)`)
    );
  };

  // NEXT SLIDE //
  const nextSlide = function () {
    //If the current slide reaches the maximum - 1 go back to slide 0
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      // if slide hasnt reached the max keep going
      curSlide++;
    }

    //Dynamically sets the slide and dots current active
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // PREVIOUS SLIDE
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // EVENT HANDLERS FOR SLIDER //
  btnNext.addEventListener("click", nextSlide);
  btnPrev.addEventListener("click", prevSlide);
};
sliderContainer();
///////////////////////////////////
// END OF SLIDER FOR TESTIMONIAL CONTAINERS //
///////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////
// SLIDER FOR TESTIMONIAL BLOGS //
///////////////////////////////////

const contentSlides = document.querySelectorAll(".testimonial__story__text");
const contentBtnRight = document.querySelector(".dots__button-right");
const contentBtnLeft = document.querySelector(".dots__button-left");
const contentDotsContainer = document.querySelector(".dots____list");

const testimonialContainers = document.querySelectorAll(
  ".testimonial__container"
);

testimonialContainers.forEach((container) => {
  const testimonials = container.querySelectorAll(".testimonial__story__text");
  const dots = container.querySelectorAll(".dots");
  const dotButtons = container.querySelectorAll(".dots__list li");
  const backButton = container.querySelector(".dots__button-left");
  const forwardButton = container.querySelector(".dots__button-right");
  let currentIndex = 0;

  function showPage(index) {
    testimonials.forEach((testimonial) => testimonial.classList.add("hidden"));
    testimonials[index].classList.remove("hidden");
    dotButtons.forEach((dot) => dot.classList.remove("active"));
    dotButtons[index].classList.add("active");
  }

  backButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showPage(currentIndex);
  });

  forwardButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showPage(currentIndex);
  });

  dotButtons.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showPage(currentIndex);
    });
  });

  showPage(currentIndex);
});
// const createDots = function () {
//   contentSlides.forEach(function (_, i) {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `
//     <button class="dots" data-slide="${i}"></button>
//     `
//     );
//   });
// };

// const activateDot = function (slide) {
//   document
//     .querySelectorAll("dots")
//     .forEach((dot) => dot.classList.remove("active"));

//   document
//     .querySelector(`.dots[data-slide="${slide}"]`)
//     .classList.add("active");
// };

// const goToSlide = function (slide) {
//   slides.forEach((s, i) => s.classList.toggle("hidden"));
// };

// // NEXT SLIDE

// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   goToSlide(curSlide);
//   activateDot(curSlide);
// };

// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else {
//     curSlide--;
//   }
// };

// const init = function () {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// };
// init();

// //EVENT HANDLERS FOR CONTENT OF TESTIMONIALS //
// contentBtnRight.addEventListener("click", nextSlide);
// contentBtnLeft.addEventListener("click", prevSlide);
