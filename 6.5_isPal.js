

function isPal(str) {
  var arr = str.toLowerCase().split("");
  
 for(var i=0; i<arr.length; i++){
    if(arr[i] == " ") {
      arr.splice(i, 1);
    }
  }
  var str = arr.join("");
  var newStr = arr.reverse().join("");

    if(str == newStr) {
    console.log(true);
  } else { console.log(false);}
  
 // console.log(arr, newStr)
}




isPal("Anna"); // true
isPal("А роза упала на лапу Азора"); //true
isPal("Вася"); //false
isPal("12321"); //true
isPal("123212"); //false
