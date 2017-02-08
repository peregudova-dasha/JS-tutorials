/* Есть массив строк arr. Создайте массив arrSorted —
из тех же элементов, но отсортированный.
Исходный массив не должен меняться.
*/

var arr = ["HTML", "JavaScript", "CSS"];
var newArr = [];
for(var i=0; i<arr.length;i++){
  newArr.push(arr[i]);
}


newArr.sort(function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1; 
    return 0;
});



console.log( newArr ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
