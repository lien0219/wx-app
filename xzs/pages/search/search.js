import {queryProduct} from "../../api/apis"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     historyList:[],
     productList:[],
     total:0,
     keyword:"",
     noData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     let searchKeyArr = wx.getStorageSync('searchKeyArr') || null;
     if(searchKeyArr){
       this.setData({
        historyList:searchKeyArr
       })
     }
  },

  //输入框改变的时候
  onChange(e){  
    this.setData({
      keyword:e.detail
    })
  },

  //清空输入框
  onClear(){
    this.setData({
      noData:false,
      keyword:"",
      productList:[],
      total:0
    })
  },

  //点击搜索历史的每一项
  tapHisItem(e){
    console.log(e);
    this.setData({
      keyword:e.currentTarget.dataset.value
    })
    this.getData();
  },

  //清空搜索历史
  removeHistory(){
     this.setData({
       noData:false,
       historyList:[],
       total:0,
       keyword:"",
       productList:[]
     })
     wx.removeStorageSync('searchKeyArr')
  },

  //确认搜索
  onSearch(){
    console.log(this.data.keyword);
    let hisArr = this.data.historyList || [];
    hisArr.unshift(this.data.keyword);
    hisArr = [...new Set(hisArr)];
    hisArr = hisArr.slice(0,10)
    this.setData({
      historyList:hisArr
    })
    wx.setStorageSync('searchKeyArr', hisArr);
    this.getData();
  },

  //获取搜索的产品
  getData(){
    queryProduct({
      keyword:this.data.keyword,
      limit:10
    }).then(res=>{
      console.log(res);
      let noData = false;
      if(res.data.length==0){
        noData=true;
      }
      this.setData({
        total:res.total,
        productList:res.data,
        noData
      })
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