// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if(typeof obj === 'number' || obj === null || typeof obj === 'boolean'){
    return '' + obj
  }else if(typeof obj === 'string'){
    return '\"' + obj + '\"'
  }else if(obj === []){
    return '[]'
  }else if(Array.isArray(obj) && obj !== []){
    return strArr(obj)
  }else if(obj === {}){
    return '{}'
  }else if(typeof obj === 'object' && obj !== {}){
    return strObj(obj)
  }

  function strArr (obj){
    var result = '';
    for(let i = 0; i < obj.length; i++){
      if(typeof obj[i] === 'number' || obj[i] === null || typeof obj[i] === 'boolean'){
        result += obj[i];
      }else if(typeof obj[i] === 'string'){
        result += '\"' + obj[i] + '\"';
      }else if (obj[i] === undefined 
        || typeof obj[i] === 'function' 
        || obj[i] === NaN 
        || obj[i] === Infinity){
        result += null;
      }else if(Array.isArray(obj[i])){
        result += strArr(obj[i]);
      }else if(typeof obj[i] === 'object'){
        result += strObj(obj[i]);
      }

      if(i !== obj.length - 1){
      result += ','
      }
    }
    result = '[' + result + ']';
    return result;
  }

  function strObj (obj){
    var result = '';
    var count = 0;
    for(var key in obj){
      count ++;
      if(typeof obj[key] === 'number' || obj[key] === null || typeof obj[key] === 'boolean'){
        result += '\"' + key + '\"' + ':' + obj[key];
      }else if(typeof obj[key] === 'string'){
        result += '\"' + key + '\"' + ':' + '\"' + obj[key] + '\"';
      }else if(obj[key] === undefined 
        || typeof obj[key] === 'function' 
        || obj[key] === NaN 
        || obj[key] === Infinity){
          break;
      }else if(Array.isArray(obj[key])){
        result += '\"' + key + '\"' + ':' + strArr(obj[key]);
      }else if(typeof obj[key] === 'object'){
        result += '\"' + key + '\"' + ':' + strObj(obj[key]);
      }
      if(Object.keys(obj).length !== count){
        result += ','
        }
    }
    result = '{' + result + '}';
    return result;
  }
};
