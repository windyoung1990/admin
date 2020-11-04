const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: false,
    // publicPath: '/admin/',
    assetsDir: 'admin',
    chainWebpack: (config) => {
        config.resolve.alias = Object.assign(config.resolve.alias, {
            '@/src': resolve('src'),
            '@/config': resolve('config'),
            '@/assets': resolve('src/assets'),
            '@/components': resolve('src/components'),
            '@/common': resolve('src/common'),
            '@/libs': resolve('src/libs'),
            '@/pages': resolve('src/pages'),
            '@/utils': resolve('src/utils'),
            '@/api': resolve('src/api'),

        });
    },
    devServer: {
        port: 3000,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: "http://localhost:8001",
                changeOrigin: true,
                // pathRewrite: {'^/api' : ''}
            }
        }
      }
}