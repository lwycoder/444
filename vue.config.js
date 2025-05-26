/* eslint-env node */
module.exports = {
  devServer: {
    proxy: 'http://localhost:8081' // 前端开发时代理到后端端口，避免跨域
  }
};