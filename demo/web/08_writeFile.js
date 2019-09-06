const fs = require('fs');
const path = require('path');

let aFilePath = path.join(__dirname, 'a.txt');

//  这是异步写入到文件中一个字符串
// 只有在异步,在干完事儿之后,才会执行回调函数
fs.writeFile(aFilePath,'你好 , 这里是北京昌平区!!', function (err) {
    if (err) {
        console.log(err)
        return;
    }
    console.log('正常写入!');
});


// 这个是同步的  同步的要快一点!

// 异步的属于线程池的另外一个线程.需要先申请下来然后再执行,要慢一点~  所以同步的先执行你好2 , 异步的后执行, 会把之前写的覆盖掉!

// 当然我们可以追加的方式去写入,后面会提到!
fs.writeFileSync(aFilePath, ' 你好2', {
    flag:'a' // a  就代表append, 默认flag是给它替换掉的,就是2+ ,就是可以可读可写的
});