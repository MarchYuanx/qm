- 数据保存
  1. localStorage 小的 ，简单的数据结构
  复杂组合 JSON.stringify()
  JSON.parse() 2-6M 间
  中奖次数和奖品， 不用去后端取
  2. cookie
  cookie 就是一个字符串 key=val; key2=val2 非常重要的信息 并且在每次http请求时都会带上

- indexDB 让前端释放野心的数据库，前端的MongoDB
  1. request
    window.indexDB().open(dbname,dbversion)
  2. 异步的 
    onsuccess 开始数据业务
    onupgradeneeded 开始更新数据库
    db.createObjectStore()
    objectStore.createIndex('email','email',{unique: true})
  3. 事务 
    transaction 让数据存储更安全
    add request onsuccess