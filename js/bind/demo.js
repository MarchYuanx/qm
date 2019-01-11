function bar (name, age){
  console.log(this.value)
}
var foo = {
  value : 1
}

var obj = {
  value : 2
}

var bindFoo = bar.bind(foo)
var bindObj = bar.bind(obj)

// var bf = bindFoo('test',11)
// var bo = bindObj('test',11)

console.log(typeof bindFoo)
console.log(bindFoo)




