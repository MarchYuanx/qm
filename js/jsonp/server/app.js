const Koa = require('koa');
const app = new Koa(); // 后端应用
const router = require('koa-router')();

// MVVM 前端 Model-View-ViewModel
// MVC 后端 Model-View-Controller
 
router.get('/api',(ctx)=>{
  const data = {
    name: 'sasuke',
    age: 16
  }
  ctx.body = JSON.stringify(data);
});

// koa 实现是middlewares compose
app.use(router.routes());
app.listen(3000)