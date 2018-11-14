import { loadImage } from "./assetUtil";

class Main extends egret.DisplayObjectContainer{
  constructor(){
    super();  
    //如果子类要有自己的构造函数代码 先运行父类构造函数
    this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
  }
  onAddToStage(event){
    // let textField = new egret.TextField();
    // this.addChild(textField);
    // textField.textColor = 0xff5151;
    // textField.text = "D.va 宋哈娜 "

    this.createGame();
  }
  async createGame(){
    // 加载资源 并行 Promise.All
    const assets = [
      'assets/background.png',
      'assets/hero.png',
      'assets/enemy.png'
    ];
    // loadImage Promise
    // assets => Promise[]
    const bitmaps = await loadImage(assets) as egret.Bitmap[];
    const [bg, hero, enemy] = bitmaps;
    this.addChild(bg);
    this.addChild(hero);
    this.addChild(enemy);

    this.centerAnchor(hero);
    this.centerAnchor(enemy);

    enemy.x = this.stage.stageWidth/2;
    console.log(this.stage.stageWidth)
    enemy.y = 200;

    hero.x = this.stage.stageWidth/2 ;
    hero.y = this.stage.stageHeight - 150;

  }
  centerAnchor(displayObject: egret.DisplayObject){
    displayObject.anchorOffsetX = displayObject.width / 2;
    displayObject.anchorOffsetY = displayObject.height / 2;

  }
}




window["Main"] = Main;
egret.runEgret(); 