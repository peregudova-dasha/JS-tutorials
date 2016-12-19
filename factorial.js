/* 
Написать функцию вычисляющую факториал числа n
*/

function factorial(n) {
  var multiple = 1;
  for(var i=1; i<=n; i++) {
    multiple *= i;
  }
  
  console.log(multiple)
}

factorial(4);
