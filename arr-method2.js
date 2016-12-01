/*
Напишите функцию toCamelCase(str), которая преобразует
строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают
заглавную букву.
*/


function toCamelCase(str){
 var arr = str.split("-");
 //console.log(str1);
 for(var i=1; i<arr.length; i++) {
  arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
   console.log(arr);
 }
  console.log(arr.join(''));
}


toCamelCase("background-color"); 
