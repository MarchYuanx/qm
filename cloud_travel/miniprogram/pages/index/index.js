
wx.cloud.init({

})

const db = wx.cloud.database()

Page({
  data:{
    ads:[],
    item:{
      user:{
        avatar:'',
        nickname: 'march',
        summary:'冰岛环游记'
      }
    }
  },
  onLoad:function(){
    db.collection("ads").get({
      success: (adsRes)=> {
        console.log(adsRes.data)
        this.setData({
          ads: adsRes.data
        })
        // 小程序前端搞不定的时候 openid  需要复杂计算 async await 三个数据库的综合查询不宜在前端干太多
        // 查询 select MongoDB no-sql find() where() orderby排序 limit 限制条数 skip 忽略
        // 2页 skip(10).limit(10)
        // 3页 get().skip(20).limit(10)
        wx.cloud.callFunction({
          name: "getTravelInfo",
          data:{
            count:5,
            starIndex:0
          },
          success: res =>{
            console.log(res)
          }
        })
      }
    })
  }
})