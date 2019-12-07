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
    // menu:{ 
    //   imgUrls:[
    //     '../../public/fenlei1.png', 
    //     '../../public/fenlei2.png', 
    //     '../../public/fenlei3.png', 
    //     '../../public/fenlei4.png', 
    //     '../../public/fenlei5.png', 
    //     '../../public/fenlei6.png', 
    //     '../../public/fenlei7.png', 
    //     '../../public/fenlei8.png',
       
    //   ], 
    //   descs:[ 
    //     '早餐', 
    //     '面食', 
    //     '烧烤', 
    //     '甜品饮品', 
    //     '套饭炒饭', 
    //     '冒菜', 
    //     '汉堡炸鸡', 
    //     '保温柜' 
       
    //   ] 

    // },
    menulist:[
      {
        imgurl:'../../public/fenlei1.png',
        descs:'早餐'
      },
      {
        imgurl:'../../public/fenlei2.png',
        descs:'面食'
      },
      {
        imgurl:'../../public/fenlei3.png',
        descs:'烧烤'
      },
      {
        imgurl:'../../public/fenlei4.png',
        descs:'甜品饮品'
      },
      {
        imgurl:'../../public/fenlei5.png',
        descs:'套饭炒饭'
      },
      {
        imgurl:'../../public/fenlei6.png',
        descs:'冒菜'
      },
      {
        imgurl:'../../public/fenlei7.png',
        descs:'汉堡炸鸡'
      },
      {
        imgurl:'../../public/fenlei8.png',
        descs:'保温柜'
      },

    ],
    
    // 菜单列表的数据
    goodsList: [
      {
        imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1095344374,4058482434&fm=26&gp=0.jpg',
        title: '冒菜',
        score:'5.0',
        sale:'200'
      },
      {
        imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1988567259,1697125837&fm=26&gp=0.jpg',
        title: '牛肉米线',
        score:'4.8',
        sale:'261'
      },
      {
        imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1878911362,1925132360&fm=26&gp=0.jpg',
        title: '套饭',
        score:'4.2',
        sale:'156'
      },
      {
        imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1958169339,795515064&fm=11&gp=0.jpg',
        title: '珍珠奶茶',
        score:'4.5',
        sale:'268'

      },
    ],
    dailyRecommend: [
      {
        imgURL: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2011524346,2288768261&fm=26&gp=0.jpg',
        title: '珍珠奶茶'
      },
      {
        imgURL: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1967393588,3591021201&fm=26&gp=0.jpg',
        title: '肉松面包'
      },
      {
        imgURL: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1648098353,3283173880&fm=26&gp=0.jpg',
        title: '羊肉串',

      },
      {
        imgURL: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=524688554,2234594528&fm=26&gp=0.jpg',
        title: '肉丝盖饭'
      }
    ]
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
  btnclick: function(){
    console.log(this.data.menulist[index].descs);

  },


  //这个地方的也是自己加的
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  }
})
