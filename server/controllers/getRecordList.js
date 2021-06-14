const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");

module.exports = async (ctx, next) => {
    let aggregate = null
    let pageNum=ctx.request.body.pageNum-1
    if (true) {
        aggregate = AccList.find(
            {  
                    'openid':ctx.request.body.openid,
            }, 
         (err,res)=>{
            console.log(res)
         }
        ).sort({"createAt":-1}).skip(pageNum*20).limit(20);
        
        

        let data = await aggregate.exec()

        ctx.body = { statusCode: 200, message: '获取预约记录成功', data };
    } 
}
