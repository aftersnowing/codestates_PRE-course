// var stringifyJSON = function(obj) {
//     if(typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
//         return '' + obj;
//         } else if(typeof obj === 'string') {
//         return '"' + obj + '"';
//         }



//         var bin = [];
//         if(Array.isArray(obj)) {
//         if(obj.length === 0) {
//         return '[]';
//         } else {
//         for(var i = 0; i < obj.length; i++) {
//         if(typeof obj[i] === 'string') {
//         var str = stringifyJSON(obj[i]);
//         bin.push(str);
//         } else if(Array.isArray(obj[i])) {
//         var arr = stringifyJSON(obj[i]);
//         bin.push(arr);
//         } else if(typeof obj[i] === 'number') {
//         bin.push(obj[i]);
//         } else {
//         var ifObj = stringifyJSON(obj[i]);
//         bin.push(ifObj);
//         }
//         }
//         return '[' + bin + ']';
//         }
//         } else { 
//         var createdArr = [];
//         if(Object.keys(obj).length === 0) { 
//         return '{}';
//         } else {
//         for(var key in obj) {
//         if(typeof obj[key] === 'string' || typeof obj[key] === 'boolean' || obj[key] === null) {
//         var strKey = stringifyJSON(key);
//         var strVal = stringifyJSON(obj[key]);
//         var strArr = strKey + ':' + strVal;
//         createdArr.push(strArr);
//         } else if(Array.isArray(obj[key])) {
//         var arrKey = stringifyJSON(key);
//         var arrVal = stringifyJSON(obj[key]);
//         var arrArr = arrKey + ':' + arrVal;
//         createdArr.push(arrArr);
//         } else if(typeof obj[key] === 'function' || obj[key] === undefined) {
//         delete obj[key];
//         stringifyJSON(obj);
//         } else {
//         var objKey = stringifyJSON(key);
//         var objVal = stringifyJSON(obj[key]);
//         var objObj = objKey + ':' + objVal;
//         createdArr.push(objObj);
//         }
//         }
//         }
//         return '{' + createdArr + '}';
//         }
// }



// function sumAll(arr){
//         return ((arr[0] + arr[1]) / 2) * (Math.abs(arr[0] - arr[1]) + 1)
// };



// function diffArray(arr1, arr2) {
//         return [...arr1.filter(n => arr2.indexOf(n) === -1), ...arr2.filter(n => arr1.indexOf(n) === -1)]; 
// }
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));



// function solution(strings, n) {
//         // strings 배열
//         // n 번째 문자열 비교
//         return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
//     }

//     function solution(strings, n) {
//         var answer = strings;
//         return answer.sort((a,b) => {
//             var k = a.charCodeAt(n)-b.charCodeAt(n)
//             return (k == 0)?a.localeCompare(b):k
//         });
//     }




// function solution(strings, n) {
//         return strings.sort((s1, s2) => {
//                 if(s1[n] === s2[n]){
//                         if(s1 < s2){
//                                 return -1
//                         }else if(s1 > s2){
//                                 return 1
//                         }else if(s1 === s2) {
//                                 return 0
//                         }
//                 }else{
//                         if(s1[n] < s2[n]){
//                                 return -1
//                         }else if(s1[n] > s2[n]){
//                                 return 1
//                         }else if(s1[n] === s2[n]) {
//                                 return 0
//                         }
//                 }
//         });
// }



// function alpha_string46(s){
//         var regex = /^\d{6}$|^\d{4}$/;
//         return regex.test(s);
// }


// var lowerCase = s.match(/[a-z]/g).sort((a,b) => a > b ? -1 : a < b ? 1 : 0)
// var upperCase = s.match(/[A-Z]/g).sort((a,b) => a > b ? -1 : a < b ? 1 : 0)
// return lowerCase.concat(upperCase).join('')


// var arr = [2];
// for(let i = 3; i <= n; i++){
//     var p = Math.floor(Math.sqrt(i));
//     for(var j = 0; j < arr.length; j++){
//         if(i % arr[j] === 0 || arr[j] > p){
//             break;
//         }
//     }
//     if(arr[j] > p){
//         arr.push(i)
//     }
// }
// return arr.length;



