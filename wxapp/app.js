App({
  onLaunch: function(){  
    console.log('应用启动'); 
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      // header: {
      //   'Content-Type': 'application/json'
      // },
      success:(res) => {
        
        // const {slides,vehicles,stories} = res.data;
        // console.log(slides,vehicles,stories);
     
        
        Object.assign(this.globalData,res.data);
        console.log('this.globalData');
        console.log(this.globalData);

      },
      error:(err) => {
        console.log(err);
      }
    })
    
  },
  //全局数据 App.js 是全局的,用户的登入状态
  globalData:{
    motto:'global motto',

  }  
})