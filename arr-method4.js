/*Код ниже получает из массива строк новый массив,
содержащий их длины. Перепишите его: уберите цикл,
используйте вместо него метод map. */

var arr = ['Есть','жизнь','на','Марсе'];

var arrLength = arr.map(function(arr){
  return arr.length;
});

console.log( arrLength );
