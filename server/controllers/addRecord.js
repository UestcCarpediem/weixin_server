const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");
module.exports = async (ctx, next) => {
        delete ctx.request.body._id
        let acc = new AccList({
            'openid':ctx.request.body.openid,
            'createAt':new Date().getTime(),
            'photoUrl': ctx.request.body.photoUrl,
            'Name': ctx.request.body.Name,
            'phoneNum': ctx.request.body.phoneNum,
            'IDcard': ctx.request.body.IDcard,
            'date': ctx.request.body.date,
            'time': ctx.request.body.time,
            'reason': ctx.request.body.reason,
            'checked': false,
            'isPassed':false,
            'failedReason':''
        })
        await acc.save()
        ctx.body = { statusCode: 200, message: '添加成功', code: 1};
    
}
