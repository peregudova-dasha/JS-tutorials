/*function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
} */

function compareNumeric(a, b) {
  if(+a && +b) {
    return a-b;
  }   else if (+a) {
    return 1;
  } else {return -1;}
}


var arr = [ 7, 2, 15, "string", "line", 8, 1, 254];

arr.sort(compareNumeric);

console.log(arr);
