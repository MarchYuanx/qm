var arr = ['old', 1, true, null, undefined];
// var new_arr = arr;

var new_arr = arr.concat();
// var new_arr = arr.slice();
// slice concat 返回数组新方法 浅拷贝


new_arr[0] = 'young';
//未来未为可知 js bad parts
console.log(arr)
console.log(new_arr)

//Immutable

