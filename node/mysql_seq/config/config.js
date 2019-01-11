// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

// 从.env 文件中读取数据库的配置信息
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  require('env2')('./.env.prod');
} else {
 require('env2')('./.env');
}

const { env } = process;

module.exports = {
 "development": {
   "username": env.MYSQL_USERNAME,
   "password": env.MYSQL_PASSWORD,
   "database": env.MYSQL_DB_NAME,
   "host": env.MYSQL_HOST,
   "port": env.MYSQL_PORT,
   "dialect": "mysql",
   "operatorsAliases": false,  // 此参数为自行追加，解决高版本 sequelize 连接警告
 },  
 "production": {
   "username": env.MYSQL_USERNAME,
   "password": env.MYSQL_PASSWORD,
   "database": env.MYSQL_DB_NAME,
   "host": env.MYSQL_HOST,
   "port": env.MYSQL_PORT,
   "dialect": "mysql",
   "operatorsAliases": false, // 此参数为自行追加，解决高版本 sequelize 连接警告
 }
}

