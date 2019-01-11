const Koa = require('koa');
const app = new Koa();
const fs = require('fs.promised');


const main = async (ctx, next) => {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFileSync('./template.html','utf8')
}

app.listen(3000);