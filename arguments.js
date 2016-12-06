/*
Напишите функцию sum(...), которая возвращает сумму всех
своих аргументов.
*/

function sum(){
  var total = 0;
  for(var i=0; i<arguments.length; i++) {
    total += arguments[i]
  }
  console.log(total)
}

sum(2, 5);
sum(2, 5, 10);
sum(2, 5, 10, 100);
