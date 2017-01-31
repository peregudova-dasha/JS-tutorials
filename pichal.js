//https://www.codewars.com/kata/the-office-ii-boredom-score/train/javascript

function boredom(staff){
  var arr=[];
  for(var name in staff){ arr.push(staff[name]);}
  
  var team = {};
  
  arr.forEach(function(dep){
    if(!team[dep]){
      team[dep] = 1;
    } else {team[dep] += 1;}
  })

  console.log(team);
    
  
//  team.retail*5 +team.cleaning*4 +team.pissing_about * 10; 
  team.accounts = team.accounts;
  team.finance = team.finance*2;
  team.canteen = team.canteen*10;
  team.regulation = team.regulation*3;
  team.trading = team.trading * 6;
  team.change = team.change* 6 ;
  team.IS = team.IS*8;
  team.retail = team.retail*5;
  team.cleaning =team.cleaning*4;
  team.pissing_about = team.pissing_about * 25;
  
 var counter = 0;
  for(var key in team){ counter ++;}
  console.log(counter);
  
  for(var i=0; i<=team.counter; i++ ){
    if(team[i] == isNaN) {team[i]=0;}
  }
  
  var score =  team.accounts+team.finance+team.canteen+team.regulation+team.trading+team.change+team.IS +team.retail+team.cleaning+ team.pissing_about;
  
  console.log(score);
}




boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }); // "kill me now"

boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing_about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing_about',
  john: 'retail', mr: 'pissing_about' }); // "party time"
