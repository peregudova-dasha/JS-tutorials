/*
Создайте фунцию filterRange(arr, a, b), которая принимает
массив чисел arr и возвращает новый массив, который
содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.
*/

var numbers = [1, 5, 8, "t", "w", 2, true, 8547952, "array-item", 3, 12, 28, 16, 25, 37, 151, 2003, 67932];

function filterRange(arr, a, b) {
   var newnumbers =[]
  for(var i=0; i<arr.length; i++) {
    if(arr[i]>= a && arr[i]<=b) {
      newnumbers.push(arr[i])
    }
  }
  console.log(newnumbers);
}

filterRange(numbers, 1, 259);
