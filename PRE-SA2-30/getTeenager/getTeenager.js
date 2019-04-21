// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

function getTeenager(salesTeam) {
  var result = [];

  function makeFullName(obj) {
    if (obj.age >= 10 && obj.age < 20) {
      result.push(obj.name.first + ' ' + obj.name.last);
    }
  }

  salesTeam.forEach(makeFullName);
  return result;
}

var output = getTeenager(salesTeam);
console.log(output);