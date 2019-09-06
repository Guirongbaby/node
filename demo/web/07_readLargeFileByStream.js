const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'a.mp4');
//第一步: 创建一个可读取的流.  --让可读流去创建我们的文件
let stream = fs.createReadStream(fileName, {
    // flags:'r', // 设置文件只读模式
    encoding: 'utf8' // 设置读取文件的内容的编码
});

// 当流的管道建立后, 并打开的时候,触发open事件
stream.on('open',function (fd) { // 参数fd 是文件句柄? 在windows当中,句柄是windows 操作系统的概念,也是编程的概念.操作系统会对所有的资源或者文件 会进行一个编号,编号就是一个句柄--也就是一长串的数字,唯一标志它在操作系统对应的资源.
    console.log('管道建立, 并打开:fd:', fd);
});
let i = 0;


// 当数据流过来,直接触发data事件.
stream.on('data', function (trunk) { // 读取的 数据都会放到trunk 里面来,
    console.log('编号%d', i, trunk); //  编号%d 代表数字
    i++;
});


// 当读取完数据之后
stream.on('end', function () {
    console.log('end 代表数据读取完毕!');
});