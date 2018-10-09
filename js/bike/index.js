// 首字母大写， 构造函数
var BicycleShop;
// console.log(BicycleShop); //undefined
BicycleShop = null;
// console.log(BicycleShop);
BicycleShop = function (name) {
  this.name = name;
}
BicycleShop.prototype = {
  sellBicycle: function(model) {
    // 有很多的车型
    var bicycle = BicycleFactory.createBicycle(model);
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
}
// console.log(typeof BicycleShop);
// js BicycleShop 动态类型
// 变量 =  变量名 + 值 + 类型
// 变量没有赋值前， undefined , 
// 变量的类型由值来决定
// 类型决定变量的职责和功能
var BicycleFactory = function() {
}
BicycleFactory.createBicycle = function(model) {
  let bicyle;
  switch(model) {
      case 'The Speedster':
        bicycle = new Speedster();
        break;
      case 'The Lowrider':
        bicycle = new Lowrider(); 
        break;
      // case 'The Comfort Cruiser':
      //   bicycle = new ComfortCruiser();   
      //   break;
      // 缺点，新增品牌时， 软件要下线 
      // 剥离选择自选车的业务 工厂模式
    //   case 'UC':
    //     bicycle = new UC();
    //     break;
      default:
        bicycle = new Giant();
        model = 'Giant';
    }
  console.log(model);
  console.log('￥'+bicycle.price);
  return bicycle;
}

function Bicycle(){
    // console.log(Bicycle.name);
}
Bicycle.prototype = {
    assemble: function() {
      console.log('已组装完成');
    },
    wash: function() {
      console.log('为您清洗好了，感谢您购买');
    }
}


//实现继承
Speedster.prototype = new Bicycle;
Lowrider.prototype = new Bicycle;
ComfortCruiser.prototype = new Bicycle;
Giant.prototype = new Bicycle;


function Speedster() {
    // this.brand = Speedster.name;
    // console.log(this.brand);
    this.price = 800; 
}
// Speedster.prototype = {
//   assemble: function() {},
//   wash: function() {}
// }



function Lowrider() {
    this.price = 500;        
}


function ComfortCruiser() {
    this.price = 1000;
}


function Giant() {
    this.price = 2000;
}


var bicycleShop = new BicycleShop('-----车行-----');
console.log(bicycleShop.name);
var bicyle = bicycleShop.sellBicycle('The Speedster');