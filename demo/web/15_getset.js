function Stu(name) {  // 定义一个类型Student
    this._name = name; // 下划线_name代表我们 的私有变量,只有内部访问!
    // 其实外部也可以访问到,这样写更好的告诉我们的使用者和开发人员,这是我的背部变量,不要去用!
}

Stu.prototype = {
    constuctor: Stu,
    // 这是一个属性
    get Name() {
        return this._name;  // 当实例读取属性 的时候,
    },  // 前面有一个json对象~
    set Name(val) {  // name 可以当做属性存在
        if (val) {
            this._name = val;
        }
    }
};

var s = new Stu('你好老马,aicoder.com');
console.log(s.Name);
// s._name
// s._name = 'sss';
// s.Name = 90; //×

s.Name = 'sss'; // √
console.log(s.Name);
// get set  属性的新功能
s.Name = "";
console.log(s.Name);