/*Написать функцию которая принимает на вход
2 параметра: массив, и элемент (любого типа).
Этот элемент нужно добавить в конец массива.
Функция должна вернуть массив с добавленным
новым элементом.
*/
var arr = [1, 2, 3, 4, 5, "last"];

function lastItem(arr, item){
    arr.push(item)
   console.log(arr);
}

lastItem(arr, "new last");
lastItem(arr, "new last");
lastItem(arr, "new last");
lastItem(arr, "new last");

