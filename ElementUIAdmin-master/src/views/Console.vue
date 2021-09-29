<template>
<div class="container">
  <div class="header_container">
    <el-col :span="12">
                <div class="info-box">
                    <span class="info-box-icon bg-aqua" @click="statAll(0)">
                      <i class="el-icon-edit"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">总预约数：</span>
                        <span class="info-box-number">{{total}}</span>
                    </div>
                </div>
    </el-col>
            <el-col :span="12">
                <div class="info-box">
                    <span class="info-box-icon bg-aqua" @click="statAll(0)">
                      <i class="el-icon-edit"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">待审核数：</span>
                        <span class="info-box-number">{{ pending }}</span>
                    </div>
                </div>
            </el-col>
  </div>
    <div class="echarts-box">
    <!-- <div class="echarts" id="echarts"></div> -->
    <img src="../assets/dakdnew.jpg" style="width:100%"/>
  </div>
</div>
</template>

<script>
import echarts from 'echarts'
import option from './../common/option'
export default {
  data(){
    return{
      total:0,
      pending:0
    }
  },
  mounted () {
    this.getDataCount()
    this.drawEcharts()
  },
  methods: {
    getDataCount(){
      this.$http.post("/main_api/accounting/getRecordCount").then((res)=>{
        this.total=res.data.data.dataTotal
        this.pending=res.data.data.dataPending
      })
    },
    drawEcharts () {
      let chart = echarts.init(document.getElementById('echarts'))

      // 自定义工具事件
      option.toolbox.feature.myTool.onclick = () => {
        this.$message({
          type: 'info',
          message: '您刚刚点击了自定义工具按钮！'
        })
      }

      // 设置配置项
      chart.setOption(option)

      // 绑定点击事件
      chart.on('click', (param) => {
        this.$message({
          type: 'info',
          message: `您点击了： ${param.name} - ${param.seriesName} - ${param.data}`
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header_container{
      position: relative;
      width: 800px;
      margin: 0 auto;
      height: 100px;
      margin-top: 50px;
      .info-box {
        box-shadow: 0 1px 1px #888888;
        border-radius: 2px;
        border-radius: 2px;
        color: #333;
        font-weight: 400;
        font-size: 14px;
        display: inline-block;
        cursor: pointer;
        margin-left: 50px;
        margin-right: 80px;
        width: 200px;
          .info-box-content {
            text-align: center;
            vertical-align: middle;
            display: inherit;
            width: 100px;
            .info-box-number{
              font-size: 18 !important;
            }
        }
      }
      
    }
.echarts-box {
  position: relative;
  margin-top: 20px;
  .echarts {
    width: 98%;
    height: 500px;
  }
}
.echarts {
        float: left;
        width: 500px;
        height: 400px;
    }
    .c-charts {
        height: 500px;
        width: 100%;
    }

    .info-box {
        cursor: pointer;
    }

    .content {
        min-height: 100px;
    }
    .info-box-icon{
      display: inherit;
      width: 50px;
      text-align: center;
      background-color: #00c0ef;
      height: 50px;
      i{
        line-height: 50px;
        color: ivory;
      }
    }
    
</style>
