var arr = [{old: 'old'},['old']];

// var new_arr = arr.concat();

var new_arr = JSON.parse(JSON.stringify(arr));

new_arr[0].old = "new obj old";
new_arr[1][0] = "new arr old";


// 深浅自知 浅拷贝有他的应用场景 更高效

console.log(arr)
console.log(new_arr)