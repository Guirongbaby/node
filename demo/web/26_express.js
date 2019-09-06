// 1. 安装 express
// npm i -P express

// 2. 引入 express 模块

const express = require('express');
//  用法?
// 第一种是: express 完全兼容connect用法(也就是完全可以当coonect一样来用)
// 创建一个app 对象
let app = express(); // express 也是函数,和connect一样use
// 直接注册一个应用
app.use(function (req, res, next) { //req, res, next
    console.log(1);
    next();
});
app.use(function (req, res, next) { //req, res, next
    console.log(2);
    next();
});
app.use(function (req, res) { //req, res, next
    console.log(3);
    res.write('234');
    res.end();
});

app.listen(59977);
//    总结: 我们可以从中明白,数据的运输 响应
