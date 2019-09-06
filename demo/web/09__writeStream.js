 const fs = require('fs');
 const path = require('path');

// 要用可写流,往 a.txt文件中写入100个字符串
let aFileName = path.join(__dirname,'a.txt');
//  WriteStream的第一个参数传路径, 第二个参数传可写入的一个选项,这里我们让他追加--{flag: 'a'}, 这样就创建了一个可写流

let stream = fs.createWriteStream(aFileName, {
    flags: 'a'
});

// 可写流打开?
stream.on('open', function (fd) {
    console.log('可写流打开: ' ,fd);
});

stream.on('close', function() {
    console.log('可写流关闭!!')
});

// 怎么样去读出去呢?
// 可写流就是用write 方法,往ws.write去写出去,
// 如果调用end 方法 , 直接就结束掉了 ↓node
for (let i = 0; i < 100;i++) {  // 打印100个
    stream.write('aicoder.com  全栈学习你来吗? \r\n')
}
stream.end('结束写入!'); // end 方法的使用 ,结束写入!