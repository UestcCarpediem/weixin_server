const mongoose = require('mongoose')
const User = mongoose.model("User");

module.exports = async (ctx, next) => {
    console.log(ctx.request.body)
    var obj = ctx.request.body;

    User.find({"openid":obj.openid}, function(err, data){
        console.log(data)
        if (!data.length){
            var user = new User(obj)
            user.save(function(err, data){
                ctx.body = { statusCode: 200, message: '更新成功', code: 1, data: 0};
            })
        } else {
            User.update({"openid":obj.openid}, obj, function(){
                ctx.body = { statusCode: 200, message: '更新成功', code: 1, data: 0};
            })
        }
    // let openid = ctx.request.body.openid
    // if (openid) {
    //     let res = await User.update(
    //         {'openid': openid},
    //         {upsert: true},
    //          {
    //             'openid':ctx.request.body.openid,
    //             'photoUrl': ctx.request.body.photoUrl,
    //             'IDcard': ctx.request.body.IDcard,
    //             'Name':ctx.request.body.Name,
    //             'phoneNum':ctx.request.body.phoneNum
    //         }
    //     ).exec()
    //     ctx.body = { statusCode: 200, message: '更新成功', code: 1, data: res};
    // }
})
ctx.body = { statusCode: 200, message: '更新成功', code: 1, data: 0};}
