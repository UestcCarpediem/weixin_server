const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");

const jwt = require("jsonwebtoken");
const secret = 'luoshijiezhenmei' //生成Token 的秘钥

module.exports = async (ctx, next) => {  
    let token = ctx.request.headers["token"];

    let payload = await verify(token,secret);
    let { time, timeout } = payload;
    let data = new Date().getTime();
    if (data - time <= timeout) {
        let checked = ctx.request.body.checked  
    let pageNum=ctx.request.body.pageNum-1
    let aggregate = null
        aggregate = AccList.find(
            {   
                    'checked':checked,
                
            }, 
           
        ).sort({"createAt":-1}).skip(pageNum*20).limit(20);
        

        let data = await aggregate.exec()

        ctx.body = { statusCode: 200, message: '获取预约记录成功', data: data};
    } else {
        //过期
      ctx.body = {
        statusCode: -1,
        message:'token 已过期'
      };
    }

    
    
}
