
<template>
  <div class="longinPage">
 
    <div url="" class="weui-cell weui-cell_access plan_list_phtot "  hover-class="weui-cell_active" @click.stop="chooseImage(1)">
      <div>
 
        <div class="weui-cell__bd plan_name">照片</div>
        <div class="weui-cell__ft_in-access plan_right">
            <image class="weui-uploader__img plan_photo" :src="formList.photoUrl" mode="aspectFill" />
        </div>
      </div>
    </div>
 
    <div class="plan_list"> 
      <div class="plan_name">名字</div>
      <label type="text" class="plan_input" >{{formList.Name}}</label>
    </div>
 
    <!-- <div class="plan_list"> 
      <div class="plan_name">身份证号</div>
      <label type="text" class="plan_input" >{{formList.IDcard}}</label>
    </div> -->
 
    <div class="plan_list"> 
      <div class="plan_name">手机号</div>
      <label type="text" class="plan_input" >{{formList.phoneNum}}</label>
    </div>

    <div class="plan_list">
          <div class="plan_name">到访日期 &nbsp;&nbsp;&nbsp;{{formList.date}}</div>
    </div>
    <div class="plan_list">
         <div class="plan_name">当天时间 &nbsp;&nbsp;&nbsp;{{formList.time}}</div>
    </div>
    <div class="plan_list">
          <div class="plan_name">到访结束日期 &nbsp;&nbsp;&nbsp;{{formList.enddate}}</div>
    </div>
    <div class="plan_list">
         <div class="plan_name">当天时间 &nbsp;&nbsp;&nbsp;{{formList.endtime}}</div>
    </div>
    <div class="plan_list" style="height:100px">
      <div class="plan_name">来访事由</div>
      <textarea readonly disabled style="white-space:pre-line;height:100px" class="plan_input" v-model="formList.reason" />
    </div>
    <div class="plan_list" style="height:100px" v-if="!formList.isPassed&&formList.checked">
      <div class="plan_name">失败原因</div>
      <textarea readonly disabled style="white-space:pre-line;height:100px" class="plan_input"  v-model="formList.failedReason" />
    </div>

 
    <div class="Submission" @click="cancelRecord(formList._id)" v-if="!formList.checked">取消预约</div>
 
  </div>
  
 
</template>
 
<script>
import utils from '@/utils'
export default {
  data () {
    return {
      imgurl:this.imgurl,//请求图片域名
      formList:{
        openid:'',
        photoUrl:"",
        Name:'',
        IDcard:'',
        phoneNum:'',
        date:'',
        time:'',
        enddate:'',
        endtime:'',
        reason:''
      },
      files:''
    }
  },
   /*  生命周期函数--监听页面显示 */
  onShow: function () {
    
  },
  mounted(){
    //标题
    wx.setNavigationBarTitle({
      title: '预约详情'
    })
    this.displayContent()
  },
  methods: {
    //回显
    displayContent(){
      let data=wx.getStorageSync('recordDetails')
      this.formList=data

          wx.showToast({
            title: res.message, 
            icon: 'none', 
            duration: 2000,
            mask: true, 
          });
       
    },
    //年出栏
    cancelRecord(id){
      this.api.deleteRecord({"id":id}).then((res)=>{
        console.log(res)
        if(res.code==1){
          wx.reLaunch({url:'/pages/index/main',
          success:function (e) { 
          var page = getCurrentPages().pop();
          console.log('page',page)
          if (page == undefined || page == null) return;
          page.onPullDownRefresh();
        } })
          
        }
      })
    },

    //提示文字
    Tips(text){
      wx.showToast({
        title: text,
        icon: 'none',
      });
    },
 
 
 
 
    
  }
}
</script>
 
<style scoped>

.longinPage{
  background: #fff;
}
.plan_list{
  width: 94%;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  border-bottom: 1px solid #F2F1F1;
  display: flex;
  justify-content: flex-start;
}
.plan_name{
  line-height: 100px;
  font-size: 30px;
  color: #333333;
  margin-right: 30px;
}
.plan_input{
  width: 70%;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  word-wrap: break-word;
 float: left !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: normal !important;


}
.plan_Origin{
  width: 100%;
}
.Submission{
  width: 60%;
  height: 60px;
  background: #6fb1fc;
  margin: 20px auto;
  text-align: center;
  line-height: 60px;
  color: #fff;
  border-radius: 5px;
}
.plan_selection{
  position: relative;
}
.plan_selection .box{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 10px;
  background: #fff;
 
}
 
.plan_list_phtot{
  border-bottom: 1px solid #F2F1F1;
}
.plan_photo{
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-top: 10px;
}
.name_Range{
  width: 200px;
  overflow: hidden;
}
.plan_Range{
  overflow: hidden;
  padding: 5px 0;
  display: flex;
  flex-wrap:wrap;
  align-content: flex-start;
 
}
.plan_Range label{
 border-bottom: none !important;
}
.plan_upload{
  flex-wrap: wrap;
}
.upload{
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.upload>div{
  width: 166px;
  height: 143px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.upload_position,.upload_img{
  width: 166px;
  height: 110px;
}
.upload_position{
  position:absolute;
  top: 0;
  left: 0;
}
.upload_text{
  width: 166px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  background: #006A3C;
  color: #fff;
}
 
.plan_right{
  width: 120px;
  height: 100px;
  position: absolute;
  top: 0;
  right: 10px;
}
 
</style>
