/**
 * @name: app.js
 * @author: LeeYShunnn
 * @date: 2020/4/8 23:20
 * @description：主文件入口
 */
//引入express
const express = require('express');
//创建express实例
const app = express();
//格式化post请求参数
app.use(express.urlencoded({extends:true}));
app.use(express.json());
app.use()
//启动服务
app.listen(9001,() => {
    console.log('9001服务已启动...');
});