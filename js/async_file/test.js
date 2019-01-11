var fileFinder = require('./demo1');


console.log(fileFinder)
fileFinder('./src',function(err, filename){
  if(err){
    return console.error(err)
  }
  console.log(filename)
});


