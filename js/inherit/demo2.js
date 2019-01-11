function Person() {
  this.names = ['kevin','daisy'];
}

function Child() {
  // 得到Person的属性
  Person.call(this)
}
// 子类拥有父类上的属性
var child1 = new Child();
child1.names.push('yuya');
console.log(child1.names);

var child2 = new Child();
console.log(Person.prototype);
console.log(Child.prototype);

