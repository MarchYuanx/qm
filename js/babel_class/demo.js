// class Person {
//   constructor (){
//     this.name = name;
//   }
// }


// es5 构造函数
function Person(name){
  this.name = name;
  _classCallCheck(this, Person);

  function _classCallCheck(instance, Constructor){
    console.log(Constructor);
    if(!(instance instanceof Constructor)){
      throw new TypeError(" Cannot call a class as a function");
    }
  }
}


console.log(Person)
console.log(Person.prototype)
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));


Person.prototype = {
  sayHello: function() {
    console.log("hello "+ this.name)
  }
}




// Person.prototype = {
//   _classCallCheck: function(instance, Constructor) {
//     console.log(Console)
//     if(!(instance instanceof Console)){
//       throw new TypeError(" Cannot call a class a function");
//     }
//   }
// }



// var p1 = Person('March');
// var p2 = new Person('Yuanx');

// console.log(typeof p1,p1)

// console.log(typeof p2,p2)



//让构造函数 不可以当做一般函数来执行


// var p1 = new Person("March");
// p1.sayHello();

// var p2 = Person("Yuanx");


// console.log("[p1]",p1)
// console.log("[p2]",p2)