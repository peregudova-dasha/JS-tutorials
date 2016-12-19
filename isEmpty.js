/* 
Создайте функцию isEmpty(obj), которая
возвращает true, если в объекте нет свойств
и false — если хоть одно свойство есть.
*/

function isEmpty(obj) {
  var count = 0;
  for(var keys in obj) {
    count++;
    console.log(count);
    console.log(keys)
  }

  if (count>0) {
    console.log(false);
  } else{console.log(true);}
}

var todoList = {};
 isEmpty(todoList) ; // true
todoList['homework'] = 'lesson5';
todoList['homeworsck'] = 'lessonsfs5';
 isEmpty(todoList);  // false
