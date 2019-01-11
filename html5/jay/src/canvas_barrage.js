import Barrage from './barrage.js'

class CanvasBarrage {
  constructor(canvas, video, opts = {}) { 
    if (!canvas || !video) return;
    this.canvas = canvas;
    this.video = video;
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    this.ctx = canvas.getContext('2d');
    let defOpts = { //默认 danmu, 安全的data 初始化
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }
    
    Object.assign(this, defOpts, opts);
    // console.log(this);
    this.isPaused = true;
    this.barrages = this.data.map(item => new Barrage(item, this));
    // 如何将上述属性直接挂载到对象上， opts {data: []}
  }
  render () {
    this.clear();
    this.renderBarrage();
    if (!this.isPaused) {
      // 普通函数， this 指向window
      // bind this
      requestAnimationFrame(this.render.bind(this));
    }
  }
  clear () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  renderBarrage() {
    let time = this.video.currentTime;
    console.log(time);
    this.barrages.forEach(barrage => {
      if (!barrage.flag && time >= barrage.time) {
        barrage.x -= barrage.speed;
        barrage.render();
      }
      // barrage 超出了屏幕 当时间到了， 最右边，走过整个canvas的宽度， 消失了
      // clear 
      if (barrage.x < - barrage.width) {
        barrage.flag = true
      }
    });
  }
}

export default CanvasBarrage;
