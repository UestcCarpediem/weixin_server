<template>
  <div @touchstart="fatherClick">
      <div class="header">
        <div class="header-bar">
          <!-- <div class="bar-item bar-item-1">
            <div class="top">{{sYear}}年</div>
            <div class="bottom"> 
              <time-picker :date="selectDate" @update:date="updateDate" mode="head"></time-picker>
              <div class="month">{{sMonth}}<span>月</span>
              <i class="iconfont icon-icon11" style="margin-left: 10px;display: inline; text-align: center; font-size: 40rpx"></i>
              </div>
              
            </div>
           
          </div> -->
          <div class="bar-item bar-item-2">
            <div class="bar-item-income">
              <div class="bottom"> 
                <div class="acount">预约记录</div>
              </div>
            </div>
            
          </div>
        </div>

       
      </div>

      <scroll-view class="scroll-view" 
      :scroll-y="true"  @scroll="scroll"  :scroll-with-animation="true">
        <div v-if="isListEmpty" class="isListEmpty">
          <img mode='aspect-fill' src="/static/images/empty_list.png" alt="">
          <p>空空如也</p>
        </div>
        <div class="bookingList-wrap" :class="isIphoneX? 'isIphoneX':''">
          <div class="item-block" v-for="(item,index) in accList" :key="item._id" >
            <div class="item-head" @click="turnDetails(item)">
              <div class="item-date">{{item.date +" | "+item.time }}</div>
              <div class="item-info"><label v-if="!item.checked">待审核</label>
              <label v-else-if="item.isPassed">审核通过</label>
              <label v-else>审核不通过</label>
              </div>
            </div> 
          </div>
  
        </div>
       
      </scroll-view>
       

      <tab-bar :selectNavIndex="0"></tab-bar>
  </div>
</template>

