// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"lisa",
    age:18,
    boo:true,
    arr:["孙子兵法","红楼梦","三国"],
    num:7,
    user:{
      name:"高齐强",
      age:80,
      gender:"男"
    },
    article:[{
      id:1,
      title:"JS时间戳转为时间格式的多功能方法",
      time:"2020-06-11",
      picurl:"http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20200611/1591843113.jpg"
    },{
      id:2,
      title:"WXS根据时间戳计算时间间隔",
      time:"2020-04-25",
      picurl:"http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20200425/1587812172.jpg"
    },{
      id:3,
      title:"微信小程序wxs时间戳格式化多功能转换方法",
      time:"2020-03-29",
      picurl:"http://qingnian8.oss-cn-qingdao.aliyuncs.com/images/20200329/1585485379.jpg"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(()=>{
      this.setData({
        name:"李四"
      })
    },2000)
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