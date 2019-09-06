

// ES3~ES5 继承: 通过原型进行继承
// ES3时定义类型:
function Human(name, age) { // 定义一个human类型
    this.name = name; // 控制创建类型的属性
    this.age = age;
}
Human.prototype.show = function () { // 定义原型上的方法
    console.log(this.name, this.age);
}

var h = new Human('Guirong', '19'); // 创建Human类型的对象实例
h.show();




// ES6中怎么定义类型和继承的方式
// ES6 中定义类型和构造函数    类名要符合标识符规范.
class Student { // 关键字class  定义了Student类型
    constructor(name, age) { // 定义构造函数  如果构造函数未定义, 那么会自动添加一个默认空的构造函数.
        // construtor() {}
        this.name = name; // 给实例添加属性
        this.age = age;  // 也是通过我们的this 来控制我们的实例 的一个变量
    }

    // 在类的定义的方法都是在原型上定义的 , 不可遍历.
    showStu() {
        console.log(this.age, this.name);
    }
    get Name() {
        return this.name;
    }
    set Name(val) {
        this.name = val || '空';
    }
}

// 创建一个类型的实例.  通过class 定义的类型. 必须通过new来构造实例!!!
let s = new Student('aicoder.com', '20');
s.showStu(); 
s.Name = '你好啊! ';
s.showStu();

s.Name = null;
s.showStu();
 
