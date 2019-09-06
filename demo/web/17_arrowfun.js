let add = function add(a, b) {
    return a + b;
}

console.log(add(4, 5));
// 上面是之前的写法


let addArrowFun = (a, b) => a + b;
console.log(addArrowFun(5, 6));

var arr = [1, 9, 3, 4, 7, 6];
// arr.sort(function (a,b) {
//     return a - b;
// });
 // 13~15  === 17~18
arr.sort((a, b) => a - b);
console.log(arr); // 注意这个打印在箭头函数写法里面 , 要放在你排序之后打印,否则就是原数组的排序

var t = () => {  // 箭头函数没有参数就用()
    console.log(this);  // this 就是指 定义箭头函数作用域里面的this
}

//  箭头函数注意事项 看  02 箭头函数~~~~~