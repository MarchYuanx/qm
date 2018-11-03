const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data:{
    userList: []
  },
  onLoad:function(){
    userInfo.get().then(res=>{
      console.log(res)
      this.setData({
        userList: res.data
      })
    })
  },
  getUserInfo: function(result){
    // console.log(result)
    // openId 用户独有 拿不到 但运函数可能拿到，好几个接口
    
    wx.cloud.callFunction({
      name:'getOpenId',
      complete: res =>{
        //用户 (一个用户生成多条记录,错误) mysql _openid unique/不重复入库
        //_openid 到userInfo里先查下 where true return false add
        console.log(res)
        let openid = res.result.openId
        userInfo.where({
          _openid:openid
        }).count().then(res =>{
          console.log(res)
          if(res.total == 0){
            userInfo.add({
              data: result.detail.userInfo
            }).then(res =>{
              // console.log(res)
            })
          }else{
            wx.showToast({
              title: '不能重复'
            })
          }
        })


        
        // console.log(res)
      }
    })
  },
  onShareAppMessage: (res) =>{
    return {
      title: '————Share——————',
      path: '/pages/index/index',
      imageUrl : 'https://636f-codingdream-74b4e5-1256758450.tcb.qcloud.la/687434.png',
      success: res=>{
        console.log('转发成功')
      },
      fail: res=>{
        console.log('转发失败')
      }
    }
  }
})
