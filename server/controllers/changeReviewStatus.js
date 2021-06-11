const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");
module.exports = async (ctx, next) => {
    console.log(ctx)
    let _id = ctx.request.body._id
    let isPassed = ctx.request.body.isPassed
    if (_id) {
        let res = await AccList.update(
            {'_id': _id},
            {'$set': {
                'checked': true,
                'isPassed':isPassed,
                'failedReason':ctx.request.body.failedReason
            }}
        ).exec()
        ctx.body = { statusCode: 200, message: '审核成功', code: 1, data: res};
    }
}
