/*
 * @Description: 
 * @Author: zhongshuai
 * @Date: 2019-05-27 22:12:14
 * @LastEditors: zhongshuai
 * @LastEditTime: 2019-05-27 22:48:06
 */
//express_demo.js 文件
// 
var express = require('express');
var http = require('http'); 

var app = express();
app.use(express.static('./public'))

const httpServer = http.createServer(app);
httpServer.listen(9900, '0.0.0.0', () => {
  console.log('success');
});