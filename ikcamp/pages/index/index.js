//index.js
//获取应用实例
import config from "../../utils/config"



const app = getApp()

Page({
  data: {
    page:1,
    pageSize:4,
    totalSize:0,
    days:3,
    hasMore:true,
    articleList:[],

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showDetail: function(e) {
    let dataset = e.currentTarget.dataset;
    let item = dataset && dataset.item;
    let contentId = item.contentId || 0;
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    });
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    let title = config.defaultBarTitle;
    wx.setNavigationBarTitle({
      title,
      success: function(res){

      }
    })


    this.requestArticle();
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  requestArticle: function(){
    wx.request({
      url:'https://www.easy-mock.com/mock/5bca924ce6742c1bf8220bdd/kicamp/list#!method=get',
      success:(res)=>{
        let list = this.data.articleList;
        list = [...list,...res.data.data];

        console.log(list);

        this.setData({
          hiddenLoading:true,
          articleList:list
        })

        
        
      }
    })
  },
  onReachBottom(){
    if(this.data.hasMore){
      let nextPage = this.data.page + 1;
      this.setData({
        page:nextPage
      })
    }
    this.requestArticle();

    console.log('到页面底部了');
    console.log('page:'+this.data.page);
  }
})
