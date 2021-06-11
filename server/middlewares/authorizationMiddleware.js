
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const secret = 'luoshijiezhenmei' //生成Token 的秘钥
export default async (ctx, next) => {
    let token = ctx.request.headers["token"];

    let payload = await jwt.verify(token, secret);
    let { time, timeout } = payload;
    let data = new Date().getTime();
    if (data - time <= timeout) {
        await next();
    }
    else {
        ctx.body = {
            statusCode: -1,
            message: 'token 已过期'
        };
    }
}