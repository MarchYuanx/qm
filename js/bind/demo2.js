Function.prototype.bind2 = function(context){
  console.log('---bind---')   
  //返回被绑的函数
  //新函数在运行的时候 this指向context
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1)
  return function(){  
    var bindArgs = Array.prototype.slice.call(arguments)
    self.apply(context, args.concat(bindArgs)) 
  }
}

var obj = {
  value : 1,
  obj : 'obj',
}

const foo = function(name, age) {
  console.log('[value]',this.value)
  console.log('[name]',name,' [age]', age)
}

const fooBar = foo.bind2(obj, 'daisy')
fooBar(18)