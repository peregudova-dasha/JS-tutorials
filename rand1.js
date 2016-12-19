/* 
Написать функцию которая возвращает случайное
число из интервала (0, max)
*/

function rand(max) {
  var num = Math.random()*max;
  var num1 = Math.round(num);
  console.log(num1)
  }
  


rand(100);
