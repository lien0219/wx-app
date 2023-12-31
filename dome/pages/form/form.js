// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iptVal:"",
    listArr:[
      {id:1232345423,title:"告诉老墨，我要吃鱼！！"},
      {id:2343423434,title:"咖啡不用冲，迟早会成功"},
      {id:3453455345,title:"妻管严啊，很幸福的"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  // 删除
  clickClose(e){
    wx.showModal({
      title:'是否删除？',
      success:res=>{
        // console.log(res);
        if (res.confirm) {
          let index=e.currentTarget.dataset.index
          let arr=this.data.listArr
          arr.splice(index,1)
          this.setData({
            listArr:arr
          })
        }
      }
    })
    // console.log(e);
  },
  // 发布
  onSubmit(){
    let value=this.data.iptVal
    let arr=this.data.listArr
    arr.push({
      id:Date.now(),
      title:value
    })
    this.setData({
      listArr:arr,
      iptVal:''
    })
    wx.showToast({
      title: '发布成功',
      icon:'none'
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