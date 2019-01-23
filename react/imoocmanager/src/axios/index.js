import jsonp from 'jsonp';
export default class Axios{
  static Jsonp(options){
    return new Promise((resolve,reject)=>{
      jsonp(options.url,{
        param: 'callback'
      },function(err,response){
          // console.log('response',response)        
          if(response.resultcode === '200'){
            resolve(response);
          }else{
            reject(response.message);
          }
      })
    })
  }
}