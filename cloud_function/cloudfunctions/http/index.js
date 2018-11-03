// require + module.exports   js 模块化规范， commonJS
// import from  export default  es6 模块化   node 6以下不支持

// 云函数入口文件



const cloud = require('wx-server-sdk')
const got = require('got')


cloud.init()
const db = cloud.database()
// async 是函数修饰符 es7,让异步的代码同步化
exports.main = async () =>{

    //用户表 userInfo
    //图片表 photos

    const photoInfos = []
    const photos = await db.collection('photos').get()
    console.log(photos)

    

    // photos.array.forEach(photo => {
        
    //     let openid = photo._openid
    //     const user = await db.collection('userInfo').where({
    //         _openid:openid
    //     }).get()
    //     if(user.data.length>0){
    //         photo.user = user.data[0]
    //     }
    //     photoInfos.push(photo)
    // });

    for(let i = 0; i < photos.data.length; i++) {

        const photo = photos.data[i]
        let openid = photo._openid
        const user = await db.collection('userInfo').where({
            _openid:openid
        }).get()
        if(user.data.length>0){
            photo.user = user.data[0]
        }
        photoInfos.push(photo)

    }

    return photoInfos

    //费时 异步的 但是想保持执行的顺序和阅读的顺序
    // let getResponse = await got('httpbin.org/get')
    // console.log(getResponse)
    // let postResponse = await got('httpbin.org/post',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify({
    //         title: '这是标题',
    //         value: 123,
    //         name: 'March'
    //     })
    // })
    // console.log(postResponse)
    // // await 让我们的代码等待一下 只有async
    // return postResponse.body
}