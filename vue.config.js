const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: { //配置
    index: { //主页入口
      entry: 'examples/main.js', //入口文件
      template: 'public/index.html', //模板1
      filename: 'index.html' // 文件名
    }
  },
})