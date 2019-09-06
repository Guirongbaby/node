const fs = require('fs');

// 启动监听文件夹
let watcher = fs.watch(__dirname);  //当这个改变的时候,执行下面的..

// 监听改变的事件
watcher.on('change', function (eventType, fileName) {
    console.log('change: ', eventType, fileName)
});

// 关闭监听
setTimeout(function () {
    // 实际: 关闭监听
    watcher.close();
}, 10000);