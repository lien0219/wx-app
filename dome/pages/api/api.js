// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:['A','B','C']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中。。。',
      mask:true
    })
    setTimeout(()=>{
      wx.hideLoading()
    },2000)

    wx.setNavigationBarTitle({
      title: 'onload中修改标题',
    })
    // 背景颜色
    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000',
    })
  },

  Btn(){
    // 界面交互
    // wx.showToast({
    //   title: '发布成功',
    //   icon:'success',
    //   mask:true,//开启遮罩层
    //   success:res=>{
    //     console.log("1111");
    //   }
    // })
    // wx.showModal({
    //   title: '是否删除',
    //   // content:'删除后不可恢复',
    //   editable:true,
    //   placeholderText:'请输入。。。。',
    //   success:(res)=>{
    //     console.log(res);
    //   }
    // })
    wx.showActionSheet({
      itemList: this.data.listArr,
      success:(res)=>{
        console.log(res);
      },
      fail:(res)=>{
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})