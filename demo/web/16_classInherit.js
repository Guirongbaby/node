class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log("name:%s, age:%s",this.name, this.age);
    }
}  //上述是普普通通的es6的继承!

class Student extends Human { // 子类继承父类 直接用extend方法就可以
    constructor(name,age,classNum) {
        // 子类对象的构建需要通过父类执行构造函数的构建过程
        super(name,age); // super代表,调用父类的构造函数
        // 子类自己设置自己的属性
        this.classNum = classNum;
    }

    stuShow() {
        console.log('name:%s, age:%d, classNum:%s', this.name,this.age,this.classNum);
    }
}
let s = new Student('guirong', 18, 'aicoder.com 一期');
s.stuShow();
s.show(); // 这是父类的方法1