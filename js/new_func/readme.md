new 到底做了什么
let p = new Person();
p 是 Object类型,Person 函数类型 typeof 

1. Person 被执行加了new后 Person 函数会在p的作用域下执行 
    this指向p 构造函数里的属性被当作p的属性被创建
2. p.__proto__ 指向Person.prototype p 继承了 Person.prototype中的属性和方法

