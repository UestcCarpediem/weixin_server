var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://115.231.255.86:5000"'
  // API_ROOT: '"https://bkdemo.juheworld.cn"'
})
