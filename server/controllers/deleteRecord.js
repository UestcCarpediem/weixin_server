const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");

module.exports = async (ctx, next) => {
    let res = await AccList.findByIdAndRemove(
        {'_id': ctx.request.body.id},
    )
    console.log(res)
    if (res !== null) {
        ctx.body = { statusCode: 200, message: '删除成功', code: 1};
    } else {
        ctx.body = { statusCode: 200, message: '删除失败', code: 2};
    }
}
