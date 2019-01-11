为了封装性 易用性 代码可读性
将弹幕的业务逻辑(独立) 封装成一个类 并将其模块化
直接在浏览器端引入(执行)export default;
import 模块化关键字 浏览器目前还没有支持
async 最近版本syntax
如何用面向未来的编码风格 又编译通过
写的代码 compile babel 最后执行的代码不一样

webpack
  test .js 
    babel-loader es5
webpack-dev-server http server 在这之前
它会先compile webpack

entry(入口引入更深层次的文件)
module test loader
output(出口)

- canvas 业务逻辑
  render() 负责一直画 递归
  requestAnimationFrame
  (this.render.bind(this))
  renderBarrage()
  clearRect(0,0,w,h)

- barrage
render()
哪些是可以画的？ video.currentTime >= time 完了要回收
item.flat = true render()

代码的思想
  面向对象 对象的职责和公工
  容器对象 render() 负责一直画
  业务细节对象 data item属性 render() 画
  