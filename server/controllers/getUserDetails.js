const mongoose = require('mongoose')

const User = mongoose.model("User");
module.exports = async (ctx, next) => {
    let aggregate = null
    aggregate = await User.aggregate([
        {$match: {
            'openid':ctx.request.body.openid,
        }},
        {
            $project : {
                _id: '$_id',
                openid: "$openid" , 
                photoUrl: '$photoUrl',
                IDcard: '$IDcard',
                Name: '$Name',
                phoneNum: '$phoneNum',
            }
        }
        
    ]);

    ctx.body = { statusCode: 200, message: '获取详情成功', code: 1, data: aggregate[0]};
}
