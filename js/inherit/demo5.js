function Person(name){
  this.name = name;
}

let p = new Person('张三');
// p.prototype = Person.prototype;

console.log(Person)
console.log(typeof Person)
console.log(typeof p)
console.log(Person.prototype)
console.log(p.prototype)

console.log(Person.__proto__)
console.log(p.__proto__)

// console.log(Person.prototype.constructor )
// console.log(Person.prototype.constructor === Person)