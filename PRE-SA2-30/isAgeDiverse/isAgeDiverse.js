// You are managing a sales team and you are interested is analyzing some data related to their age and total sales.
// Take a moment to review the following data structure recorded in salesTeam.json for analysis:

if(typeof module === "object" && typeof module.exports === "object") {
  // OPEN and SEE salesTeam.js
  var salesTeam = require('../salesTeam.js');
}

var isAgeDiverse = function(salesTeam) {
  var result = true;
  salesTeam.forEach(function(obj){
    if(obj.age < 10 || obj.age >= 90){
      result = false;
    }
  });
  return result;
}
  // var teens = 0; 
  // var twenties = 0; 
  // var thirties = 0; 
  // var forties = 0; 
  // var fifties = 0; 
  // var sixties = 0; 
  // var seventies = 0; 
  // var eighties = 0;

  // function boolean (obj) {
  //   if(obj.age >= 10 && obj.age < 20){
  //     teens++
  //   } else if(obj.age >= 20 && obj.age < 30){
  //     twenties ++
  //   } else if(obj.age >= 30 && obj.age < 40){
  //     thirties++
  //   } else if(obj.age >= 40 && obj.age < 50){
  //     forties++
  //   } else if(obj.age >= 50 && obj.age < 60){
  //     fifties++
  //   } else if(obj.age >= 60 && obj.age < 70){
  //     sixties++
  //   } else if(obj.age >= 70 && obj.age < 80){
  //     seventies++
  //   } else if(obj.age >= 80 && obj.age < 90){
  //     eighties++
  //   } 
  // }

  // salesTeam.forEach(boolean);
  
  // if(teens !== 0 
  //   && twenties !== 0 
  //   && thirties !== 0 
  //   && forties !== 0 
  //   && fifties !== 0 
  //   && sixties !== 0 
  //   && seventies !== 0 
  //   && eighties !== 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }


var output = isAgeDiverse(salesTeam);
console.log(output);