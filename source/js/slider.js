var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Переопределение функции для отображения кастомных кнопок пагинации
      return `<button class="${className} slider__button" data-slide-index="${index}"></button>`;
    },
  },
  keyboard: true,
});

// Обработчик события клика на кнопках пагинации
var paginationButtons = document.querySelectorAll(".slider__button");
paginationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var slideIndex = parseInt(this.getAttribute("data-slide-index"));
    swiper.slideTo(slideIndex); // Переключение на выбранный слайд
  });
});

// Добавление класса активности для текущего слайда
swiper.on("slideChange", function () {
  var activeIndex = swiper.activeIndex;
  paginationButtons.forEach(function (button) {
    button.classList.remove("active");
  });
  paginationButtons[activeIndex].classList.add("active");
});
