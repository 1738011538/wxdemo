Page({
  data:{
    opc:{},
    imgUrls:[
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    detailTitle:"巫山烤鱼",//商品名字
    detailPrice:"58.00",//价格
    detailFreight:"包邮",//运费
    detailStock:"1232",//库存
    detailContentTitle:["商品详情","参数"],
    num:0,
    //总体概述
    detailContentList:[
      { title: "实物外观", mark: "9" },
      { title: "配送效率", mark: "9.1" },
      { title: "服务质量", mark: "9.2" }
    ],
    //参数
    detailParameter:[],
    //详情图
    detailContentImg:[
      "../../image/img1.jpg",
      "../../image/img2.jpg"
    ],
    evaluate:"8.1"//评价分
  },
  //页面加载时获取
  onLoad: function (option) {
    this.setData({
      opc: JSON.parse(option.dataObj)
    });
    // wx.request({
    //   url: 'http://127.0.0.1:3000',
    //   data:opc,
    //   success: function (res) {
    //     // 将res.data中的值对应的渲染到页面上去
    //     this.setData({
    //       detailTitle: res.data.detailTitle,
    //       detailPrice: res.data.detailPrice,
    //       detailFreight: res.data.detailFreight,
    //       detailStock: res.data.detailStock,
    //       evaluate: res.data.evaluate,
    //       detailContentList: res.data.detailContentList,
    //       detailContentImg: res.data.detailContentImg
    //     })
    //   }
    // })
  },
  detailContentTopTap: function (e) {
    console.log(e.currentTarget.dataset.num)
    this.setData({
      num: e.currentTarget.dataset.num
    })
  }
})