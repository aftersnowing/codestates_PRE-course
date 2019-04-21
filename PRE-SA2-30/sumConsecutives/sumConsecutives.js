function sumConsecutives(s) {
    var sum = 0;
    var result = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i-1] === s[i] && s[i] !== s[i+1] && sum !== 0){
            sum+= s[i];
            result.push(sum);
            sum = 0;
        }else if(s[i] !== s[i+1]){
            result.push(s[i]);
        }else if(s[i] === s[i+1]){
            sum += s[i];
        }
    }
    return result;
}

var output = sumConsecutives([1,4,4,4,0,4,3,3,1]);
console.log(output);
