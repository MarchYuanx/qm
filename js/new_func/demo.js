// Otaku类 抽象概念 
function Otaku(name, age){
  this.name = name;
  this.age = age;
  this.habit = 'Games';
}

Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function() {
  console.log('I am ' + this.name);
}

// new
// 1. 返回一个实例{} 拥有Otaku 函数中加的那些属性
// 2. 让我们的实例访问到 Otaku.prototype 中的属性

// new? js 关键字
function objectFactor(fn, ...args){

  // 返回新的空的对象
  console.log(arguments);
  var obj = new Object(),
  Constructor = [].shift.call(arguments);
  console.log(arguments);

  Constructor.apply(obj, arguments);
  // this指向新的对象
  // 让Constructor执行
  // fn.apply(obj, ...args)
  obj.__proto__ = Constructor.prototype
  console.log(obj.__proto__)
  console.log(obj.prototype)
  console.log(fn.prototype)
  console.log(Constructor.prototype)
  return obj;
}
// 1. 构造函数
// 2. 其余是构造函数需要的参数
const didi = objectFactor(Otaku,'sasuke',18);


