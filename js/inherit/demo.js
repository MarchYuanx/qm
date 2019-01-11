function Parent() {
  this.name = 'march';
}
// 原型链对象 { } prototype? 任何函数都
// 可以有的属性
Parent.prototype.getName = function() {
  console.log("proto",this.name);
}

// 原型链继承
function Child () {
}
Child.prototype = new Parent();
var child1 = new Child();
// child1.names.push('yayu');
console.log("child",child1.getName());
