// 1. 用new，对象构造函数
// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         console.log('Hello ' + this.name);
//     }
// }

// 使用关键字new，返回对象
// var tom = new Student('Tom');
// console.log('tom.constructor', tom.constructor);
// console.log('Student.prototype.constructor',Student.prototype.constructor);

// 2. 了解指向，构造函数与上面相同
// function Student(name) {
//         this.name = name;
//     }

// Student.prototype.hello = function () {
//     console.log('Hello ' + this.name);
// }

// var tom = new Student('Tom');
// var sia = new Student('Sia');
// sia.hello();
// tom.hello();

// 3. 专有的构造函数，更灵活
function Student(props) {
        this.name = props.name || 'someone';
        this.grade = props.grade || 1;
}

Student.prototype.hello = function () {
    console.log('Hello ' + this.name);
}

function createStudent(props) {
    return new Student(props || {});
}

var tom = createStudent({
    name : 'Tom'
});
tom.hello();