// egret Main 类
class Main extends egret.DisplayObjectContainer{
  constructor(){
    super();  
    //如果子类要有自己的构造函数代码 先运行父类构造函数
    this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
  }
  onAddToStage(event){
    let textField = new egret.TextField();
    this.addChild(textField);
    textField.textColor = 0xff5151;
    textField.text = "宋哈娜"
  }
}

window["Main"] = Main;
egret.runEgret();