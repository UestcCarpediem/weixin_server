const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const path = require('path')
const cors = require('koa2-cors')
const https = require('https');//node内置https server
const fs = require('fs')
const koaBody = require('koa-body')
const bodyParser = require('koa-bodyparser')
const jwtKoa = require('koa-jwt') //验证token
const jwt = require('jsonwebtoken') //创建token
const mongoose = require('mongoose')
const models = path.join(__dirname, './models');
const secret = 'appIdSessionId' //生成Token 的秘钥
let router = new Router();
const sslify = require('koa-sslify').default;
// app.use(sslify());

app.use(async (ctx, next)=> {
  // ctx.set("withCredentials", true)
  // ctx.set("Access-Control-Allow-Credentials", true);
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Origin', 'http://uestcydri.com:5001/');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , weixin,token');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});

// 遍历 models 并引入
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(path.join(models, file)));

// 引入自定义中间件
const userCheck = require('./middlewares/userCheck')
const errorCatch = require('./middlewares/errorCatch')
const authorizationMiddleware = require('./middlewares/authorizationMiddleware')
// 错误统一处理
app.use(errorCatch);

// app.use(bodyParser())


app.use(require('koa-static')(__dirname + '/images'))
app.use(require('koa-static')(__dirname + '/public/dist'))

app.use(koaBody({
  // 支持文件格式
  multipart: true,
  formidable: {
    // 上传目录
    uploadDir: path.join(__dirname, 'images/upload'),
    // 保留文件扩展名
    keepExtensions: true,
  }
}));

//全局路由除了path 以外都需要携带token去请求
// app.use(jwtKoa({secret:secret}).unless({
//   path: [/\/user\/login/] 
// }))

app.use(userCheck)
app.use(authorizationMiddleware)
// 引入路由分发
let userRoutes = require('./routes')
let addAccountingRoutes = require('./routes/accounting.js')
router.use('/user',userRoutes.routes())
router.use('/accounting',addAccountingRoutes.routes())

app.use(router.routes())
app.use(router.allowedMethods())


app.on('error', function(err){
	console.log('errorEmiter',err);
})


// 连接 mongoDB
connect()
function connect() {
    mongoose.connection
      .on('error', console.log)
      .on('disconnected', connect)
      .once('open', ()=> {
        var options = {
          key: fs.readFileSync('./6337425__uestcydri.com.key'),  //私钥文件路径
          cert: fs.readFileSync('./6337425__uestcydri.com.pem')  //证书文件路径
      };
      https.createServer(options, app.callback()).listen(5000, () => {
          console.log(`server running success at 5000`)
      });
        app.listen(5001, () => console.log('[Server] starting at port 5000'))
      });
    return mongoose.connect('mongodb://localhost:27017/bookkeepingDemo', { useNewUrlParser: true });
    // return mongoose.connect('mongodb://test:test@localhost:27017/bookkeepingDemo', { useNewUrlParser: true });
  }
