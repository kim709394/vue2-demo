const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,  //开发服务器端口号
    proxy: {
      '/wellheadunique': {
        target: 'http://localhost:8113',    //配置后端接口地址
        changeOrigin: true
      }
    }
  }
})
