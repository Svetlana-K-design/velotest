//toggle
$(document).ready(function () {
  $('.tabs__toggle--1').click(function (event) {
    if (window.matchMedia("(max-width: 992px)").matches) {
      $('.tabs__toggle--1, .tabs__content--1, .tabs__label--1').toggleClass('closed');
    }
  });

  $('.tabs__toggle--2').click(function (event) {
    if (window.matchMedia("(max-width: 992px)").matches) {
      $('.tabs__toggle--2, .tabs__content--2, .tabs__label--2').toggleClass('closed');
    }
  });

  //проверка формы
  $('.form-block__button').on('click', function () {
    $('.form-block__flex .form-block__input').each(function () {
      if ($(this).val() != '') {
        console.log(32);
        // Если поле не пустое удаляем класс-указание
        $(this).removeClass('error');
      } else {
        console.log(33);
        // Если поле пустое добавляем класс-указание
        $(this).addClass('error');
      }
    });
  });
});
