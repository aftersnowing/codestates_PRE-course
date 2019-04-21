function hammingDistance(strArr) {
  // YOUR CODE HERE
  var count = 0;
  for(var i = 0; i < strArr[0].length; i++){
    if(strArr[0][i] !== strArr[1][i]){
      count++
    }
  }
  return count;
}

hammingDistance(["coder", "codec"]); // => 1
hammingDistance(["10011", "10100"]); // => 3
hammingDistance(["helloworld", "worldhello"]); // => 8
