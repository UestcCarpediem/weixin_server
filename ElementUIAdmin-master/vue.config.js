module.exports = {
  baseUrl: './',
  lintOnSave: false,
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://192.168.10.50:80',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/main_api':{
        target: 'http://uestcydri.com:5001',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/main_api': ''
        }
      }
    }
  },
}
