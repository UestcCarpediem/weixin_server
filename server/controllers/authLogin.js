const request = require('request')
const mongoose = require('mongoose')
const config = require('../config.js')
const utils = require('../utils')
const jwt = require('jsonwebtoken') //创建token
const secret = 'luoshijiezhenmei' //生成Token 的秘钥

module.exports = async (ctx, next) => {
    // console.log(ctx)
    let resultData = ''
    let loginForm={
        username: ctx.request.body.username,
        password: ctx.request.body.password,
        auth_token:true
      }
    function getcookie(data, js_code) {
        // console.log(data)
        return new Promise((resolve, reject) => {
        request.post(
            {
                headers: {
                    'User-Agent': 'Koala Admin'
                },
            url: "http://192.168.10.50:80/auth/login",
            json: true,
            form: data
            },
            (error, response, body) => {
                
            if (!error && response.statusCode == 200) {
                if (body.errcode) {
                    return reject(body.errmsg)
                }
                console.log(response.body)
                resolve(response.body.data.auth_token);
            } else {
                reject(error);
            }
            }
        );
        });
    }
    let cookie=await getcookie(loginForm)
    // console.log(cookie)
    // let value=cookie[0].split(";")[0].split("=")[1]
    // let option={
    //     domain: 'localhost',  // 写cookie所在的域名
    //     path: '/',       // 写cookie所在的路径
    //     maxAge: 10 * 60 * 1000, // cookie有效时长
    //     expires: new Date(cookie[0].split(";")[1].split("=")[1]),  // cookie失效时间
    //     httpOnly: true,  // 是否只用于http请求中获取
    //     overwrite: false  // 是否允许重写
    //   }
    //   console.log(value,option)
    // ctx.cookies.set("sessio","value",option)
    let payload={time:new Date().getTime(),timeout:1000*60*60}
    let token = jwt.sign(payload, secret);
    ctx.body = { statusCode: 200, message: '获取统计数据成功',Authorization:cookie,toke:token};
    // console.log(ctx)
}