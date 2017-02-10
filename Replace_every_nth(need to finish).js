/*
http://www.codewars.com/kata/replace-every-nth/train/javascript
*/


function replaceNth(text, n, oldValue, newValue) {
   var count=0;
   var pos = 0;
       
    for(var i=0; i<=text.length; i++){
      if(text.indexOf(oldValue, pos)==i){
      count+=1;
      pos = i+1;
        
        console.log("count: " + count);
     }
  }
  
  
  
  
}


console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'));
//"Vader soid: No, I am your fother!"
console.log(replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'));
//"Vader said: No, I am your fother!"
console.log(replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i'));
//"Luke cries: Noooooioooooioooo!"
