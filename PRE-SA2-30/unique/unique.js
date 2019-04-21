function unique(array) {
  var arr = [];
  array.sort();
  for(let i = 0; i < array.length; i++){
    if(array[i] !== array[i+1]){
      arr.push(array[i]);
    }
  }
  return arr;
}

var output = unique([1,2,2,4,6,6]); // should be [1,2,4,6]
console.log(output);