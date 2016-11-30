/*Создайте функцию find(arr, value), которая ищет в массиве 
arr значение value и возвращает его позицию, если найдено,
или -1, если не найдено.
*/

var arr = [1, 5, 8, "t", "w", 2, true, 8547952, "array-item"];

function find(arr, value) {
  console.log(arr.indexOf(value));
  }

find(arr,88);
find(arr,8);
find(arr,1);
find(arr,"t");
find(arr,true);
