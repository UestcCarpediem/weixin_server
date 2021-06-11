const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");
const jwt = require("jsonwebtoken");
const secret = 'luoshijiezhenmei' //生成Token 的秘钥


module.exports = async (ctx, next) => {

    let token = ctx.request.headers["token"];

    let payload = await verify(token, secret);
    let { time, timeout } = payload;
    let data = new Date().getTime();
    if (data - time <= timeout) {
        console.log(ctx)
        let _id = ctx.request.body._id
        let isPassed = ctx.request.body.isPassed
        if (_id) {
            let res = await AccList.update(
                { '_id': _id },
                {
                    '$set': {
                        'checked': true,
                        'isPassed': isPassed,
                        'failedReason': ctx.request.body.failedReason
                    }
                }
            ).exec()
            ctx.body = { statusCode: 200, message: '审核成功', code: 1, data: res };
        }
    } else {
        //过期
        ctx.body = {
            statusCode: -1,
            message: 'token 已过期'
        };
    }
}
