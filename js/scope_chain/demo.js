// 1. 全局执行上下文 全局执行上下文压入执行上下文栈
// 2. 全局执行上下文初始化
// 3. 创建函数执行上下文 checkscope入栈
// 4. 函数被运行后 this 创建变量 作用域链

var scope = "global scope"

function checkscope(){
  var scope = 'local scope';
  //上下文环境 context 在创建时形成了上下文环境 在环境中的自由变量可以在调用时找到
  // 5. checkscope执行完毕 checkscope执行上下文从执行上下文栈中弹出
  // 6. 执行f函数创建f函数执行上下文 f函数执行上下文被压入执行上下文栈
  // 7. 执行上下文变量 作用域链this

  // 创建作用域链时，scope 保持了对checkscope函数的作用域的引用
  return function f(){
    return scope;
  }
}


var foo = checkscope();

console.log(checkscope()())
console.log(foo())

fContext = {
  Scope:[AO, checkscope.AO ,globalContext.VO]
}

checkscopeContext = {
  Scope:[AO ,globalContext.VO]
}