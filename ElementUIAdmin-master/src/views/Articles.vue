<template>
  <div class="user-box">
    <!-- <el-row>
      <el-col :span="24">
        <div class="tool-box">
          <el-button
            type="primary"
            icon="el-icon-circle-plus-outline"
            size="small"
            @click="handleAdd"
            >新增</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="small"
            @click="mulDelete"
            >批量删除</el-button
          >
        </div>
      </el-col>
    </el-row> -->
    <el-table
      :data="users"
      @selection-change="selectChange"
      style="width: 100%"
    >

      <el-table-column sortable prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <el-table-column prop="Name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="phoneNum" label="手机" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ scope.row.checked ? "已审核" : "未审核" }}
        </template>
      </el-table-column>
      <el-table-column label="审核状态">
        <template slot-scope="scope">
          {{ scope.row.isPassed ? "通过" : "未通过" }}
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            @click="handleEdit(scope.$index, scope.row)"
            >查看详情</el-button
          >
          <!-- <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :page-sizes="[10, 20, 30, 50]"
      :page-size="20"
      layout="total, prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <el-dialog
      :title="dialogTitle"
      width="600px"
      :visible.sync="userFormVisible"
      @close="resetForm('userForm')"
    >
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item label="照片" label-width="100px">
          <img style="width: 100px; height: 100px" :src="user.photoUrl" />
        </el-form-item>
        <el-form-item label="姓名" label-width="100px">
          <label>{{ user.Name }}</label>
        </el-form-item>
        <el-form-item label="身份证号" label-width="100px">
          <label>{{ user.IDcard }}</label>
        </el-form-item>
        <el-form-item label="手机" label-width="100px">
          <label>{{ user.phoneNum }}</label>
        </el-form-item>
        <el-form-item label="到访日期" label-width="100px">
          <label>{{ user.date }}</label>
        </el-form-item>
        <el-form-item label="到访时间" label-width="100px">
          <label>{{ user.time }}</label>
        </el-form-item>
        <el-form-item label="受访人" label-width="100px">
          <label>{{ user.interviewees }}</label>
        </el-form-item>
        <el-form-item label="到访事由" label-width="100px">
          <label>{{ user.reason }}</label>
        </el-form-item>
        <el-form-item label="状态" label-width="100px">
          <label v-if="user.checked">已审核</label>
          <label v-else>待审核</label>
        </el-form-item>
        <el-form-item label="审核状态" label-width="100px">
          <label v-if="user.isPassed">已通过</label>
          <label v-else>未通过</label>
        </el-form-item>
        <el-form-item
          v-if="!user.isPassed"
          label="拒绝理由"
          label-width="100px"
        >
          <label v-if="user.failedReason == null">无</label>
          <label v-else>{{ user.failedReason }}</label>
        </el-form-item>
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="userFormVisible = false">取 消</el-button>
        <el-button type="danger" @click="submitUser(user._id, false)"
          >不通过</el-button
        >
        <el-button type="primary" @click="submitUser(user._id, true)"
          >通过</el-button
        >
      </div> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 1,
      users: [],
      user: {
        id: "",
        date: "",
        name: "",
        phone: "",
        address: "",
        status: 0,
      },
      total:0,
      userBackup: Object.assign({}, this.user),
      multipleSelection: [],
      userFormVisible: false,
      dialogTitle: "",
      rowIndex: 9999,
      rules: {},
    };
  },
  mounted() {
    this.getUsers();
    this.getDataCount()
  },
  methods: {
    handleCurrentChange(val){
      this.pageNum=val
      this.getUsers()
    },
    getDataCount(){
      this.$http.post("/accounting/getRecordCount").then((res)=>{
        this.total=res.data.data.dataTotal-res.data.data.dataPending
      })
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
    getUsers() {
      this.loading = true;
      let data = {
        checked: true,
        pageNum: this.pageNum,
      };
      this.$http
        .post("/accounting/getRecordReviewed", data)
        .then((res) => {
          this.users = res.data.data;
          console.log(this.users);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    handleEdit(index, row) {
      this.dialogTitle = "编辑";
      this.user = Object.assign({}, row);
      this.userFormVisible = true;
      this.rowIndex = index;
    },
    submitUser(id, bool) {
      console.log(bool)
      
      this.xhrequest(this.user.photoUrl)
        .then((file) => {
          return this.$http.post(
            "http://192.168.10.50:80/subject/photo/check",
            file
          );
        })
        .then((res) => {
          if (res.code == 0) {
            let stamp = this.user.time.split(":")[0] * 60 * 60 * 1000;
            let endstamp = this.user.endtime.split(":")[0] * 60 * 60 * 1000;
            let form = {
              photo: file,
              purpose: this.user.reason,
              name: this.user.name,
              subject_type: 1,
              start_time: new Date(this.user.date) + stamp,
              end_time: new Date(this.user.enddate) + endstamp,
              phone: this.user.phoneNum,
            };
            return this.$http.post(
              "http://192.168.10.50:80/subject/file",
              form
            );
          } else {
            this.$message({
              type: "error",
              message: "审核失败!",
            });
            throw "error";
          }
        })
        .then((res1) => {
          let data = {
            _id: id,
            isPassed: bool,
          };
          return this.$http.post("/accounting/changeReviewStatus", data);
        })
        .then((res) => {
          this.users = res.data.data;
          this.$message({
            type: "success",
            message: "审核成功!",
          });
          this.userFormVisible = false;
          this.$router.go(0);
          console.log(this.users);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    handleDelete(index, row) {
      this.$confirm(`确定删除用户 【${row.name}】 吗?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.users.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          console.log("取消删除");
        });
    },
    resetForm(formName) {
      this.$refs[formName].clearValidate();
    },
    mulDelete() {
      let len = this.multipleSelection.length;
      if (len === 0) {
        this.$message({
          type: "warning",
          message: "请至少选择一项！",
        });
      } else {
        this.$confirm(`确定删除选中的 ${len} 个用户吗？`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: `成功删除了${len}条数据！`,
            });
          })
          .catch(() => {
            console.log("取消删除");
          });
      }
    },
    selectChange(val) {
      this.multipleSelection = val;
    },
    handleAdd() {
      this.dialogTitle = "新增";
      this.user = Object.assign({}, this.userBackup);
      this.userFormVisible = true;
    },
  },
};
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
