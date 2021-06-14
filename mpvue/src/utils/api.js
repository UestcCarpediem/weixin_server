import http from  './fly'

// export const getIndex = params => { return http.get('/index/', params)};

const api={
// 添加预约记录
addRecord : params => {return http.post('/accounting/addRecord', params)},

// 新增记账类别
getRecordList : params => { return http.post('/accounting/getRecordList', params)},


// 获取预约详情
getRecordDetails : params => { return http.post('/accounting/getRecordDetails', params)},

deleteRecord : params => { return http.post('/accounting/deleteRecord', params)},


getRecordCount : params => { return http.post('/accounting/getRecordCount', params)},


updateUserDetails : params => { return http.post('/accounting/updateUserDetails', params)},

getUserDetails : params => { return http.post('/accounting/getUserDetails', params)},}




//deleteAccounting
export default api