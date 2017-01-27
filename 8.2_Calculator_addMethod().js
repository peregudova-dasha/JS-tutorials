/*
Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
Эта задача состоит из двух частей, которые можно решать одна за другой.

Первый шагзадачи: вызов calculate(str) принимает строку, например «1 + 2»,
с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг
операции), и возвращает результат. Понимает плюс + и минус -. 
Пример использования:

var calc = new Calculator;

console.log( calc.calculate(&#39;3 + 7&#39;) ); // 10

Второй шаг— добавить калькулятору метод addMethod(name, func), 
который учит калькулятор новой  операции. Он получает имя операции 
name и функцию от двух аргументов func(a,b), которая должна её
реализовывать. Например, добавим операции умножить, поделить
и возвести в степень *:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});

powerCalc.addMethod(";", function(a, b) {
  return a / b;
});

powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");

console.log( result ); // 8

*/


function Calculator(act){
  
  var methods = {
    "+": function(a,b){return a+b;},
    "-": function(a,b){return a+b;}
    };
  
    this.calculate = function(str){
      var arr = str.split(" ");
      var a = arr[0];
      var b = arr[2];
      var op = arr[1];
      
     if (!methods[op] || isNaN(a) || isNaN(b)) { return NaN;  }
      return methods[op](+a, +b);
  }
      this.addMethod = function(name, func){
        methods[name] = func;        
      }
      
   
    
  }
 

var newCalc = new Calculator();
var powerCalc = new Calculator();

powerCalc.addMethod("*", function(a, b) { return a * b; });
powerCalc.addMethod(";", function(a, b) { return a / b; });
powerCalc.addMethod("**", function(a, b) { return Math.pow(a, b);});

var result = powerCalc.calculate("2 ** 3");



console.log(newCalc.calculate("20 + 5"));
console.log( result ); // 8










