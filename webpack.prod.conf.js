// const merge = require('webpack-merge')
// const baseWebpackConfig = require('./webpack.config.js')
//
// const ImageminPlugin = require("imagemin-webpack");
// const imageminGifsicle = require("imagemin-gifsicle");
// const imageminJpegtran = require("imagemin-jpegtran");
// const imageminOptipng = require("imagemin-optipng");
// const imageminSvgo = require("imagemin-svgo");
//
// const buildWebpackConfig = merge(baseWebpackConfig, {
//     plugins: [
//         new ImageminPlugin({
//             bail: false,
//             cache: true,
//             imageminOptions: {
//                 plugins: [
//                     imageminGifsicle({
//                         interlaced: true
//                     }),
//                     imageminJpegtran({
//                         progressive: true
//                     }),
//                     imageminOptipng({
//                         optimizationLevel: 5
//                     }),
//                     imageminSvgo({
//                         removeViewBox: true
//                     })
//                 ]
//             }
//         })
//     ]
// });
//
// module.exports = new Promise((resolve, reject) => {
//     resolve(buildWebpackConfig)
// })