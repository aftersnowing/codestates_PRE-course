function getFullName(obj) {
  if(obj.name.middle){
    return obj.name.first+' '+obj.name.middle+' '+obj.name.last;
  }else{
    return obj.name.first+' '+obj.name.last;
  }
}

var person = {
  name : {
    first : "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age : 26
};
getFullName(person); //"Alyssa P. Hacker"

var personB = {
  name: {
    first: "Ben",
    last: "Bitdiddle"
  },
  age: 34
};
getFullName(personB); //"Ben Bitdiddle"