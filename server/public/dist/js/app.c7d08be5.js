(function(e){function t(t){for(var n,i,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)i=r[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1141:function(e,t,a){"use strict";var n=a("a87f"),s=a.n(n);s.a},1193:function(e,t,a){"use strict";var n=a("cf9a"),s=a.n(n);s.a},"1eb0":function(e,t,a){"use strict";var n=a("ab12"),s=a.n(n);s.a},"2a56":function(e,t,a){},"45f2":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("a481"),a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=a("bc3a"),o=a.n(s),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],l={mounted:function(){}},c=l,u=(a("5c0b"),a("2877")),d=Object(u["a"])(c,i,r,!1,null,null,null);d.options.__file="App.vue";var p=d.exports,m=a("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"index-box"},[n("el-aside",{attrs:{width:"asideWidth"}},[n("div",{staticClass:"logo"},[n("img",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],attrs:{src:a("b640"),alt:"ELementUI",width:"160",height:"40"}})]),n("menus",{attrs:{isCollapse:e.isCollapse}})],1),n("el-container",[n("el-header",[n("headers")],1),n("el-main",[e.isRouterAlive?n("router-view"):e._e()],1)],1)],1)},f=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticClass:"menu-nav",attrs:{router:"","default-active":e.currentPath,"background-color":"#20222A","text-color":"rgba(255,255,255,.8)","active-text-color":"#ffd04b",collapse:e.isCollapse}},[a("el-menu-item",{attrs:{index:"/console"}},[a("i",{staticClass:"el-icon-location"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("主页")])]),a("el-menu-item",{attrs:{index:"/users"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("待审核")])]),a("el-menu-item",{attrs:{index:"/articles"}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("已审核")])])],1)},b=[],v={props:["isCollapse"],data:function(){return{currentPath:location.pathname}}},w=v,y=(a("b580"),Object(u["a"])(w,g,b,!1,null,"d56213ce",null));y.options.__file="menus.vue";var _=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-box"},[a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:6}},[a("button",{staticClass:"btn-tool",attrs:{title:"折叠"},on:{click:e.collapse}},[a("i",{staticClass:"el-icon-d-arrow-left"})]),a("button",{staticClass:"btn-tool",attrs:{title:"刷新"},on:{click:e.refresh}},[a("i",{staticClass:"el-icon-refresh"})]),a("button",{staticClass:"btn-tool",attrs:{title:"全屏"},on:{click:e.Utils.fullScreen}},[a("i",{staticClass:"el-icon-rank"})])]),a("el-col",{attrs:{span:6,align:"right"}},[a("span",[e._v(e._s(e.Utils.todayDate()))]),a("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[e._v("\n          "+e._s(e.username)),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("退出登录")])],1)],1)],1)],1),a("el-dialog",{attrs:{title:"便签",width:"400px","close-on-click-modal":!1,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},closed:e.saveNotes}},[a("el-input",{attrs:{type:"textarea",rows:7,placeholder:"请输入内容"},model:{value:e.notes,callback:function(t){e.notes=t},expression:"notes"}})],1)],1)},C=[],k={inject:["reload"],data:function(){return{isCollapse:!1,dialogVisible:!1,notes:localStorage.getItem("notes")||"便签中的内容会存储在本地，这样即便你关掉了浏览器，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录"}},methods:{collapse:function(){this.$store.commit("switchCollapse")},refresh:function(){this.reload()},saveNotes:function(){localStorage.setItem("notes",this.notes)},handleCommand:function(e){switch(e){case"logout":this.$router.replace({path:"/login"});break}}},computed:{username:function(){var e=JSON.parse(sessionStorage.getItem("user")),t=e.username;return t.toUpperCase()}}},$=k,F=(a("e237"),Object(u["a"])($,x,C,!1,null,"bb41bcd0",null));F.options.__file="header.vue";var S=F.exports,j={provide:function(){return{reload:this.reload}},data:function(){return{isRouterAlive:!0}},components:{Menus:_,Headers:S},methods:{reload:function(){var e=this;this.isRouterAlive=!1,this.$nextTick(function(){e.isRouterAlive=!0})}},computed:{isCollapse:function(){return this.$store.state.isCollapse},asideWidth:function(){return this.$store.state.isCollapse?"auto":"200px"}}},T=j,O=(a("ca9c"),Object(u["a"])(T,h,f,!1,null,null,null));O.options.__file="Index.vue";var N=O.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"header_container"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-aqua",on:{click:function(t){e.statAll(0)}}},[a("i",{staticClass:"el-icon-edit"})]),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[e._v("总预约数：")]),a("span",{staticClass:"info-box-number"},[e._v(e._s(e.total))])])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-aqua",on:{click:function(t){e.statAll(0)}}},[a("i",{staticClass:"el-icon-edit"})]),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[e._v("待审核数：")]),a("span",{staticClass:"info-box-number"},[e._v(e._s(e.pending))])])])])],1),e._m(0)])},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"echarts-box"},[n("img",{staticStyle:{width:"100%"},attrs:{src:a("f912")}})])}],U=(a("7f7f"),a("313e")),D=a.n(U),P={title:{text:"这是一个演示用例",textStyle:{color:"#666",fontSize:18,fontWeight:"normal"},show:!0,x:"center"},grid:{left:"5%",right:"10%",bottom:"15%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["出货量","进货量","售出量","测试一","测试二","测试三","测试四","测试五","测试六","测试七","测试八","测试九","测试十","复试一","复试二","复试三","复试四","复试五","复试六","复试七","复试八","复试九","复试十","补位一","补位二","补位三","补位四","补位五","补位六","补位七"],selected:{"出货量":!0,"进货量":!1,"售出量":!0,"测试一":!1,"测试二":!1,"测试三":!1,"测试四":!1,"测试五":!0,"测试六":!1,"测试七":!1,"测试八":!1,"测试九":!1,"测试十":!1,"复试一":!1,"复试二":!0,"复试三":!1,"复试四":!1,"复试五":!1,"复试六":!1,"复试七":!1,"复试八":!1,"复试九":!1,"复试十":!1,"补位一":!1,"补位二":!1,"补位三":!1,"补位四":!1,"补位五":!1,"补位六":!1,"补位七":!1},show:!0,type:"scroll",orient:"vertical",right:15,top:45,backgroundColor:"#eee",padding:10},toolbox:{feature:{myTool:{show:!0,title:"自定义扩展方法",icon:"image://http://echarts.baidu.com/images/favicon.png",onclick:function(){}},magicType:{type:["line","bar"],title:{line:"折线图",bar:"柱状图"}},restore:{},saveAsImage:{}}},xAxis:{name:"( 月份 )",type:"category",axisLabel:{rotate:30},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{name:"( 这是Y轴名称：数值 )",nameLocation:"middle",nameGap:60,nameRotate:90,type:"value",axisLine:{show:!0,lineStyle:{type:"solid"}},splitLine:{show:!0,lineStyle:{color:"#ddd",type:"solid"}}},dataZoom:[{type:"slider",start:0,end:50,bottom:0,show:!0}],series:[{name:"出货量",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"进货量",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"line",label:{show:!0}},{name:"售出量",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试一",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试二",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试三",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试四",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试五",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试六",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试七",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试八",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试九",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"测试十",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试一",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试二",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试三",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试四",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试五",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试六",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试七",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试八",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试九",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"复试十",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位一",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位二",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位三",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位四",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位五",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位六",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}},{name:"补位七",data:[820,932,901,934,1290,1330,1320,901,934,1290,1330,1320],type:"bar",label:{show:!0}}]},I=P,A={data:function(){return{total:0,pending:0}},mounted:function(){this.getDataCount(),this.drawEcharts()},methods:{getDataCount:function(){var e=this;this.$http.post("/accounting/getRecordCount").then(function(t){e.total=t.data.data.dataTotal,e.pending=t.data.data.dataPending})},drawEcharts:function(){var e=this,t=D.a.init(document.getElementById("echarts"));I.toolbox.feature.myTool.onclick=function(){e.$message({type:"info",message:"您刚刚点击了自定义工具按钮！"})},t.setOption(I),t.on("click",function(t){e.$message({type:"info",message:"您点击了： ".concat(t.name," - ").concat(t.seriesName," - ").concat(t.data)})})}}},q=A,B=(a("f1f4"),Object(u["a"])(q,R,E,!1,null,"37145630",null));B.options.__file="Console.vue";var M=B.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users},on:{"selection-change":e.selectChange}},[a("el-table-column",{attrs:{sortable:"",prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",width:"180"}}),a("el-table-column",{attrs:{prop:"Name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"phoneNum",label:"手机",width:"180"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.checked?"已审核":"未审核")+"\n      ")]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("查看详情")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{attrs:{background:"","page-sizes":[10,20,30,50],"page-size":20,layout:"total, prev, pager, next",total:e.pending},on:{"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:e.dialogTitle,width:"600px",visible:e.userFormVisible},on:{"update:visible":function(t){e.userFormVisible=t},close:function(t){e.resetForm("userForm")}}},[a("el-form",{ref:"userForm",attrs:{model:e.user,rules:e.rules}},[a("el-form-item",{attrs:{label:"照片","label-width":"100px"}},[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.user.photoUrl}})]),a("el-form-item",{attrs:{label:"姓名","label-width":"100px"}},[a("label",[e._v(e._s(e.user.Name))])]),a("el-form-item",{attrs:{label:"手机","label-width":"100px"}},[a("label",[e._v(e._s(e.user.phoneNum))])]),a("el-form-item",{attrs:{label:"到访日期","label-width":"100px"}},[a("label",[e._v(e._s(e.user.date))])]),a("el-form-item",{attrs:{label:"到访时间","label-width":"100px"}},[a("label",[e._v(e._s(e.user.time))])]),a("el-form-item",{attrs:{label:"到访事由","label-width":"100px"}},[a("label",[e._v(e._s(e.user.reason))])]),a("el-form-item",{attrs:{label:"状态","label-width":"100px"}},[e.user.checked?a("label",[e._v("已审核")]):e._e(),a("label",[e._v("待审核")])]),a("el-form-item",{attrs:{label:"拒绝理由","label-width":"100px"}},[a("el-input",{attrs:{placeholder:"拒绝时填写"},model:{value:e.failedReason,callback:function(t){e.failedReason=t},expression:"failedReason"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.userFormVisible=!1}}},[e._v("取 消")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.uploading,expression:"uploading"}],attrs:{type:"danger"},on:{click:function(t){e.submitUser(e.user._id,!1)}}},[e._v("不通过")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.uploading,expression:"uploading"}],attrs:{type:"primary"},on:{click:function(t){e.submitUser(e.user._id,!0)}}},[e._v("通过")])],1)],1)],1)},z=[],L=(a("34ef"),a("4917"),a("28a5"),a("f751"),{data:function(){return{uploading:!1,step:"",ruleForm:{coverUrl:"",coverFile:""},pageNum:1,users:[],user:{id:"",date:"",name:"",phone:"",address:"",status:0},failedReason:"",userBackup:Object.assign({},this.user),multipleSelection:[],userFormVisible:!1,dialogTitle:"",rowIndex:9999,total:0,pending:0,rules:{}}},mounted:function(){this.getUsers(),this.getDataCount()},methods:{handleCurrentChange:function(e){this.pageNum=e,this.getUsers()},getDataCount:function(){var e=this;this.$http.post("/accounting/getRecordCount").then(function(t){e.total=t.data.data.dataTotal,e.pending=t.data.data.dataPending})},imgUrlToFile:function(e){var t=this,a=e,n=new Image;n.crossOrigin="*",n.onload=function(){var e=t.getBase64Image(n),a=t.base64toBlob(e),s=t.getFileName(t.ruleForm.coverUrl);t.ruleForm.coverFile=t.blobToFile(a,s)},n.src=a},getBase64Image:function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);var n=e.src.substring(e.src.lastIndexOf(".")+1).toLowerCase(),s=t.toDataURL("image/"+n);return s},base64toBlob:function(e){var t=e.split(","),a=t[0].match(/:(.*?);/)[1],n=atob(t[1]),s=n.length,o=new Uint8Array(s);while(s--)o[s]=n.charCodeAt(s);return new Blob([o],{type:a})},blobToFile:function(e,t){return e.lastModifiedDate=new Date,e.name=t,e},getFileName:function(e){var t=e.lastIndexOf("/");return e.substring(t+1)},xhrequest:function(e){return new Promise(function(t,a){var n=new XMLHttpRequest;n.open("get",e,!0),n.responseType="blob",n.onload=function(){var e=new window.File([this.response],"temp",{type:"image/jpeg"});t(e)},n.send()})},getUsers:function(){var e=this;this.loading=!0;var t={checked:!1,pageNum:this.pageNum};this.$http.post("/accounting/getRecordReviewed",t).then(function(t){e.users=t.data.data,console.log(e.users)}).catch(function(e){console.error(e)})},handleEdit:function(e,t){this.dialogTitle="编辑",this.user=Object.assign({},t),console.log(new Date(this.user.date+" "+this.user.time).getTime()),this.userFormVisible=!0,this.rowIndex=e,this.imgUrlToFile(this.user.photoUrl)},submitUser:function(e,t){var a=this;if(t)console.log(this.ruleForm),this.uploading=!0,this.xhrequest(this.user.photoUrl).then(function(e){a.step=1,console.log(e);var t=new FormData;return t.append("photo",a.ruleForm.coverFile),a.$http.post("http://192.168.10.50:80/subject/photo/check",t)}).then(function(e){if(a.step++,console.log(e),0==e.data.code){a.user.time.split(":")[0];var t=new FormData;return t.append("photo",a.ruleForm.coverFile),a.$http.post("http://192.168.10.50:80/subject/photo",t)}throw a.$message({type:"error",message:"未能检测到人脸!"}),"error"}).then(function(e){if(a.step++,0==e.data.code){var t=[];t.push(e.data.data.id);var n={photo_ids:t,name:a.user.Name,purpose:a.user.reason,phone:a.user.phone,subject_type:1,start_time:Math.round(new Date(a.user.date+" "+a.user.time).getTime()/1e3),end_time:Math.round((new Date(a.user.date+" "+a.user.time).getTime()+216e5)/1e3)};return a.$http.post("http://192.168.10.50:80/subject",n)}a.$message({type:"error",message:"上传照片失败!"})}).then(function(n){if(a.step++,0==n.data.code){var s={_id:e,isPassed:t};return a.$http.post("/accounting/changeReviewStatus",s)}a.$message({type:"error",message:"添加记录失败!"})}).then(function(e){a.users=e.data.data,a.$message({type:"success",message:"审核成功!"}),a.uploading=!1,a.userFormVisible=!1,a.$router.go(0),console.log(a.users)}).catch(function(e){switch(a.uploading=!1,a.step){case 1:a.$message({type:"error",message:"未能检测到人脸!"});break;case 2:a.$message({type:"error",message:"照片上传失败!"});break;case 3:a.$message({type:"error",message:"添加记录失败!"});break}console.error(e)});else{var n={_id:e,isPassed:t,failedReason:this.failedReason};this.$http.post("/accounting/changeReviewStatus",n).then(function(e){a.$message({type:"success",message:"审核成功!"}),a.userFormVisible=!1,a.$router.go(0)})}},handleDelete:function(e,t){var a=this;this.$confirm("确定删除用户 【".concat(t.name,"】 吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.users.splice(e,1),a.$message({type:"success",message:"删除成功!"})}).catch(function(){console.log("取消删除")})},resetForm:function(e){this.$refs[e].clearValidate()},mulDelete:function(){var e=this,t=this.multipleSelection.length;0===t?this.$message({type:"warning",message:"请至少选择一项！"}):this.$confirm("确定删除选中的 ".concat(t," 个用户吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"成功删除了".concat(t,"条数据！")})}).catch(function(){console.log("取消删除")})},selectChange:function(e){this.multipleSelection=e},handleAdd:function(){this.dialogTitle="新增",this.user=Object.assign({},this.userBackup),this.userFormVisible=!0}}}),J=L,H=(a("1141"),Object(u["a"])(J,V,z,!1,null,"1a25fa56",null));H.options.__file="Users.vue";var W=H.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users},on:{"selection-change":e.selectChange}},[a("el-table-column",{attrs:{sortable:"",prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"time",label:"时间",width:"180"}}),a("el-table-column",{attrs:{prop:"Name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"phoneNum",label:"手机",width:"180"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.checked?"已审核":"未审核")+"\n      ")]}}])}),a("el-table-column",{attrs:{label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.isPassed?"通过":"未通过")+"\n      ")]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("查看详情")])]}}])})],1),a("el-pagination",{attrs:{background:"","page-sizes":[10,20,30,50],"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:e.dialogTitle,width:"600px",visible:e.userFormVisible},on:{"update:visible":function(t){e.userFormVisible=t},close:function(t){e.resetForm("userForm")}}},[a("el-form",{ref:"userForm",attrs:{model:e.user,rules:e.rules}},[a("el-form-item",{attrs:{label:"照片","label-width":"100px"}},[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.user.photoUrl}})]),a("el-form-item",{attrs:{label:"姓名","label-width":"100px"}},[a("label",[e._v(e._s(e.user.Name))])]),a("el-form-item",{attrs:{label:"身份证号","label-width":"100px"}},[a("label",[e._v(e._s(e.user.IDcard))])]),a("el-form-item",{attrs:{label:"手机","label-width":"100px"}},[a("label",[e._v(e._s(e.user.phoneNum))])]),a("el-form-item",{attrs:{label:"到访日期","label-width":"100px"}},[a("label",[e._v(e._s(e.user.date))])]),a("el-form-item",{attrs:{label:"到访时间","label-width":"100px"}},[a("label",[e._v(e._s(e.user.time))])]),a("el-form-item",{attrs:{label:"到访事由","label-width":"100px"}},[a("label",[e._v(e._s(e.user.reason))])]),a("el-form-item",{attrs:{label:"状态","label-width":"100px"}},[e.user.checked?a("label",[e._v("已审核")]):a("label",[e._v("待审核")])]),a("el-form-item",{attrs:{label:"审核状态","label-width":"100px"}},[e.user.isPassed?a("label",[e._v("已通过")]):a("label",[e._v("未通过")])]),e.user.isPassed?e._e():a("el-form-item",{attrs:{label:"拒绝理由","label-width":"100px"}},[null==e.user.failedReason?a("label",[e._v("无")]):a("label",[e._v(e._s(e.user.failedReason))])])],1)],1)],1)},Y=[],G={data:function(){return{pageNum:1,users:[],user:{id:"",date:"",name:"",phone:"",address:"",status:0},total:0,userBackup:Object.assign({},this.user),multipleSelection:[],userFormVisible:!1,dialogTitle:"",rowIndex:9999,rules:{}}},mounted:function(){this.getUsers(),this.getDataCount()},methods:{handleCurrentChange:function(e){this.pageNum=e,this.getUsers()},getDataCount:function(){var e=this;this.$http.post("/accounting/getRecordCount").then(function(t){e.total=t.data.data.dataTotal-t.data.data.dataPending})},xhrequest:function(e){return new Promise(function(t,a){var n=new XMLHttpRequest;n.open("get",e,!0),n.responseType="blob",n.onload=function(){var e=new window.File([this.response],"temp",{type:"image/jpeg"});t(e)},n.send()})},getUsers:function(){var e=this;this.loading=!0;var t={checked:!0,pageNum:this.pageNum};this.$http.post("/accounting/getRecordReviewed",t).then(function(t){e.users=t.data.data,console.log(e.users)}).catch(function(e){console.error(e)})},handleEdit:function(e,t){this.dialogTitle="编辑",this.user=Object.assign({},t),this.userFormVisible=!0,this.rowIndex=e},submitUser:function(e,t){var a=this;console.log(t),this.xhrequest(this.user.photoUrl).then(function(e){return a.$http.post("http://192.168.10.50:80/subject/photo/check",e)}).then(function(e){if(0==e.code){var t=60*a.user.time.split(":")[0]*60*1e3,n={photo:file,purpose:a.user.reason,name:a.user.name,subject_type:1,start_time:new Date(a.user.date)+t,end_time:new Date(a.user.date)+t+216e5,phone:a.user.phoneNum};return a.$http.post("http://192.168.10.50:80/subject/file",n)}throw a.$message({type:"error",message:"审核失败!"}),"error"}).then(function(n){var s={_id:e,isPassed:t};return a.$http.post("/accounting/changeReviewStatus",s)}).then(function(e){a.users=e.data.data,a.$message({type:"success",message:"审核成功!"}),a.userFormVisible=!1,a.$router.go(0),console.log(a.users)}).catch(function(e){console.error(e)})},handleDelete:function(e,t){var a=this;this.$confirm("确定删除用户 【".concat(t.name,"】 吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.users.splice(e,1),a.$message({type:"success",message:"删除成功!"})}).catch(function(){console.log("取消删除")})},resetForm:function(e){this.$refs[e].clearValidate()},mulDelete:function(){var e=this,t=this.multipleSelection.length;0===t?this.$message({type:"warning",message:"请至少选择一项！"}):this.$confirm("确定删除选中的 ".concat(t," 个用户吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"成功删除了".concat(t,"条数据！")})}).catch(function(){console.log("取消删除")})},selectChange:function(e){this.multipleSelection=e},handleAdd:function(){this.dialogTitle="新增",this.user=Object.assign({},this.userBackup),this.userFormVisible=!0}}},Z=G,K=(a("70dc"),Object(u["a"])(Z,X,Y,!1,null,"31b13604",null));K.options.__file="Articles.vue";var Q=K.exports,ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"echarts-box"},[a("div",{staticClass:"echarts",attrs:{id:"echarts"}})])}],ae={mounted:function(){this.drawEcharts()},methods:{drawEcharts:function(){var e=this,t=D.a.init(document.getElementById("echarts"));I.toolbox.feature.myTool.onclick=function(){e.$message({type:"info",message:"您刚刚点击了自定义工具按钮！"})},t.setOption(I),t.on("click",function(t){e.$message({type:"info",message:"您点击了： ".concat(t.name," - ").concat(t.seriesName," - ").concat(t.data)})})}}},ne=ae,se=(a("1193"),Object(u["a"])(ne,ee,te,!1,null,"b65a719a",null));se.options.__file="Echarts.vue";var oe=se.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-box"},[a("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.rules}},[a("h3",{staticClass:"title"},[e._v("系 统 登 录")]),a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"账 号: admin","prefix-icon":"el-icon-goods"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:e.textType,autocomplete:"off",placeholder:"密 码: admin","prefix-icon":"el-icon-time"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.login("loginForm")}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[a("i",{staticClass:"el-input__icon el-icon-view btn-eye",attrs:{slot:"suffix"},on:{click:e.changeType},slot:"suffix"})])],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showMsg,expression:"showMsg"}],staticStyle:{"margin-bottom":"0"}},[a("span",{staticClass:"text-danger"},[e._v("提示：用户名或密码错误，请重试！")])]),a("el-form-item",[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-btn",attrs:{type:"primary"},on:{click:function(t){e.login("loginForm")}}},[e._v("登 录")])],1)],1)],1)},re=[],le={data:function(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:" ",trigger:"blur"}],password:[{required:!0,message:" ",trigger:"blur"}]},loading:!1,showMsg:!1,textType:"password"}},mounted:function(){var e=this.$route.query.hastoken;console.log(e),1==e&&this.$message({type:"error",message:"token过期!"})},methods:{login:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("login failed"),!1;t.loading=!0,t.$http.post("/accounting/auth/login",t.loginForm).then(function(e){console.log(e),e=e.data,200==e.statusCode?(t.$cookies.set("token",e.toke),t.$cookies.set("Authorization",e.Authorization),t.$http.interceptors.request.use(function(e){return e.headers.token=t.$cookies.get("token"),e.headers.Authorization=t.$cookies.get("Authorization"),e},function(e){return Promise.reject(e)}),setTimeout(function(){t.loading=!1,sessionStorage.setItem("user",JSON.stringify(t.loginForm)),t.$router.replace({path:"/console"})},2e3)):(t.loading=!1,t.showMsg=!0)})})},changeType:function(){this.textType="password"===this.textType?"text":"password"}}},ce=le,ue=(a("af73"),Object(u["a"])(ce,ie,re,!1,null,"5ea7ced7",null));ue.options.__file="Login.vue";var de=ue.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"not-found"},[e._v("\n  Sorry, Not Found the Page :)\n")])},me=[],he={},fe=he,ge=(a("1eb0"),Object(u["a"])(fe,pe,me,!1,null,"5358bdd0",null));ge.options.__file="NotFound.vue";var be=ge.exports;n["default"].use(m["a"]);var ve=new m["a"]({mode:"history",base:"",routes:[{path:"/login",component:de},{path:"/",component:N,children:[{path:"/console",name:"console",component:M},{path:"/users",name:"users",component:W},{path:"/articles",name:"articles",component:Q},{path:"/echarts",name:"echarts",component:oe},{path:"/404",component:be}]},{path:"*",redirect:{path:"/404"}}]});ve.beforeEach(function(e,t,a){var n,s,o="/login";n=e.path,s=sessionStorage.getItem("user"),n===o&&sessionStorage.removeItem("user"),s||n===o?a():a({path:o})});var we=ve,ye=a("2f62");n["default"].use(ye["a"]);var _e=new ye["a"].Store({state:{isCollapse:!1},mutations:{switchCollapse:function(e){e.isCollapse=!e.isCollapse}},actions:{}}),xe=a("5c96"),Ce=a.n(xe),ke=(a("6b54"),a("f576"),a("d4ec")),$e=a("bee2"),Fe=function(){function e(){Object(ke["a"])(this,e)}return Object($e["a"])(e,null,[{key:"todayDate",value:function(){var e,t,a,n,s;e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),s=e.getDay();var o=["天","一","二","三","四","五","六"];return"".concat(t," 年 ").concat(a.toString().padStart(2,"0")," 月 ").concat(n.toString().padStart(2,"0")," 日 星期").concat(o[s])}},{key:"fullScreen",value:function(){var e=document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen;if(e){var t=document.exitFullscreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen;t&&t.call(document)}else{var a=document.documentElement,n=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullscreen;n&&n.call(a)}}}]),e}(),Se=(a("3d5b"),a("0fae"),a("96eb")),je=a.n(Se),Te=je.a.Random;je.a.mock("/api/login","post",function(e){var t=JSON.parse(e.body),a=t.username,n=t.password;return"admin"===a&&"admin"===n});var Oe=function(){for(var e=[],t=0;t<10;t++){var a={id:t+1,date:Te.date("yyyy-MM-dd"),name:Te.cname(),address:je.a.mock("@county(true)"),phone:je.a.mock(/^1[0-9]{10}$/),status:Te.integer(0,1)};e.push(a)}return e};je.a.mock("/api/users",Oe);var Ne=function(){for(var e=[],t=0;t<20;t++){var a={id:t+1,date:Te.date("yyyy-MM-dd"),title:Te.csentence(),author:Te.cname(),content:Te.csentence(),status:Te.integer(0,1)};e.push(a)}return e};je.a.mock("/api/articles",Ne);var Re=a("2b27"),Ee=a.n(Re);n["default"].use(Ee.a),o.a.interceptors.request.use(function(e){return e.headers.token=n["default"].$cookies.get("token"),e.headers.Authorization=n["default"].$cookies.get("Authorization"),e},function(e){return Promise.reject(e)}),o.a.interceptors.response.use(function(e){console.log(e);try{return-1==e.data.statusCode&&we.replace({path:"/login",query:{hastoken:1}}),e}catch(t){return console.log(t),e}},function(e){return Promise.reject(e)}),n["default"].config.productionTip=!1,n["default"].use(Ce.a),o.a.interceptors.request.use(function(e){return e.withCredentials=!0,e},function(e){return Promise.reject(e)}),o.a.defaults.baseURL="https://uestcydri.com:5000",o.a.defaults.withCredentials=!0,n["default"].prototype.$http=o.a,n["default"].prototype.Utils=Fe,new n["default"]({router:we,store:_e,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(e,t,a){},"5f61":function(e,t,a){},6662:function(e,t,a){},"67e4":function(e,t,a){},"70dc":function(e,t,a){"use strict";var n=a("45f2"),s=a.n(n);s.a},a87f:function(e,t,a){},ab12:function(e,t,a){},af73:function(e,t,a){"use strict";var n=a("5f61"),s=a.n(n);s.a},b580:function(e,t,a){"use strict";var n=a("67e4"),s=a.n(n);s.a},b640:function(e,t,a){e.exports=a.p+"img/logo.43e243a6.jpg"},ca9c:function(e,t,a){"use strict";var n=a("2a56"),s=a.n(n);s.a},cf9a:function(e,t,a){},e237:function(e,t,a){"use strict";var n=a("6662"),s=a.n(n);s.a},e2cd:function(e,t,a){},f1f4:function(e,t,a){"use strict";var n=a("e2cd"),s=a.n(n);s.a},f912:function(e,t,a){e.exports=a.p+"img/dakdnew.9605b36f.jpg"}});
//# sourceMappingURL=app.c7d08be5.js.map