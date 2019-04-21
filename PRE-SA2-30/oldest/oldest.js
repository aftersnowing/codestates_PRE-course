// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

function oldest(salesTeam){
  var arr = [];
  salesTeam.forEach((obj) => arr.push(obj.age));
  var oldestAge = Math.max.apply(null, arr);
  for (let i = 0; i < arr.length; i++){
    if(oldestAge === salesTeam[i].age) {
      return 'The oldest student is ' + salesTeam[i].name.first + ' ' + salesTeam[i].name.last;
    }
  }
}

var output = oldest(salesTeam);
console.log(output);