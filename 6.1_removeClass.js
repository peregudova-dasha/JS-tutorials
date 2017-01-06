/* У объекта есть свойство className, которое хранит список css класов 
– слов, разделенных пробелами.
Напишите функцию removeClass(obj, cls), 
которая удаляет класс cls, если он есть.
*/

var obj = {
  className: "menu true close open"
};


function removeClass(obj, cls){
  var classes = obj.className ? obj.className.split(' ') : [];
  
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1)
   }
}

obj.className = classes.join(' '); 
  
  console.log(obj.className);
}




removeClass(obj, "menu"); // obj.className="menu";
removeClass(obj, "blabla"); // без изменений
removeClass(obj, "open"); // без изменений
