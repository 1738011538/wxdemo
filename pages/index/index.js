//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    topList:[
      {
        url:"../../image/yuding.png",
        title:"活动",
        explain:"activity"
      },
      {
        url:"../../image/diancan.png",
        title: "点餐",
        explain: "shopping"
      },
      {
        url: "../../image/saoma.png",
        title: "扫码付",
        explain: "code"
      },
      {
        url: "../../image/lianxiwomen.png",
        title: "联系我们",
        explain: "tel"
      }
    ],
    newWeek:"",
    discountImageSrc:"../../image/tejiacai.jpg",
    originalPrice:"66",
    presentPrice:"45",
    allList:[
      "特色", "套餐", "凉菜", "热菜", "主食", "羹汤"
    ],
    num: 0,
    allListContent:[
      {
        title:"特色",
        content:[
          {
            alt:"巫山烤鱼",
            imgSrc:"../../image/wushankaoyu.jpg"
          },
          {
            alt: "毛血旺",
            imgSrc: "../../image/maoxuewang.jpg"
          },
          {
            alt: "腊牛肉",
            imgSrc: "../../image/laniurou.jpg"
          },
          {
            alt: "鱼香茄子",
            imgSrc: "../../image/yuxiangqiezi.jpg"
          },
          {
            alt: "麻婆豆腐",
            imgSrc: "../../image/mapodoufu.jpg"
          }
        ]
      },
      {
        title: "套餐",
        content: [
          {
            alt: "毛血旺",
            imgSrc: "../../image/maoxuewang.jpg"
          }
        ]
      },
      {
        title: "凉菜",
        content: [
          {
            alt: "zhacaisi",
            imgSrc: ""
          }
        ]
      },
      {
        title: "热菜",
        content: [
          {
            alt: "haishizhacaisi",
            imgSrc: ""
          }
        ]
      },
      {
        title: "主食",
        content: [
          {
            alt: "youshizhacaisi",
            imgSrc: ""
          }
        ]
      },
      {
        title: "羹汤",
        content: [
          {
            alt: "zongshizhacaisi",
            imgSrc: ""
          }
        ]
      }
    ]
  },
  onLoad:function () {
    // 获取今天星期几
    var week = new Date().getDay();
    var x;
    switch (week) {
      case 0:
        x = "星期天";
        break;
      case 1:
        x = "星期一";
        break;
      case 2:
        x = "星期二";
        break;
      case 3:
        x = "星期三";
        break;
      case 4:
        x = "星期四";
        break;
      case 5:
        x = "星期五";
        break;
      case 6:
        x = "星期六";
        break;
    }
    this.setData({
      newWeek: x
    })
    // 从后台获取今天的特价菜名以及图片相关信息
    // wx.request({
    //   url: 'http://127.0.0.1:3000',
    //   data: newWeek,
    //   method: GET,
    //   success: function (res) {
    //     this.setData({
    //       discountImageSrc:res.data.imageSrc,//获取今日特价图片路径
    //       originalPrice: res.data.originalPrice,//获取原价
    //       presentPrice: res.data.presentPrice//获取现价
    //     })
    //   }
    // })
    // 监听消息有变动提示
    wx.setTabBarBadge({
      index: 0,
      text: "1"
    })
  },
  allBindTap: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
  },
  goToTel: function (e) {
    var d = e.currentTarget.dataset.idx;
    var e = this.data.topList;
    if (e[d].explain == "tel"){
      wx.makePhoneCall({
        phoneNumber: '1340000'
      })
    } else if (e[d].explain == "code"){
      //跳转到支付页面
      wx.navigateTo({
        url: '../../components/payment/payment',
      })
    } else if (e[d].explain == "shopping"){
      //跳转到点餐页面
      wx.switchTab({
        url: '/pages/shopping/shopping'
      })
    } else if (e[d].explain == "activity"){
      //跳转到活动页面
      wx.switchTab({
        url: '/pages/activity/activity'
      })
    }
  },
  goToCom: function (e) {
    // 路由配置
    var d1 = e.currentTarget.dataset.idxOne;
    var d2 = e.currentTarget.dataset.idxTwo;
    // wx.request({
    //   url: 'http://127.0.0.1:3000',
    //   data:{index:d},
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     wx.navigateTo({
    //       url: '../../components/detail/detail'
    //     })
    //   }
    // })
    var obj = {one:d1,two:d2}
    wx.navigateTo({
      url: '../../components/detail/detail?dataObj=' + JSON.stringify(obj)
    })
  }
});
