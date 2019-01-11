var fs = require('fs');
var path = require('path')

var findLargest = (dir, cb) => {
  fs.readdir(dir, (err, files)=>{
    if(err){
      return cb(err)
    }

    var counter = files.length;
    var errored = false;
    var stats = [];

    files.forEach((file, index)=>{
      fs.stat(path.join(dir, file),(err,stat)=>{
        // 文件的循环处理 有先有后
        if(errored) return;
        if(err){
          errored = true;
          return cb(err);
        }
        stats[index] = stat;
        if(--counter == 0){
          //什么时候文件信息都获取完
          var largest = stats
            .filter(stat => stat.isFile())
            .reduce((prev, next)=>{
              if(prev.size>next.size)
                return prev;
              return next;
            })

          cb(null, files[stats.indexOf(largest)]);
        }
      })
    })


  })
}

module.exports = findLargest