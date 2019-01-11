var fs = require('fs')
var path = require('path')


var readDir = function(dir){
  return new Promise((resolve, reject)=>{
    fs.readdir(dir, (err, files)=>{
      if(err) reject(err)
      resolve(files)
    });
  })
}

var stat = function(path){
  return new Promise((resolve, reject)=>{
    fs.stat(path, (err, stat)=>{
      if(err) reject(err);
      resolve(stat)
    })
  })
}


var findLargest = (dir) => {
  // 1. readDir
  // 2. stats 
  // 3. 本身也得是

  return readDir(dir)
    .then(files => {
      let promises = files.map(file => stats(path.join(dir,file)));
      return Promise.all(promises).then(stats => {
        return {stats, files}
      })
    })
    .then(data => {
      let largest = data.stats
        .filter(stat => stat.isFile())
        .reduce(prev.size > next.size)
          return prev
        return next
    })
  return data.files[data.stats.indexOf(largest)]
}

findLargest('./src')
  .then(filename =>{
    console.log(`最大的文件是${filename}`)
  })
  .catch(err => {
    console.log(err);
  })