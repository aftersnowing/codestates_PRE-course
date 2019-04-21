var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function getFullName(obj) {
  if(obj.name.middle){
    return obj.name.first+' '+obj.name.middle+' '+obj.name.last;
  }else{
    return obj.name.first+' '+obj.name.last;
  }
}

function longestName(people) {
  var arr =[];
  for (var i = 0; i < people.length; i++){
    arr.push(getFullName(people[i]));
  }
  var result = arr.reduce(function (acc, cur) { 
    if(acc.length >= cur.length) {
      return acc;
    } else {
      return cur;
    }
  });
  return result;
}

longestName(people); //"Alyssa P. Hacker"