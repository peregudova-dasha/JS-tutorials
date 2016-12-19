/* 
Написать функцию которая возвращает строку с
заглавным первым символом
upperFirst('hello') == 'Hello';
upperFirst('') == '';
*/

function upperFirst(str) {
  if (str.length>0){
  var letter = str.charAt(0);
  var result = letter.toUpperCase() + str.substring(1);
  console.log(result)
  } 
  else {console.log(str);}
  }
  


upperFirst("kjhgfd");
upperFirst("");
