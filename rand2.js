/* 
Написать функцию которая возвращает случайное
число из интервала (min, max)
*/

function rand(min, max) {
  var num = min + Math.random()*(max-min);
  
  console.log(num)
  }
  


rand(50, 100);
