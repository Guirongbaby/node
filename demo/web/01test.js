// console.log("Hi, node js ,my first demo!");
// var a = 9;
// console.log( ++a);

// console.log('23455');
// serInterval(function() {
//     console.log(new Date());
// },100);

var count = 5;
console.log('count:%d', count);

console.log('count:', count);

console.log('count:', count, '-222', '999');



// 1 打印日志 console.log([data][, ...args])
// 打印到输出控制台, 并带上换行符,可以传入 多个参数 ,第一个 参数作为主要信息(字符串类型)其他参数作为代替值.
// var count = 5;console.log('count:',count);打印:count:5 到 stdout
// console.log('count:',count,'-222','-999'); 打印: count:5-222-999 log 方法可以把多个参数连接一块输出.

// 2 打印错误信息和警告信息
// 语法:console.error([data][,...args])
// error 方法的使用同log方法, 此方法打印错误信息, log 方法打印普通信息

// 3 打印对象结构
// 语法: console.dir(obj[, options])

/*参数说明: 第一个参数是objct 对象,就是要打印属性的对象
第二个参数是options是设置打印的配置项
showHidden 如果为true,则该对象中的不可枚举属性和symbol属性也会显示.默认为false
depth- 告诉util.inspect()函数当格式化对象时要递归多少次. 这对于检查较大的复杂对象很有用,默认为2.设为null可无限递归
colors- 如果为true,则输出会带有ANSI 颜色代码.默认为false.颜色是可定制的. 详见定制util.inspect()颜色.inspect

dir方法非常有用,在可以辅助我们调试时查看对象内 的属性和继承关系,也是一个非常好的学习js 的手段.inspect

4 时间计时 
同浏览器一致,也封装了计时的两个方法: console.log(label) 和 console.time(label);
time 方法启动一个定时器,用以计算一个操作的持续时间.定时器由一个 唯一的label标识.当调用consol.timeEnd()时.可以使用相同的label来停止定时器,,并以毫秒为单位将持续时间输出到 stdout. 定时器持续时间精确到亚毫秒*/
console.time('lb1');
for (let i = 0;i < 100;i++) {}
console.timeEnd('lb1');
// 打印lb1: 23.43ms

// 定时器
// node 提供了 全局的3个设置定时器方法 和      对应3个取消定时器的方法
// setImmediate(callback[,...args])         clearImmediate(immediate)
// setInterval(callback,delay[,...args])    clearInterval(tiemOut)
// setTimeout(callback,delay[,...args])    clearTimeout(timeout)



// 参数说明;
// callback<function> 当定时器到点时要调用的函数
// delay <number>调用 callback之前 要等待的毫秒数
// ...args<any> 当调用callback 时 要传入的可选参数
// callback 可能不会精确地 在delay 毫秒数调用.Node.js 不能保证回调被触发的确切时间, 也不能保证它们 的顺序.回调会在尽可能接近所指定的时间上调用
// 注意: 当delay大于,2147483547 或小于1时,delay会被设为1



//  目前流行的几个模块化标准:
//  CommonJs模块化的标准就是
//  AMD
//  CMD
//  ES6 未来的趋势是ES6 的标准方案会逐渐统一.但是AMD CMD标准跟CommonJs 的标准相差不大,
//  requirejs 入门 :
//  requirejs 的使用;
//  1-- requirejs下载
//  2--把requirejs 直接引入到html
//  <script scr="js/require.js" ></script>
//  3--设置当前页面的js入口文件
//  <script scr="js/require.js" data-main="js/main"></script>
//  data-main 属性的作用是: 指定网页程序的主模块, 是当前整个网页的入口代码
 