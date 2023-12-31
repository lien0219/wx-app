// pages/api2/api2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title:'加载中...',
      mask:true
    })
    this.getData()
  },

  getData(){
    wx.request({
      url: 'https://api.thecatapi.com/v1/images/search?limit=2',
      success:res=>{
        console.log(res.data);
        let oldData=this.data.listArr
        let newData=oldData.concat(res.data)
        this.setData({
          listArr:newData
        })
        // 停止下拉
        wx.stopPullDownRefresh()
      },
      // 无论成功失败都会走这个
      complete:err=>{
        wx.hideLoading()
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
    this.setData({
      listArr:[]
    })
    this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("到底了");
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})