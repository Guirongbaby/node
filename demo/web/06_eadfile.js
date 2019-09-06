const fs = require('fs');

// 读取当前文件的内容 设置了编码为:utf8
// 设置了编码的话,它这个方法返回的值就是字符串, 如果不设置,他返回的是8份数组,010101..
// readFileSync 是同步的方法?--也就是当node 执行到这一行代码的时候,它整个程序就会停下来,整个程序等待文件读取完毕后,再往下执行.

let fileContent = fs.readFileSync(__filename, {
    encoding: 'utf8'
}); 
console.log(fileContent);


// 异步读取文件的方法?
// 异步读取文件,主线程继续执行后续的代码,线程池的线程读取文件内容,
// 读取成功后,调用回调函数
// 仅用于读取小文件.
let indexJSFileName = path.join(__dirname, 'index.js');

fs.readFile(indexJSFileName, {
    encoding: 'utf8'
}, function (err, data) {
    if (err) {
        console.log('出现读取异常: ', err);
        return;
    }
    console.log(data);
});
console.log('主线程继续执行.....');
