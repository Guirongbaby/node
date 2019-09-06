// console.log(module);
// console.log(__filename);
// console.log(__dirname);

// console.log(require); 帮我们引入文件
// 比如:  引入 02_math文件对应 的模块
let t = require('./02_math.js');

// 调用02_math模块的add方法
console.log(t.add(9, 10));