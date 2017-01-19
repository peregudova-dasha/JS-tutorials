/*
сортировать имена классов по частоте их использования
*/
var classesNames = ["header", "image", "tab", "item", "image", "image", "link", "tab", "menu", "link", "item", "link", "menu", "item", "menu", "menu_item", "tab", "item", "tab_item", "tab_item", "image", "item", "link"];

var classesObj = {};

classesNames.forEach(function(elem){
  if(!classesObj[elem]){
    classesObj[elem] = 1;
  }
  else {
    classesObj[elem] += 1;
  }
})
var result = [];
for(var className in classesObj){
  result.push(className);
}

result.sort(function(a,b){
  return classesObj[a]-classesObj[b];
})


console.log(classesObj);
console.log(result);
