// 惰性函数
// 有些功能可以推迟执行 执行了第一次后
// 浏览器嗅探

// 函数的真正功能 等到执行了一次再决定
var foo = function(){
  console.log('--start--')
  var t = new Date();
  foo = function(){
    return t
  }
  console.log('--end--')
  return foo();
}


console.log(foo());

setTimeout(() => {
  console.log(foo());
}, 600);

setTimeout(() => {
  console.log(foo());
}, 800);


