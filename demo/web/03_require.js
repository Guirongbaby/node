// 第一种: 引入内置模块
// 内置模块有哪些?  有: 

const path = require('path');
// const: 是定义一个常量,如果是简单类型 ,那么值不能修改.
// const 声明的是一个引用类型,那么这个变量指向的内存地址不变.

// join方法 可以帮我们把多个路径 连接在一块.
var t = path.join(__dirname, __filename);
console.log('ddfg',t);

// 第二种: 引入文件模块(相对路径和绝对路径都可以,现在这个是相对路径)
// 我们用的时候推荐使用这个方法
// 文件的后缀可以加, 也可以不加,但是推荐大家加上后缀.
// 如果文件不加后缀: 会自动帮我们添加这几种后缀: .js  .node  .json 

// const math = require('./02_math.js');
// console.log(math.add(9,9));
   

// 引入 绝对路径的形式
const math2 = require
('D:\MyCode\C-Code\node\demo\web\D:\MyCode\C-Code\node\demo\web\03-require.js')
console.log(math2.add(9,9));

// 第三种: 引入文件夹模块 : 尽量少用! 因为性能并不高
// 首先到根目录的package.json文件中去找main 的配置节点.
//  假如没有一个package.json 文件,到目录创建一个;
 const m = require('.');

 m.show();

 const n = require('../tm');
 n.myShow();

// 第四种: 自定义模块
const stringW = require('string-width'); // 第三方库
var num = stringW('我是桂荣');
console.log(num);
console.log(module.paths);
 
