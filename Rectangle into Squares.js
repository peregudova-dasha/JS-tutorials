function sqInRect(lng, wdth){
 var arr = [];
 arr.push(lng, wdth);
 var result = [];
 do {
    result.push(Math.min.apply(null, arr));
    arr[arr.indexOf(Math.max.apply(null, arr))] = Math.max.apply(null, arr) - Math.min.apply(null, arr);
 } while (Math.min.apply(null, arr)!==0);
   if(result.length == 1){ return null;}
  return result;
 }
 
 
 console.log(sqInRect(20, 14)); // [14, 6, 6, 2, 2, 2]
console.log(sqInRect(5, 5)); // null
