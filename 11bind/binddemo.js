/**
 * bind
一句话介绍 bind:
bind() 方法会创建一个新函数。当这个新函数被调用时，
bind() 的第一个参数将作为它运行时的 this，
之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
由此我们可以首先得出 bind 函数的两个特点：
1.返回一个函数
2.可以传入参数
 */

// 返回函数的模拟实现
console.log('返回函数的模拟实现');
var foo = {
    value: 1
}

function bar() {
    console.log(this.value);
}

//返回了一个函数
var bindFoo = bar.bind(foo);

bindFoo(); //1

//传参的模拟实现
/**
 * 函数需要传 name 和 age 两个参数，竟然还可以在 bind 的时候，
 * 只传一个 name，在执行返回的函数的时候，再传另一个参数 age!
 */
console.log('传参的模拟实现');
var foo1 = {
    value1: 1
}

function bar1(name, age) {
    console.log(this.value1);
    console.log(name);
    console.log(age);
}

var bindFoo1 = bar1.bind(foo1, 'daisy');

bindFoo1('18');

//构造函数效果的模拟实现
/**
 * 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。
 * 提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。
 * 
也就是说当 bind 返回的函数作为构造函数的时候，
bind 时指定的 this 值会失效，但传入的参数依然生效。
 */

/**
 * 注意：尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，
 * 说明绑定的 this 失效了，如果大家了解 new 的模拟实现，
 * 就会知道这个时候的 this 已经指向了 obj
 */
console.log('构造函数效果的模拟实现');
var value2 = 2;

var foo2 = {
    value2: 1
}

function bar2(name, age) {
    this.habit = 'shopping';
    console.log(this.value2);
    console.log(name);
    console.log(age);
}

bar2.prototype.friend = 'kevin';

var bindFoo2 = bar2.bind(foo2, 'daisy');

var obj = new bindFoo2('18');

console.log(obj.habit);
console.log(obj.friend);
