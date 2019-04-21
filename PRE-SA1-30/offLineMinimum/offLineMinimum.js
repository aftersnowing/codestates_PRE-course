function offLineMinimum(strArr) {
  // YOUR CODE HERE
  var arr = [];
  var result = [];
  for(var i = 0; i < strArr.length; i++){
    if(strArr[i] === 'E'){
      arr.sort(function(a,b){
        return a - b;
      });
      result.push(arr[0]);
      arr.shift();
    }else {
    arr.push(Number(strArr[i]));
  }
}
  return result.join(',');
}

offLineMinimum(["1","2","E","E","3"]); // => '1,2'
offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'
