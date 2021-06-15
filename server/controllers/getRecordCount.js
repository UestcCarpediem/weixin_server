const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");

module.exports = async (ctx, next) => {
    
    
    let aggregate = null
    if (ctx.request.body.openid) {
        let openid = ctx.request.body.openid
        aggregate =await AccList.find({openid:openid})
        
        let pending=await AccList.find({isPassed:true,openid:openid})
        ctx.body = { statusCode: 200, message: '获取统计数据成功', data: {
            dataPending:pending.length,
            dataTotal: aggregate.length,
        }};
    } else{
        let total=await AccList.count()
        let pending=await (await AccList.find({checked:false}))
        ctx.body = { statusCode: 200, message: '获取统计数据成功', data: {
            dataTotal: total,
            dataPending:pending.length
        }};
    }
}
