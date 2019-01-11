function Parent (name) {
  this.name = name;
  this.color = ['red','blue','green'];
}

Parent.prototype.getName = function(){
  console.log(this.name);
}

function Child (name, age){
  Parent.call(this, name); // == super
  this.age = age;
}

// Child.prototype = Parent.prototype;
Child.prototype = new Parent();
Child.prototype.constructor = Child;

Child.prototype.sayHello = function(){
  console.log(`Hi, I am ${this.name}, I am ${this.age} years old.`)
}

console.log(Parent.prototype);
console.log(Child.prototype);

var c1 = new Child('March',20);

c1.getName()
c1.sayHello()

console.log(Child.prototype.constructor)
