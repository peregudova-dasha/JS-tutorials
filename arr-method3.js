/*
Написать функцию обратной сортировки reverseSort(arr).
Которая сортирует численный массив от большего к меньшему.
*/

var arr = [5, 2, 1, -10, 8];
function reverseSort(a, b) {
return b - a;
}
arr.sort(reverseSort);




console.log( arr );
