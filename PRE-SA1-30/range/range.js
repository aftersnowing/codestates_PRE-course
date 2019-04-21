function range(start, end) {
  // YOUR CODE HERE
  var result = [];
  if(start < end){
  for(var i = start; i < end; i++){
    result.push(i);
  }
}
return result;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []