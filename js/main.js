$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $('.counter');// переменная текущего этажа
  let  counterUp = $('.counter-up'); /** кнопка увеличения этажа */
  let  counterDown = $('.counter-down'); /** кнопка уменьшения этажа */

  // Функция при наведении мышью на этаж
  $('.home-image path').on('mouseover', function() {
    $('.home-image path').removeClass('current-floor'); //удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor');//получаем значение текущего этажа
    floorPath.text(currentFloor) ;  // запмсываем значение этажа в счетчик
  });

  counterUp.on('click', function() { // отслеживаем клик по кнопке вверх
   if (currentFloor < 18) { // проверяем значение этажа
    currentFloor++; // прибавляем один этаж
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
       useGrouping: false});// форматируем в нужную форму
    floorPath.text(usCurrentFloor) ; 
    $('.home-image path').removeClass('current-floor'); // записываем в счетчик
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');//подсвечиваем текущий этаж
   }
  });

  counterDown.on('click', function() {
   if (currentFloor > 2) {
    currentFloor--;
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    floorPath.text(usCurrentFloor) ; 
    $('.home-image path').removeClass('current-floor'); 
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
   }
  });
});

