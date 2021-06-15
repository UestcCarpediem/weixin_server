const path = require("path");
const fs = require("fs");
module.exports = async (ctx, next) => {
    const file = ctx.request.files.auth_pics;
    console.log(ctx.request.files.auth_pics.path)
    console.log(file);
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(
        __dirname,
        "/server/images/upload/" + `${file.name}`
    );
    const upStream = fs.createWriteStream(filePath);
    await reader.pipe(upStream);
    const basename=path.basename(file.path)
    ctx.body = { statusCode: 200, message: '上传成功', code: 1,data:{
        "url":`${ctx.origin}/upload/${basename}`
    }};
}
