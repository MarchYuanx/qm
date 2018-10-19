// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts:[],
    totalPrice: 0,
    selectAllStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    setTimeout(() => {
      this.setData({
        hasList: true,
        carts:[{
            id: 1,
            title: 'iphone X ',
            num: 1,
            price: 10000,
            selected:true,
            image:'/image/s5.png'
          },{
            id: 2,
            title: 'iphone 8 ',
            num: 5,
            price: 1000,
            selected:true,
            image:'/image/s6.png'
          },{
            id: 3,
            title: 'luxun book ',
            num: 7,
            price: 100,
            selected:false,
            image:'/image/s4.png'
          }]
      });
      this.getTotalPrice();
    },600)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取购物车总价
   */
  getTotalPrice: function(){
    let carts = this.data.carts;
    let total = 0;
    for(let i=0;i<carts.length;i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].price;
      }      
    }

    this.setData({
      totalPrice:total
    })
    console.log(total);
    return total;
  },
  selectedList:function(e){
    const index = e.currentTarget.dataset.index;
    const carts = this.data.carts;
    carts[index].selected = !carts[index].selected;

    let isAllSelected = this.getAllSelectStatus(carts);
    
    this.setData({
      carts,
      selectAllStatus: isAllSelected
    })
  
    this.getTotalPrice();
  },
  deleteList:function(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts = carts.filter((cart,i)=>{
      return index!=i;
    })
   

    let isAllSelected = this.getAllSelectStatus(carts);
    
    this.setData({
      carts,
      selectAllStatus: isAllSelected
    })


    if(!carts.length){
      this.setData({
        hasList:false
      })
    }
    this.getTotalPrice();
  },
  getAllSelectStatus: function(carts) {
    let selectedCount = 0;
    for(let cart of carts) {
      if (cart.selected) {
        selectedCount++
      }
    }
    let isAllSelected = false;
    if (selectedCount == carts.length)
      isAllSelected = true
    return isAllSelected;
  },
  selectAll:function(e){
    let carts = this.data.carts;
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;

    carts.forEach((item, index) => {
      item.selected = selectAllStatus
    })

    this.setData({
      carts,
      selectAllStatus
    })


    this.getTotalPrice();
  },

  



})
