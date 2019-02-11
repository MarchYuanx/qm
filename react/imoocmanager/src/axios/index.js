import jsonp from 'jsonp';
import axios from 'axios';
//工程化 二次封装 错误处理

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

  static ajax(options){
    let loading;
    if(options.data && options.data.isShowLoading !== false){
      loading = document.getElementById('ajaxLoading');
      loading.style.display = 'block';
    }

    let baseApi = 'https://www.easy-mock.com/mock/5c4d8dade4522814af878461/api'
    return new Promise((resolve,reject)=>{
      axios({
        url:options.url,
        method:'get',
        baseURL:baseApi,
        timeout:5000,
        params:(options.data && options.data.params) || ''
      }).then(response => {
        if(options.data && options.data.isShowLoading !== false){
          loading = document.getElementById('ajaxLoading');
          loading.style.display = 'none';
        }

        if(response.status === 200){
          resolve(response.data)
        }else{
          reject(response.data)
        }
      })
    })
  }
}