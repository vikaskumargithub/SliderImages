document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;

  const updateSlidePosition = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
  };

  const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  };

  prev.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? slide.length - 1 : currentIndex - 1;
    updateSlidePosition();
  });

  next.addEventListener("click", () => {
    currentIndex = currentIndex === slide.length - 1 ? 0 : currentIndex + 1;
    updateSlidePosition();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateSlidePosition();
    });
  });
});
