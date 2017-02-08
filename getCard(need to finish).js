/*
http://www.codewars.com/kata/bingo-card/train/javascript

5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75 */

function getCard() {
  function randomInteger(min, max) {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand; 
  }
 
  var bingo = [];
  for(var i=1; i<=5; i++){ bingo.push("B"+randomInteger(1, 15)); }
  for(i=1; i<=5; i++){ bingo.push("I"+randomInteger(16, 30)); }
  for(i=1; i<=4; i++){ bingo.push("N"+randomInteger(31, 45)); }
  for(i=1; i<=5; i++){ bingo.push("G"+randomInteger(46, 60)); }
  for(i=1; i<=5; i++){ bingo.push("O"+randomInteger(61, 75)); }
  
  return bingo;
}


console.log(getCard());
