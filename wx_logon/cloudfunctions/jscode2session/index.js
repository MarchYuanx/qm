// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring')
const request = require('request')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let { code } = event;
    console.log(code);
    let id = 'wx2e879ed38e74ed2d';
    let secretKey = '66377ee7a011ff3c45aff995470cca5e';
    const data = {
        appid: id,
        secret: secretKey,
        js_code: code,
        grant_type: 'authorization_code',
    }
    let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`;
    console.log(url);
    return new Promise((rsolve, reject)=>{
        request.get(url,(error,response,body)=>{
            if(error || response.statusCode !== 200){
                reject(error)
            }else {
                try{
                    console.log(body);
                    const r = JSON.parse(body);
                    resolve(r);
                }catch{
                    
                }
            }
        })

    })
}