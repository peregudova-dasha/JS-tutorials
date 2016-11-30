//Написать функцию которая принимает на вход массив и возвращает случайное значение из этого массива.

var arr = [1, 5, 8, "t", "w", 2, true, 8547952, "array-item"];

function randItem(arr) {
  var min = 0;
  var max = arr.length - 1;
  var rand = min + Math.floor(Math.random() * (max + 1 - min));
  console.log(arr[rand])
}

randItem(arr);
