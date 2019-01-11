function Parent(name){
  this.name = name;
}

let p = new Parent("rick")
console.log(Parent.prototype)
console.log(Parent.__proto__)
console.log(p.prototype)
console.log(p.__proto__)