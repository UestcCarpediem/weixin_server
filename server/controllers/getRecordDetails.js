const mongoose = require('mongoose')

const AccList = mongoose.model("AccList");
module.exports = async (ctx, next) => {
    let aggregate = null
    aggregate = await AccList.aggregate([
        {$match: {
            'openid':ctx.state.user.openid,
            '_id': mongoose.Types.ObjectId(ctx.request.body.id),
        }},
        {
            $project : {
                _id: '$_id',
                recordYear: '$recordYear',
                recordMonth: '$recordMonth',
                recordDay: '$recordDay',
                photoUrl: "$photoUrl" , 
                city: '$city',
                province: '$province',
                country: '$country',
                IDcard: '$IDcard',
                time: '$time',
                reason: '$reason',
                checked: '$checked',
                failedReason:'$failedReason'
            }
        }
        
    ]);

    ctx.body = { statusCode: 200, message: '获取详情成功', code: 1, data: aggregate[0]};
}