// var count = 1;
// for(let i = 3; i <= n; i++){
//     var p = Math.floor(Math.sqrt(i));
//     for(var j = 2; j <= p; j++){
//         if(i % j === 0){
//             break;
//         }
//     }
//     if(j === p + 1){
//         count ++
//     }
// }
// return count;



// var arr = [2];
// for(let i = 3; i <= n; i++){
//     for(var j = 0; j < arr.length; j++){
//         if(i % arr[j] === 0){
//             break;
//         }
//     }
//     if(j === arr.length){
//         arr.push(i)
//     }
// }
// return arr.length;



function caesar(s, n) {
        var result = "";
        // 함수를 완성하세요.
      var car = ""
    
      for (var i=0; i<s.length;i++)
      {        
        if ( s[i] == ' ' )
          result += ' '
        else 
            result += String.fromCharCode( (s.charCodeAt(i)>90)?
          (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )     
      }
    
        return result;
    }
// charCodeAt으로 구하는 시저암호



// function caesar(s, n) {
//         var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);
    
//         return result;
//     }
// //정규 표현식으로 구하는 시저암호



// function toWeirdCase(s){
//   return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
// }
// //정규표현식으로 각 단어마다 짝수 인덱스 대문자, 홀수 인덱스 소문자 바꿔서 출력하기



// function toWeirdCase(s){
//   var result = "";
//     var num = 0;

//   console.log(s.length);

//   for(var i = 0; i < s.length; i++){
//    if(s.charAt(i) == " "){
//     num = 0;
//     result += " ";
//     continue;
//    }
//     else if(num % 2 == 0){
//       result += (s.charAt(i)).toUpperCase();
//       num++;
//     }
//     else{
//       result += (s.charAt(i)).toLowerCase();
//       num++; 
//     }
//   }
//   //정규표현식으로 각 단어마다 짝수 인덱스 대문자, 홀수 인덱스 소문자 바꿔서 출력하기



// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// Passed
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// Passed
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// Passed
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// Passed
// spinalCase("AllThe-small Things") should return "all-the-small-things".


// function spinalCase(str) {

//   console.log(str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase())
// }
// spinalCase('This Is Spinal Tap')


// function allowance (money){
//   var arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
//   return arr.map((el) => {
//     var count = Math.floor(money / el);
//     money = money % el;
//     return count
//   })
// }
// console.log(allowance(50237));
// // 우아한 테크코스 코딩테스트 첫번째문제



// function frogWord (word){
//   return word.replace(/[a-z]/gi, match => match === match.toLowerCase() ? 
//     String.fromCharCode(97 + (122 - match.charCodeAt())) : 
//     String.fromCharCode(65 + (90 - match.charCodeAt()))
//     )
// }
// console.log(frogWord('I love you'))
// // 우아한 테크코스 코딩테스트 세번째문제



// function game(p, c){
//   if(p[1] - p[0] !== 1 || c[1] - c[0] !== 1){
//     return -1
//   }

//   function maxSum(arr) {
//     var result = [];
//     for(let i = 0; i < arr.length; i++){
//       result.push(arr[i].toString().match(/\d/g).reduce((acc,cur) => Number(acc) + Number(cur)))
//     }
//     return result
//   }

//   function maxMultiply(arr) {
//     var result = [];
//     for(let i = 0; i < arr.length; i++){
//       result.push(arr[i].toString().match(/\d/g).reduce((acc,cur) => acc * cur))
//     }
//     return result
//   }
//   var maxP = Math.max(...maxSum(p), ...maxMultiply(p));
//   var maxC = Math.max(...maxSum(c), ...maxMultiply(c));

//   return maxP > maxC ? 1 : maxP < maxC ? 2 : 0
// }
// console.log(game([131, 134], [211, 212]))
// // 우아한 테크코스 네번쨰문제



// function clap (number){
//   var result = 0;
//   for(let i = 1; i <= number; i++){
//     var countArr = i.toString().match(/[369]/g);
//     if(countArr){
//       result += countArr.length
//     }
//   }
//   return result
// }
// console.log(clap(33));
// // 우아한 테크코스 다섯번째 문제



function cryptogram (word){
  var arr = word.split('');
  function forLoop(arr){
    var newArr = arr.filter(el, i => el)
  }
}