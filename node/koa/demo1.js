const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const fs = require('fs');

var router = new Router();

// ctx 上下文环境
// const main = ctx => {
  // ctx.response.body = 'Hello World';

  // ctx.response.type = 'html';
  // ctx.response.body = fs.createReadStream('./template.html');

  // if (ctx.request.path !== '/'){
  //   ctx.response.type = 'html';
  //   ctx.response.body = '<a href="/">Index Page</a>';
  // } else {
  //   ctx.response.body = 'Hello World ~';
  // }

// }


router
  .get('/',(ctx)=>{
    console.log(ctx)
    ctx.response.body = 'Hello World';
  }).get('/about',(ctx)=>{
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/"> Index Page ~ </a>'
  })


// template.html V main C


app.use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);