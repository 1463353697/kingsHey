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
        descs:'早餐',
        index: 1
      },
      {
        imgurl:'../../public/fenlei2.png',
        descs:'面食',
        index: 2
      },
      {
        imgurl:'../../public/fenlei3.png',
        descs:'烧烤',
        index: 3
      },
      {
        imgurl:'../../public/fenlei4.png',
        descs:'甜品饮品',
        index: 4  
      },
      {
        imgurl:'../../public/fenlei5.png',
        descs:'套饭炒饭',
        index: 5
      },
      {
        imgurl:'../../public/fenlei6.png',
        descs:'冒菜',
        index: 6
      },
      {
        imgurl:'../../public/fenlei7.png',
        descs:'汉堡炸鸡',
        index: 7
      },
      {
        imgurl:'../../public/fenlei8.png',
        descs:'保温柜',
        index: 8
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

  //根据选择的不同类别，显示不同的菜单
  menuBtnClick: function(e){
    var index = e.currentTarget.dataset.id; 
    
    // 早餐
    if(index==1){
      
      this.setData({
        goodsList: [
          {
            imgUrl: 'http://img3.imgtn.bdimg.com/it/u=1672621874,1164728575&fm=26&gp=0.jpg',
            title: '爱心荷包蛋',
            score:'5.0',
            sale:'200'
          },
          {
            imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=165480061,1924399069&fm=26&gp=0.jpg',
            title: '现炸油条',
            score:'4.8',
            sale:'261'
          },
          {
            imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4140751928,2974476575&fm=26&gp=0.jpg',
            title: '营养豆浆',
            score:'4.2',
            sale:'156'
          },
          {
            imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022642727,2687358925&fm=26&gp=0.jpg',
            title: '酱肉小笼包',
            score:'4.5',
            sale:'268'
    
          },
          {
            imgUrl: 'http://img1.imgtn.bdimg.com/it/u=2318396929,3022463536&fm=26&gp=0.jpg',
            title: '卡通小馒头',
            score:'4.5',
            sale:'268'
    
          },
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=156551076,1819800577&fm=26&gp=0.jpg',
            title: '肉夹馍',
            score:'4.5',
            sale:'268'
    
          },
          {
            imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1133993642,3079121332&fm=26&gp=0.jpg',
            title: '白面馒头',
            score:'4.5',
            sale:'268'
    
          },
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607432757,2636233432&fm=26&gp=0.jpg',
            title: '营养黑米粥',
            score:'4.5',
            sale:'268'
    
          }

        ]


      },function(){
        console.log("渲染完毕");

      })
      console.log(index);
    }


    //面食
    if(index==2){
      this.setData({
        goodsList: [
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2263331386,1394198673&fm=26&gp=0.jpg',
            title: '牛肉面',
            score:'5.0',
            sale:'200'
          },
          {
            imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2023054176,496875081&fm=26&gp=0.jpg',
            title: '遵义羊肉粉',
            score:'4.2',
            sale:'156'
          },
          {
            imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1028947296,1687306050&fm=26&gp=0.jpg',
            title: '虾仁玉米饺子',
            score:'4.2',
            sale:'156'
          },
          {
            imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1988567259,1697125837&fm=26&gp=0.jpg',
            title: '牛肉米线',
            score:'4.8',
            sale:'261'
          },
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2333424015,3287221080&fm=26&gp=0.jpg',
            title: '紫菜馄饨',
            score:'4.2',
            sale:'156'
          }
        ]


      })
    }


    //烧烤
    if(index==3){
      this.setData({
        goodsList: [
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1144550453,623062070&fm=26&gp=0.jpg',
            title: '豆皮',
            score:'4.6',
            sale:'200'
          },
          {
            imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1966089816,4122614722&fm=26&gp=0.jpg',
            title: '烤面筋',
            score:'4.8',
            sale:'261'
          },
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1801355983,2478325710&fm=26&gp=0.jpg',
            title: '骨肉相连',
            score:'4.2',
            sale:'156'
          },
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3668452990,4290421151&fm=26&gp=0.jpg',
            title: '新奥尔良烤翅',
            score:'4.5',
            sale:'268'
    
          },
          {
            imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2382488380,3316618983&fm=26&gp=0.jpg',
            title: '年糕',
            score:'4.5',
            sale:'268'
    
          },
          {
            imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4271087190,1977137873&fm=26&gp=0.jpg',
            title: '猪肉火腿肠',
            score:'4.5',
            sale:'268'
    
          },
        ]


      })
    }


    //甜品饮品
    if(index==4){
      this.setData({
        goodsList: [
          {
            imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1095344374,4058482434&fm=26&gp=0.jpg',
            title: 'zhenzhu',
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
        ]


      })
    }

    //套饭炒饭
    if(index==5){
      this.setData({
        goodsList: [
          {
            imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1095344374,4058482434&fm=26&gp=0.jpg',
            title: 'zhenzhu',
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
        ]


      })
    }

    //冒菜
    if(index==6){
      this.setData({
        goodsList: [
          {
            imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1095344374,4058482434&fm=26&gp=0.jpg',
            title: 'zhenzhu',
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
        ]


      })
    }

    //汉堡炸鸡
    if(index==7){
      this.setData({
        goodsList: [
          {
            imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1095344374,4058482434&fm=26&gp=0.jpg',
            title: 'zhenzhu',
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
        ]


      })
    }

    //保温柜
    if(index==8){
      this.setData({
        goodsList: [
          {
            imgUrl: 'http://img0.imgtn.bdimg.com/it/u=1095344374,4058482434&fm=26&gp=0.jpg',
            title: 'zhenzhu',
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
        ]


      })
    }



  },


  //这个地方的也是自己加的
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  }
})
