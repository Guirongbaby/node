// 引入path模块
const path = require("path");
// const:声明变量,变量的值不能改变.
// 第一种情况: 简单类型 : string number boolean
const t = 123; // t 永远只能是124 ,不能改变值

// 第二种情况:  复杂类型: 通过const 定义的复杂类型,地址的引用不能改,引用的地址值 是不能改的, 但引用指向的堆(内存空间)是可以随便改的

strPath1 ="d:\\MyCode/C-Code/node/demo/web/index.html"
// var strPath2 = ""
console.log(path.basename(strPath1));
// console.log(path.basename(strPath2));

console.log(path.basename(strPath1,".html"));
console.log(path.delimiter);
console.log(path.posix.delimiter);
console.log(path.win32.delimiter);

console.log(path.dirname(strPath1));
console.log(path.dirname(__filename));  //==> (__filename);
//path模块获取路径中的文件名
// 语法：path.basename(path[, ext])

// 参数：

// path <string> 完整文件名路径
// ext <string> 可选的文件扩展名
// 返回: <string> 文件名