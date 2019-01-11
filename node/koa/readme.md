- 启动web server
HTTP Server 3000 伺服

用户request(n) 中间件 response(访问结束)

图片/css/js/text 都给他们构建url 静态资源服务

中间件是有顺序的 next
response.body