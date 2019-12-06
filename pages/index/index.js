//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),




    //这是自己后来加的
    focus: false,
    inputValue: '',

    // 这是轮播图片用的
    imgUrls: [

      {

        link: '/pages/index/index',

        url: '../../public/lunbo1.png'

      }, {

        link: '/pages/logs/logs',

        url: '../../public/lunbo2.jpg'

      }, {

        link: '/pages/index/index',

        url: '../../public/lunbo3.png'

      }

    ],

    indicatorDots: true,  //小点

    autoplay: true,  //是否自动轮播

    interval: 3000,  //间隔时间

    duration: 3000,  //滑动时间


    // 这是导航菜单栏用的
    menu:{ 
      imgUrls:[
        '../../public/fenlei1.png', 
        '../../public/fenlei2.png', 
        '../../public/fenlei3.png', 
        '../../public/fenlei4.png', 
        '../../public/fenlei5.png', 
        '../../public/fenlei6.png', 
        '../../public/fenlei7.png', 
        '../../public/fenlei8.png',
       
      ], 
      descs:[ 
        '早餐', 
        '面食', 
        '烧烤', 
        '甜品饮品', 
        '套饭炒饭', 
        '冒菜', 
        '汉堡炸鸡', 
        '保温柜' 
       
      ] 

    },
    recommendList:{
      src:[
        '../../public/recommend1.png',
        '../../public/recommend2.png'

      ],
      name:[
        "炸酱面",
        "冒菜"
      ]
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  //这个地方的也是自己加的
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  }
})