<script>
import utils from '@/utils'
import timePicker from '@/components/timePicker'
import tabBar from '@/components/tabBar'


 
export default {
  data () {
    return {
      pageNum:1,
      accList:[],
      date: '',
      selectDate: '',
      listTouchInfo: {
        startX: 0,
        startY: 0,
        scrollY: true,
        movedDistance: 0,
        movedDistanceY: 0,
        lastX: 0,
        finalX: 0,
        moveBoundray: 0,
        currentIndex: null,
        
        
      },
      categoryList: [],
      requestMode: 1, // 1-请求月份，2-请求年份
      sYear: utils.getTodayDate().year,
      sMonth: utils.getTodayDate().month,
      totalPayAmount: 0,
      totalIncomeAmount: 0,
    }
  },

  components: {
    timePicker,
    tabBar
  },
  mounted(){

    this.isLogin()
    // this.getOpenId()
    
  },
  onPullDownRefresh () {
    this.accList=[]
    this.pageNum=1
	// this.getYuyueList(this.pageNum)
  },
  onShow(){
    this.accList=[]
    this.pageNum=1
    this.getYuyueList(this.pageNum)		
    console.log("刷新了")
  },
  methods: {
      scroll(e) { 
        console.log(e)
  // 防抖，优化性能
  // 当滚动时，滚动条位置距离页面顶部小于设定值时，触发下拉刷新
  // 通过将设定值尽可能小，并且初始化scroll-view组件竖向滚动条位置为设定值。来实现下拉刷新功能，但没有官方的体验好
    if (e.mp.detail.scrollTop +510 > e.mp.detail.scrollHeight) {    
      let len=this.accList.length 
      this.pageNum++
      this.getYuyueList(this.pageNum)

    }
  },

    turnDetails(item){
      let url="/pages/addBooking/main"

      wx.setStorageSync('recordDetails', item)
       wx.navigateTo({
        url
      })
      console.log(111)
    },
    getYuyueList(num){
      console.log(wx.getStorageSync('openid'))
      this.api.getRecordList({'openid':wx.getStorageSync('openid'),pageNum:num}).then((res)=>{
        if(res.data.length==0){
          this.pageNum--
        }else{
          this.accList=this.accList.concat(res.data)
        }
        
        console.log(this.accList)
      })
    },
    getOpenId(){  //获取用户的openid
			let _this=this;
			wx.login({
			  success(res) {
			  	  	if (res.code) {
				      // 发起网络请求
				      wx.request({
				        url: 'https://uestcydri.com:5000/user/login',
				        data: {
				            js_code: res.code    //wx.login登录获取的code值
				        },
				        success(res) {
                  console.log(res)		
                  wx.setStorageSync('openid', res.data.Token)	
                  _this.accList=[]
                  _this.pageNum=1
                  _this.getYuyueList(_this.pageNum)		   
						}
				      })
				    } else {
				      console.log('登录失败！' + res.errMsg)
				    }
			  
			  }
			})
    },
     isLogin(){		
        var _this=this;
        wx.getSetting({
	          success(res) {    	          	 
	            if (!res.authSetting['scope.userInfo']) {//未授权getUserInfo            	
	              wx.authorize({
	                scope: 'scope.getUserInfo',
	                success(res) {	                
	                  // 用户已经同意小程序使用用户信息，后续调用 wx.userInfo 接口不会弹窗询问       
	                  console.log(res)
	                  _this.getOpenId()
	                },
	                fail(err){
	                 console.log(err)
	                }
	              })
	            }else{//已授权
	              wx.getUserInfo({
	                success(res) {	
                    _this.getOpenId()
                    console.log(res)
	                },
	                fail(err) {
	                  console.log(err)
	                }
	              })
	            }
	          }
	        })
    },
    updateDate(v){
      console.log(v)
      this.sYear = utils.getTodayDate(v).year
      this.sMonth = utils.getTodayDate(v).month
      // this.getBookingList()
      // this.getAllAmount()
    },
    delAccounting(id){
      let that = this
      wx.showModal({
        title: '提示',
        content: '确认删除',
        success(res) {
          if (res.confirm) {
            deleteAccounting({id}).then((res) => {
              if(res.code == 1){
                wx.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 2000
                })
                // that.getBookingList()
                // that.getAllAmount()
              }
            }).catch(err => {
              console.log(err)
            })
            
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      
    },

    listTouchStart(e){
      this.listTouchInfo.lastX = null
      this.listTouchInfo.finalX = null
      this.listTouchInfo.startX = e.touches[0].clientX
      this.listTouchInfo.startY = e.touches[0].clientY
      
      // console.log(e.mp.currentTarget.dataset.index)
      this.listTouchInfo.currentIndex = e.mp.currentTarget.dataset.index
      this.xCanMove = true   // 默认允许左滑

    },
    listTouchMove(e){
      console.log(e)
      this.listTouchInfo.movedDistance = e.mp.touches[0].clientX - this.listTouchInfo.startX
      this.listTouchInfo.movedDistanceY = e.mp.touches[0].clientY - this.listTouchInfo.startY
      console.log(this.listTouchInfo.movedDistanceY)
      if (Math.abs(this.listTouchInfo.movedDistanceY) < 5) {
        // 
        if (this.listTouchInfo.movedDistance < -7 && this.xCanMove) { //&& (Math.abs(this.listTouchInfo.movedDistance) < this.listTouchInfo.moveBoundray)
          // this.xCanMove = true
          this.listTouchInfo.scrollY = false
          this.listTouchInfo.finalX = -this.listTouchInfo.moveBoundray
        }
        else if ((this.listTouchInfo.movedDistance) > 0) {
          this.listTouchInfo.finalX = 0
        } 
      } else {
        this.xCanMove = false
        this.listTouchInfo.scrollY = true
      }
    },
    listTouchEnd(e){
      this.listTouchInfo.lastX = this.listTouchInfo.finalX
      this.listTouchInfo.scrollY = true
      this.xCanMove = true
    },
    fatherClick(){
      this.listTouchInfo.finalX = 0
      this.listTouchInfo.lastX = 0
    },
  },

  created () {
    // let app = getApp()
    this.systemInfo = wx.getSystemInfoSync();
    this.listTouchInfo.moveBoundray = 100 / 750 * this.systemInfo.windowWidth
    
  },
  computed:{
    isIphoneX(){
        return this.$store.getters.isIphoneX
    },
    isListEmpty(){
      return (this.accList && this.accList.length > 0) ? false : true
    },
    accList(){
      return this.$store.getters.accList
    },
    

  },
  

  onPullDownRefresh() {
    
    // this.getBookingList()
    // this.getAllAmount()
    wx.stopPullDownRefresh();
  }

}
</script>

<style scoped lang="stylus">

headerBigFontSize = 40px
headerHeight = 150px
.header 
  height headerHeight
  background themeColor
  position fixed
  top 0
  left 0
  width 100%
  z-index 1000
  .header-bar
    display flex
    justify-content left
    align-items flex-end
    height 100%
  .bar-item 
    position relative
    height indexHeaderBar

    .top
      height indexHeaderBarTop
      line-height 24px
      font-size 24px
      color #6e633e
    .bottom 
      display flex
      position relative
      height: indexHeaderBarBottom
      font-size 30px
      justify-content flex-start
      align-items center
      .month 
        font-size headerBigFontSize
        border-right 1px solid darkGrayColor
        width 100%
      > span 
        font-size 24px

  .bar-item-1 
    flex 2
    box-sizing border-box
    padding 0 30px
  .bar-item-2
    flex 5
    box-sizing border-box
    display flex
    padding 0 30px
    .bar-item-pay
    .bar-item-income
      flex 1
      .acount 
        font-size headerBigFontSize
  

.testBtn 
  height 100px
  width 100px
  background-color gray
  text-align center

.time-picker {
  height: 500px;
}

.bookingList-wrap
  box-sizing border-box
  background backgroundGray
  padding-bottom tabbarBottomHeight
  padding-top headerHeight
  // background #fff
  &.isIphoneX 
    padding-bottom tabbarBottomHeight + isPhoneXBottom

.item-block 
  // border-top 20px solid #f5f5f5
  background #fff
  margin-top 20px
  // margin-top 20px
  .item-head
    padding 0 30px
    height 80px
    display flex
    align-items center
    justify-content space-between
    font-size 28px
    color #969696
  .item-list 
    position relative
    padding 0 30px
    height 150px
    display flex
    justify-content space-between
    align-items center
    .detail-info 
      display flex
      align-items center
      height 100%
      .detail-icon
        width 80px
        height 80px
        border-radius 50%
        background themeColor
        margin-right 20px
      .detail-title 
        line-height 150px
        font-size 30px
        color fontColorGray
    .detail-price
        font-size 36px
        color #000
    .delete
      position absolute
      height 100%
      width 100px
      right -100px
      top 0
      background #ed736e
      line-height 150px
      text-align center
      color #fff
      font-size 30px
    &.addAmination
      transition all 0.5s

.scroll-view 
  height 100vh
  box-sizing border-box
  background backgroundGray
  position relative
  // padding-top headerHeight

.isListEmpty
  position absolute
  top 50%
  left 50%
  margin-left -100px
  margin-top -125px
  width 200px
  height 250px
  img 
    height 200px
    width 200px
  p
    color #dbdbdb
    font-weight bold
    text-align center
    font-size 30px
</style>
