/**
 * new
一句话介绍 new:
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
 */

// Otaku 御宅族  宅 
function Otaku(name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

//
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = new Otaku('Kevin', '18');

console.log(person.name);
console.log(person.habit);
console.log(person.strength);

person.sayYourName();

/**
 * 从这个例子中，我们可以看到，实例 person 可以：
访问到 Otaku 构造函数里的属性
访问到 Otaku.prototype 中的属性
接下来，我们可以尝试着模拟一下了。
因为 new 是关键字，所以无法像 bind 函数一样直接覆盖，
所以我们写一个函数，命名为 objectFactory，来模拟 new 的效果
 */
// function Otaku1(){
//     //todu
// }
// //使用new
// var person = new Otaku();
// //使用objectFactory
// var person = objextFactory(Otaku,...);