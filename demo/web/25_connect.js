 const connect = require('connect');
 //  connect : 本身是一个函数. 返回一个中间件的控制器.
 let app = connect();
 // 注册中国件
 app.use(function (req, res, next) {
     console.log('1');
     next();
 });

 app.use(function (req, res, next) {
     console.log('2');
     next();
 });

 app.use((req, res) => {
     res.write('sss'); // write 的第一个参数 必须是字符串
     console.log(3);
     res.end();
 });

 app.listen(58899, () => {
    console.log("http;//127.0.0.1:58899");
 });


