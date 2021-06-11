<template>
  <div class="user-box">
    <!-- <el-row>
      <el-col :span="24">
        <div class="tool-box">
          <el-button type="primary" icon="el-icon-circle-plus-outline" size="small" @click="handleAdd">新增</el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="mulDelete">批量删除</el-button>
        </div>
      </el-col>
    </el-row> -->
    <el-table
      :data="users"
      @selection-change="selectChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        sortable
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phoneNum"
        label="手机"
        width="180">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          {{ scope.row.checked ? '已审核' : '未审核' }}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    <el-dialog :title="dialogTitle" width="600px" :visible.sync="userFormVisible" @close="resetForm('userForm')">
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item label="照片" label-width="100px">
          <img
                style="width: 100px; height: 100px"
                :src="user.photoUrl"
                >
        </el-form-item>
        <el-form-item label="姓名" label-width="100px">
          <label>{{user.Name}}</label>
        </el-form-item>
        <!-- <el-form-item label="身份证号" label-width="100px">
          <label>{{user.IDcard}}</label>
        </el-form-item> -->
        <el-form-item label="手机" label-width="100px">
          <label>{{user.phoneNum}}</label>
        </el-form-item>
        <el-form-item label="到访日期" label-width="100px">
          <label>{{user.date}}</label>
        </el-form-item>
        <el-form-item label="到访时间" label-width="100px">
          <label>{{user.time}}</label>
        </el-form-item>
        <el-form-item label="到访事由" label-width="100px">
          <label>{{user.reason}}</label>
        </el-form-item>
        <el-form-item label="状态" label-width="100px">
          <label v-if="user.checked">已审核</label>
          <label >待审核</label>
        </el-form-item>
        <el-form-item label="拒绝理由" label-width="100px">
          <el-input v-model="failedReason" placeholder="拒绝时填写"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userFormVisible = false">取 消</el-button>
        <el-button type="danger" v-loading="uploading" @click="submitUser(user._id,false)">不通过</el-button>
        <el-button type="primary" v-loading="uploading" @click="submitUser(user._id,true)">通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uploading:false,
      step:'',
      ruleForm: {
        coverUrl: "",
        coverFile: ""
      },
      pageNum:1,
      users: [],
      user: {
        id: '',
        date: '',
        name: '',
        phone: '',
        address: '',
        status: 0
      },
      failedReason:'',
      userBackup: Object.assign({}, this.user),
      multipleSelection: [],
      userFormVisible: false,
      dialogTitle: '',
      rowIndex: 9999,
      rules: {
      }
    }
  },
  mounted () {
    this.getUsers()
  // this.$http.get(
  //             "http://192.168.10.50:80/subject/212",
  //             {params:{category:"employee",name:"313"}}
  //           );
  },
  methods: {
    imgUrlToFile(url) {
      var self = this;
      var imgLink = url;
      var tempImage = new Image();
      //如果图片url是网络url，要加下一句代码
      tempImage.crossOrigin = "*";
      tempImage.onload = function() {
        var base64 = self.getBase64Image(tempImage);
        var imgblob = self.base64toBlob(base64);
        var filename = self.getFileName(self.ruleForm.coverUrl);
        self.ruleForm.coverFile = self.blobToFile(imgblob, filename);
      };
      tempImage.src = imgLink;
    },
    getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      var dataURL = canvas.toDataURL("image/" + ext);
      return dataURL;
    },
    base64toBlob(base64) {
      let arr = base64.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },
    blobToFile(blob, filename) {
      // edge浏览器不支持new File对象，所以用以下方法兼容
      blob.lastModifiedDate = new Date();
      blob.name = filename;
      return blob;
    },
    getFileName(url) {
      // 获取到文件名
      let pos = url.lastIndexOf("/"); // 查找最后一个/的位置
      return url.substring(pos + 1); // 截取最后一个/位置到字符长度，也就是截取文件名
    },
     xhrequest(url) {
      return new Promise((resolve, reject) => {
        //创建XMLHttpRequest对象
        var xhr = new XMLHttpRequest();
        //前两个参数固定，第三个参数true时是异步，false时是同步
        xhr.open("get", url, true);
        //选定输出格式为blob格式
        xhr.responseType = "blob";
        //onload后回调this本身  onload本身不携带参数
        xhr.onload = function () {
          let file = new window.File([this.response], "temp", {
            type: "image/jpeg",
          });
          resolve(file);
        };
        //关闭xhr  一定要加
        xhr.send();
      });
    },
    getUsers () {
      this.loading = true
      let data={
        checked:false,
        pageNum:this.pageNum
      }
      this.$http.post('/accounting/getRecordReviewed',data).then((res) => {
        
        this.users = res.data.data
        console.log(this.users)
      }).catch((err) => {
        console.error(err)
      })
    },
    handleEdit (index, row) {
      this.dialogTitle = '编辑'
      this.user = Object.assign({}, row)
      console.log(new Date(this.user.date+" "+this.user.time).getTime())
      this.userFormVisible = true
      this.rowIndex = index
      this.imgUrlToFile(this.user.photoUrl)
    },
    submitUser (id,bool) {
      if(!bool){
        let data = {
            _id: id,
            isPassed: bool,
            failedReason:this.failedReason
          };
        this.$http.post("/accounting/changeReviewStatus", data).then((res)=>{
          this.$message({
            type: "success",
            message: "审核成功!",
          });
          this.userFormVisible = false;
          this.$router.go(0);
        })
        return 
      }
      console.log(this.ruleForm)
      this.uploading=true
      this.xhrequest(this.user.photoUrl)
        .then((file) => {
          this.step=1
          console.log(file)
          let param = new FormData()
          param.append("photo",this.ruleForm.coverFile)
          return this.$http.post(
            "http://192.168.10.50:80/subject/photo/check",
            param
          );
        })
        .then((res) => {
          this.step++
          console.log(res)
          if (res.data.code == 0) {
            let stamp = this.user.time.split(":")[0] * 60 * 60 * 1000;
            let form = new FormData()
              form.append('photo', this.ruleForm.coverFile)
              // form.append("purpose",this.user.reason)
              // form.append("name",this.user.Name)
              // form.append("subject_type",1)
              // form.append("start_time",JSON.stringify(new Date().getTime()))
              // form.append("end_time",JSON.stringify(new Date().getTime() + 6 * 60 * 60 * 1000))
              // form.append("phone",this.user.phoneNum)
            
            return this.$http.post(
              "http://192.168.10.50:80/subject/photo",
              form
            );
          } else {
            this.$message({
              type: "error",
              message: "未能检测到人脸!",
            });
            throw "error";
          }
        }).then((res1)=>{
          this.step++
           if(res1.data.code==0){
             let tem_photo_id=[]
             tem_photo_id.push(res1.data.data.id)
            let data = {
            photo_ids:tem_photo_id,
            name: this.user.Name,
            purpose:this.user.reason,
            phone:this.user.phone,
            subject_type:1,
            start_time:Math.round((new Date(this.user.date+" "+this.user.time).getTime())/1000),
            end_time:Math.round((new Date(this.user.date+" "+this.user.time).getTime() + 6 * 60 * 60 * 1000)/1000)
          }
          return this.$http.post(
              "http://192.168.10.50:80/subject",
              data
            );
           }else{
             this.$message({
              type: "error",
              message: "上传照片失败!",
            });
           }
        })
        .then((res2) => {
          this.step++
          if(res2.data.code==0){
            let data = {
            _id: id,
            isPassed: bool,
          };
          return this.$http.post("/accounting/changeReviewStatus", data);
          }else{
            this.$message({
              type: "error",
              message: "添加记录失败!",
            });
          }
          
        })
        .then((res) => {
          this.users = res.data.data;
          this.$message({
            type: "success",
            message: "审核成功!",
          });
          this.uploading=false
          this.userFormVisible = false;
          this.$router.go(0);
          console.log(this.users);
        })
        .catch((err) => {
          this.uploading=false
          switch(this.step){
            case 1:this.$message({
              type: "error",
              message: "未能检测到人脸!",
            });
            break;
            case 2:this.$message({
              type: "error",
              message: "照片上传失败!",
            });
            break;
            case 3:
              this.$message({
              type: "error",
              message: "添加记录失败!",
            });
            break
          }

          console.error(err);
        });
    },
    handleDelete (index, row) {
      this.$confirm(`确定删除用户 【${row.name}】 吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.users.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        console.log('取消删除')
      })
    },
    resetForm (formName) {
      this.$refs[formName].clearValidate()
    },
    mulDelete () {
      let len = this.multipleSelection.length
      if (len === 0) {
        this.$message({
          type: 'warning',
          message: '请至少选择一项！'
        })
      } else {
        this.$confirm(`确定删除选中的 ${len} 个用户吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: `成功删除了${len}条数据！`
          })
        }).catch(() => {
          console.log('取消删除')
        })
      }
    },
    selectChange (val) {
      this.multipleSelection = val
    },
    handleAdd () {
      this.dialogTitle = '新增'
      this.user = Object.assign({}, this.userBackup)
      this.userFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-box {
    width: 100%;
    .tool-box {
      padding: 10px 10px;
      border-bottom: 1px solid #eee;
    }
    .el-pagination {
      margin-top: 20px;
    }
  }
</style>
