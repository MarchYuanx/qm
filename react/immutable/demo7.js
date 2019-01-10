var deepCopy = function(obj){
  if(typeof obj !== 'object') return ;
  var newObj = obj instanceof Array ? [] : {} ;
  for (var key in obj){
    console.log(typeof obj[key]);
    if(obj.hasOwnProperty(key)){
      newObj[key] = typeof obj[key] === 'object'? 
      deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}



var arr = {sa:22 ,ass: 2234, oks: 0923}
//var arr = ['old', 1, true, [2, 4, {a:2,b:5}]];
var new_arr = deepCopy(arr);

// new_arr[3] = [24, 54];
new_arr[3] = 22;

console.log(arr);
console.log(new_arr);