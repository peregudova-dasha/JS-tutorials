//https://www.codewars.com/kata/dead-ants/train/javascript

deadAntCount = function(ants) {
 var arr=ants.split(" ");
 var deadArr=[];
  for(var i=0; i<arr.length; i++){
   
    if(arr[i] != "ant"){
      console.log(arr[i]);
      deadArr.push(arr[i]);}  }
  
  return deadArr.length;
}

console.log(deadAntCount("ant ant ant ant")); // 0,  "Nope"
console.log(deadAntCount("ant anantt aantnt")); //2
console.log(deadAntCount("ant ant .... a nt")); //1
