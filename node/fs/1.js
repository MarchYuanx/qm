var fs = require('fs');
var date;


try{
    date = fs.readFileSync('./fileForRead.txt','utf-8');
    console.log(date);

}catch(err){
    console.error('读取文件出错'+err.message);

}


