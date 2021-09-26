
<template>
  <div class="longinPage">
 
    <div url="" class="weui-cell weui-cell_access plan_list_phtot "  hover-class="weui-cell_active" @click.stop="chooseImage(1)">
      <div>
 
        <div class="weui-cell__bd plan_name">头像</div>
        <div class="weui-cell__ft_in-access plan_right">
 
          <div class="weui-uploader__files" id="uploaderFiles">
            <block v-for="(item,index) in files" :key="index">
              <div class="weui-uploader__file" @click.stop="predivImage($event,1)" :id="item">
               
              </div>
            </block>
             <image class="weui-uploader__img plan_photo" :src="photoUrl" mode="aspectFill" />
          </div>
          
        </div>
      </div>
    </div>
 
    <div class="plan_list"> 
      <div class="plan_name">名字</div>
      <input type="text" class="plan_input" v-model="formList.Name"/>
    </div>
 
    <!-- <div class="plan_list"> 
      <div class="plan_name">身份证号</div>
      <input type="text" class="plan_input" v-model="formList.IDcard"/>
    </div> -->
 
    <div class="plan_list"> 
      <div class="plan_name">手机号</div>
      <input type="number" maxlength=11  class="plan_input" v-model="formList.phoneNum"/>
    </div>
 
    <!-- <div class="plan_list" hover-class="weui-cell_active"> 
      <picker class="weui-btn plan_Origin" mode="region" :value="region" @change="CityChange">
        <div class="plan_name">省/直辖市 &nbsp;&nbsp;&nbsp;{{plan_city}}</div>
      </picker>
    </div>
  -->
    <!-- <div class="plan_list"> 
      <div class="plan_name">地址</div>
      <input type="text" class="plan_input"  v-model="formList.address"/>
    </div> -->
    <div class="plan_list">
       <picker class="weui-btn" mode="date" :value="date" start="" end="" @change="bindDateChange" style="width:100%">
          <div class="plan_name">到访日期 &nbsp;&nbsp;&nbsp;{{date}}</div>
    </picker>
    </div>
    <div class="plan_list">
       <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange" style="width:100%">
         <div class="plan_name">到访时间 &nbsp;&nbsp;&nbsp;{{time}}</div>
      </picker>
    </div>
    <div class="plan_list">
      <div class="plan_name">来访事由</div>
      <input type="text" class="plan_input" v-model="formList.reason"/>
    </div>

 
    <div class="Submission" @click="complete">提交</div>
 
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
        reason:''
      },
      files:'',
      date:'',
      time:'',
      photoUrl:''
    }
  },
   /*  生命周期函数--监听页面显示 */
  onShow: function () {
    
  },
  mounted(){
    //标题
    console.log(this.formList)
    wx.setNavigationBarTitle({
      title: '提交预约'
    })
    this.displayContent()
  },
  methods: {

    bindDateChange(e){
      console.log(e)
      this.date=e.target.value
    },
    bindTimeChange(e){
      console.log(e)
      this.time=e.target.value
    },
    //回显
    displayContent(){
     this.api.getUserDetails({openid:wx.getStorageSync('openid')}).then((res)=>{
       if(res.code==1){
         this.formList=res.data
        this.photoUrl=res.data.photoUrl
       }
      })
 
   
    },
    //年出栏
    PickerChange(e) {
      this.formList.cate3_name=this.array[e.mp.detail.value]
      this.formList.cate3_id=this.AnnualSlaughter[e.mp.detail.value].cateid
    },
    //图片
    chooseImage(num) {
      var _this = this;
      wx.chooseImage({
        count: 1, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          if(num==1){//头像
            _this.files=[]//只上传一张图，选择图后清空原图
            _this.files = _this.files.concat(res.tempFilePaths)
            var photoName="auth_pics";
            var tempFilePaths = _this.files[0]
          }
          wx.showToast({
            icon: "loading",
            title: "正在上传"
          }),
          console.log(tempFilePaths)
          wx.uploadFile({
            url: "https://uestcydri.com:5000/accounting/uploadImage",
            filePath: tempFilePaths,
            name: photoName,
            header: { "Content-Type": "multipart/form-data","weixin":"1" },
            formData: {
              source:'2',
            },
            success: function (res) {
              if (res.statusCode != 200) { 
                wx.showModal({
                  title: '提示',
                  content: '上传失败',
                  showCancel: false
                })
                return;
              }
              var DataList=JSON.parse(res.data)
              _this.photoUrl=DataList.data.url           
            },
            fail: function (e) {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
            },
            complete: function () {
              wx.hideToast();  //隐藏Toast
            }
          })
 
 
        }
        
      })
    },
 
    //确定
    complete(){
      console.log(2333)
  console.log(this.photoUrl)
  this.formList.photoUrl=this.photoUrl
  this.formList.date=this.date
        this.formList.time=this.time
      if(!this.formList.photoUrl){
        this.Tips("请上传本人照片！")
        return;
      }else if(!this.formList.Name){
        this.Tips("请填写名字！")
        return;
      }else if(!this.formList.phoneNum){
        this.Tips("请填写手机号！")
        return;
      }else if(!this.formList.date){
        this.Tips("请填写到访日期！")
        return;
      }else if(!this.formList.time){
        this.Tips("请选择到访时间！")
        return;
      }else{

        this.formList.openid=wx.getStorageSync('openid')	

        this.api.addRecord(this.formList).then((res)=>{
          if(res.code==1000){
            wx.showToast({
              title: res.message, 
              icon: 'loading', 
              duration: 2000, 
              mask: true, 
            });
            setTimeout(() => {
              wx.navigateBack({delta: 1})
            }, 1500)
          }else{
            wx.showToast({
              title: "申请成功", 
              icon: 'none', 
              duration: 2000, 
              mask: true, 
            });
            wx.switchTab({url:'/pages/index/main'})
          }})
      
      }
        //个人认证提交
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
}
.plan_Origin{
  width: 100%;
}
.Submission{
  width: 60%;
  height: 60px;
  background: #6fb1fc;
  margin: 50px auto;
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
