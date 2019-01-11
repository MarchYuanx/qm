const Promise = require('./promise.js');

const p = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve('test');
  },1000)

})

p
  .then((data) => {
    console.log("[data]",data);
  },err =>{
    console.error(err);
  })