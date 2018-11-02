// canvas 画布 window
require('./js/libs/weapp-adapter');
// 小程序没有dom BOM 不维护了
// console.log(canvas);
// console.log(window);

window.p2 = require('./js/libs/p2');
window.PIXI = require('./js/libs/pixi');
window.Phaser = require('./js/libs/phaser-split');

window.WIDTH = 750; //设计稿的大小 跟canvas 比例转换
window.SCALE = WIDTH / canvas.width
window.HEIGHT = canvas.height * SCALE//等比例高度

console.log(canvas.width,canvas.height)
console.log(SCALE)
console.log(WIDTH, HEIGHT)

wx.onShareAppMessage(()=>{
    return {
        title: '井字棋大作战',
        imageUrl: 'images/share.png'
    }
})

wx.showShareMenu({
    withShareTicket: false
})

window.go = {
    game: null,
    userInfo: null,
    opponentInfo: null,

    common: require('js/common')
  }

const config = {
    width: WIDTH,
    height: HEIGHT,
    renderer: Phaser.CANVAS, //游戏的渲染方式是canvas, webgl

    canvas: canvas
}

const game = new Phaser.Game(config); 
go.game = game;
game.state.add('start', require('./js/states/start'));
game.state.add('menu', require('./js/states/menu'));
game.state.start('start')