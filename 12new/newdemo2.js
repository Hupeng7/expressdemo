//返回值效果实现
//接下来再看一种情况 加入构造函数有返回值

function Otaku(name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

var person = new Otaku('Kevin', '18');

console.log(person.name);
console.log(person.habit);
console.log(person.strength); // undefined
console.log(person.age); //undefined

/**
 * 在这个例子中，构造函数返回了一个对象，在实例 person 中只能访问返回的对象中的属性。
而且还要注意一点，在这里我们是返回了一个对象，假如我们只是返回一个基本类型的值呢？
再举个例子：
 */

function Otaku2(name, age) {
    this.strength = 60;
    this.age = age

    return 'handsome boy';
}

var person2 = new Otaku2('Kevin', '18');

console.log(person2.name); //undefined
console.log(person2.habit); //undefined
console.log(person2.strength); //60
console.log(person2.age); //18

/**
 * 结果完全颠倒过来，这次尽管有返回值，但是相当于没有返回值进行处理。
所以我们还需要判断返回的值是不是一个对象，如果是一个对象，
我们就返回这个对象，如果没有，我们该返回什么就返回什么。
 */

function objectFactory() {
    var obj = new Object();

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

}