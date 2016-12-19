/* 
Напишите функцию, которая принимает на вход строку и 
возвращает ее неизменной если ее длина не
превышает 20 символов. Если длинна больше 20, то обрезает
строку и добавляет в конец строки ...;
*/

function checkLength(str) {
 var strLength = str.length;
  
  if(strLength >=20) {
    var newStr = str.substring(0,20);
    var result = newStr + "..."
    console.log(result);
  }
  else {console.log(str);}
  }
  


checkLength("kjhgfd rgfds fdsagregwf dth  asrewfewf");
checkLength("wsdgfcgvh");
checkLength("wsdgfcgvh erdghvmhgfds");
