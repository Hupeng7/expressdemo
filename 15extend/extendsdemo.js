
//1. 原型链继承
function Parent() {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child() { }

Child.prototype = new Parent();

var child1 = new Child();
console.log(child1.getName()); //kevin

//问题：
//1. 引用类型的属性被所有实例共享
function Parent1_1() {
    this.names = ['kevin', 'daisy'];
}

function Child1_1() { }

Child1_1.prototype = new Parent1_1();

var child1_11 = new Child1_1();
child1_11.names.push('yayu');

console.log(child1_11.names); // ['kevin','daisy','yayu']

var child1_12 = new Child1_1();
console.log(child1_12.names); // ["kevin","daisy","dayu"]

//2. 借用构造函数（经典继承）
function Parent2() {
    this.names = ['kevin', 'daisy'];
}

function Child2() {
    Parent2.call(this);
}

var child2_1 = new Child2();

child2_1.names.push('yayu');

console.log(child2_1.names); //["kevin","daisy","yayu"]

var child2_2 = new Child2();

console.log(child2_2.names); //["kevin","daisy"]
/**
 * 优点：
1.避免了引用类型的属性被所有实例共享
2.可以在 Child 中向 Parent 传参
举个例子：
 */

/**
 * 缺点：
方法都在构造函数中定义，每次创建实例都会创建一遍方法。
 */
function Parent2_1() {
    this.name = name;
}

function Child2_1(name) {
    Parent2_1.call(this, name);
}

var child2_11 = new Child2_1('kevin');

console.log(child2_11.name); // kevin

var child2_12 = new Child2_2('daisy');

console.log(child2_12.name);

//3. 组合继承
/**
 * 原型链继承和经典继承双剑合璧。
 * 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
 */

function Parent3(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent3.prototype.getName = function () {
    console.log(this.name);
}

function Child3(name, age) {
    Parent3.call(this, name);
    this.age = age;
}

Child3.prototype = new Parent3();
Child3.prototype.constructor = Child3;

var child3 = new Child3('kevin', '18');

child.colors.push('black');
console.log(child3.name); //kevin
console.log(child3.age); // 18
console.log(child3.colors); //["red","blue","green","black"]

var child3_2 = new Child3('daisy', '20');
console.log(child3_2.name); // daisy
console.log(child3_2.age);
console.log(child3_2.colors); //["red","blue","green"]

//4. 原型式继承
function createObj(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}
/**
 * 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
缺点：
包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
 */
/**
 * 注意：修改person1.name的值，person2.name的值并未发生改变，并不是因为person1和person2有独立的 name 值，
 * 而是因为person1.name = 'person1'，给person1添加了 name 值，并非修改了原型上的 name 值。
 */
var person4 = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person4_1 = createObj(person4);
var person4_2 = createObj(person4);

person4_1.name = 'person4_1';
console.log(person4_2.name); // kevin

person4_2.friends.push('taylor');
console.log(person4_2.friends); //["daisy","kelly","taylor"]

//5. 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
function createObj5(obj) {
    var clone = Object.create(obj);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}

//6. 寄生组合式继承
function Parent6(name) {
    this.name = name;
    thi.colors = ['red', 'blue', 'green'];
}

Parent6.prototype.getName = function () {
    console.log(this.name);
}

function Child6(name, age) {
    Parent6.call(this, name);
    this.age = age;
}

Child6.prototype = new Parent6();
var child6_1 = new Child6('kevin', '18');
console.log(child6_1);

// 组合继承最大的缺点是会调用两次父构造函数
//一次是设置子类型实例的原型的时候
//Child6.prototype = new Parent6();
// 一次是创建子类型实例的时候
//var child6_1 = new Child6('kevin','18');

/**
 * 在这里，我们又会调用了一次 Parent 构造函数。
所以，在这个例子中，如果我们打印 child1 对象，我们会发现 Child.prototype
 和 child1 都有一个属性为colors，属性值为['red', 'blue', 'green']。
那么我们该如何精益求精，避免这一次重复调用呢？
如果我们不使用 Child.prototype = new Parent() ，而是间接的让 Child.prototype 
访问到 Parent.prototype 呢？
看看如何实现：
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

console.log(child1);
 */
// 最后封装一下这个继承方法
function object(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = protected;
}
//当我们使用的时候：
prototype(Child, Parent);