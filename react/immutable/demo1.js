const Immutable = require('immutable');

let obj1 = Immutable.Map({a:1,b:2,c:3});//prevState
let obj2 = obj1;// nextState

console.log(obj1===obj2)
console.log(obj1);
console.log(obj2);

obj2 = obj2.set("b",22)
//传统的引用式赋值就不行 深拷贝来处理 不用太大阵仗

console.log(obj1===obj2)
console.log(obj1);
console.log(obj2);