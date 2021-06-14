const Router = require('koa-router')
const addRecordController = require('../controllers/addRecord.js')
const getRecordListController = require('../controllers/getRecordList.js')
const getRecordCountController = require('../controllers/getRecordCount.js')
const deleteRecordController = require('../controllers/deleteRecord.js')
const getRecordDetailsController = require('../controllers/getRecordDetails.js')
const getRecordReviewedController = require("../Controllers/getRecordReviewed.js")
const changeReviewStatusController = require("../controllers/changeReviewStatus.js")
const uploadImageController = require("../controllers/uploadImage.js")
const updateUserDetails = require("../controllers/updateUserDetails.js")
const getUserDetails = require("../controllers/getUserDetails.js")
const authLogin = require("../controllers/authLogin.js")

let router = new Router()
// 添加预约记录
router.post('/addRecord', addRecordController)

// 获取预约记录
router.post('/getRecordList', getRecordListController)


// 删除一条预约记录
router.post('/deleteRecord', deleteRecordController)

// 查询预约详情
router.post('/getRecordDetails', getRecordDetailsController)

router.post('/uploadImage',uploadImageController)

//后台代理登录
router.post('/auth/login',authLogin)


// 获取审核预约列表
router.post('/getRecordReviewed', getRecordReviewedController)

// 修改审核状态
router.post('/changeReviewStatus', changeReviewStatusController)

// 获取预约统计总数
router.post('/getRecordCount', getRecordCountController)


// 上传用户详情
router.post('/updateUserDetails', updateUserDetails)

// 上传用户详情
router.post('/getUserDetails', getUserDetails)

module.exports = router