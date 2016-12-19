/* 
Напишите функцию checkSpam которая проверяет строку на содержание слов: 
spam, sex.
checkSpam(&#39;get new Sex videos&#39;); // true
checkSpam(&#39;[SPAM] How to earn fast money?&#39;); // true
checkSpam(&#39;New PSD template&#39;); // false
*/

function checkSpam(str) {
  var spam = str.indexOf("spam");
  var sex = str.indexOf("sex");
  
  if (spam >-1 || sex>-1) {
    console.log(true);
  } else {console.log(false);}
  
  }
  


checkSpam("kjhgfd spam rgfds");
checkSpam("wsdgfcgvh");
checkSpam("wsdgfcgvh sex erdghv,");
