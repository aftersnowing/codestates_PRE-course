// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var bodyHtml = document.body; 
  var arr = []
  
  var check = function(bodyHtml) {
  if(bodyHtml.classList && bodyHtml.classList.contains(className)) {
    arr.push(bodyHtml);
  }
  
  if(bodyHtml.hasChildNodes()) {
    for(var i = 0; i< bodyHtml.childNodes.length; i++) {
      check(bodyHtml.childNodes[i]);
    }
  }
}
  check(bodyHtml);
  return arr;
};
