http://localhost:3000/api web server
http://localhost:8080/data.json
http://localhost:8080/

跨域 A -> B
A 8080 index.html -> B 3000 /api
同一个domain 但是因为port 不同 跨越
JS同源(前端跟后端同源 信任)机制 如果跨域请求 不允许

连端口不一样 都会跨域 在一家公司 因为提供的服务或部门或项目不一样 需要使用跨域的能力来连调

waimai.eleme.com 子域名 外卖部门
jiudian.eleme.com 酒店 
music.qq.com 第三方api服务
同一个域名(一级, 二级) 提供不同的服务

前端 8080(react client) 后端3000(server koa) 前后端分离来并行开发 ngnix 