// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

function tenThousandClub(salesTeam){
  var arr = [];
  for(let i = 0;  i < salesTeam.length; i++){
    if(salesToNumber(salesTeam[i].sales) > 10000) {
      arr.push(salesTeam[i].name.first + ' ' + salesTeam[i].name.last);
    }
  }
  return arr;
}

function salesToNumber(salesString){
  var strNum = salesString.slice(1);
  return Number(strNum);
}

var output = tenThousandClub(salesTeam);
console.log(output);