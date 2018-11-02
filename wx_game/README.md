1. weapp-adapter
    全局的window canvas对象
    降低了游戏开发的门槛


2. canvas的比例问题
    宽度是手机宽度
    设计稿 750
    设计稿大小 * canvas /750
    canvas.width 和image 都可以width

3. 游戏框架已准备好大多数框架 Game State

    cocos-2d 2d
    phaser 2d
    Egret 2d typescript
    three.js 3d 
    js/libs/
    js/states 场景 -> 界面
        proload 加载资源 create 绘制
        
    es6 extends 模块化机制 封装