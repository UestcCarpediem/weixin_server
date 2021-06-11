const mongoose = require('mongoose')
const AccList = mongoose.model("AccList");

module.exports = async (ctx, next) => {  
    let checked = ctx.request.body.checked  
    let pageNum=ctx.request.body.pageNum-1
    let aggregate = null
        aggregate = AccList.find(
            {   
                    'checked':checked,
                
            }, 
           
        ).sort({"createAt":-1}).skip(pageNum*20).limit(20);
        
        // aggregate = aggregate.group({
        //     '_id': '$checked', 
        //     "content": { 
        //         $push: { 
        //             _id: "$_id",
        //             recordDay: "$recordDay", 
        //             photoUrl: "$photoUrl" , 
        //             city: '$city',
        //             province: '$province',
        //             country: '$country',
        //             IDcard: '$IDcard',
        //             time: '$time',
        //             reason: '$reason',
        //             checked: '$checked',
        //         }
        //     }
        // }).sort({'_id': -1})

        let data = await aggregate.exec()

        ctx.body = { statusCode: 200, message: '获取预约记录成功', data: data};
    
}
