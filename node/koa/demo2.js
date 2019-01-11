const Koa = require('koa');
const app = new Koa();
const path = require('path');
const staticSever = require('koa-static');

app.use(staticSever(path.join(__dirname)));
app.listen(3000);