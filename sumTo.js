/* 
Напишите функцию sumTo(n), которая для данного n 
вычисляет сумму чисел от 1 до n
*/

function sumTo(n) {
  var sum = 0;
  for(var i=1; i<=n; i++) {
    sum += i;
  }
  
  console.log(sum)
}

sumTo(3);
