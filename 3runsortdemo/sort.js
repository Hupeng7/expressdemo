//
var foo = function () {
    console.log('foo1');
}

foo();

var foo = function () {
    console.log('foo2');
}

foo();

//例子2
function foo1() {
    console.log('foo3');
}

foo1();

function foo1() {
    console.log('foo4');
}

foo1();

/**
 * answer
 * $ node sort.js
foo1
foo2
foo4
foo4
 */

/**
 * 
 * 打印的结果却是两个 foo2。
刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。
但是本文真正想让大家思考的是：这个“一段一段”中的“段”究竟是怎么划分的呢？
到底JavaScript引擎遇到一段怎样的代码时才会做“准备工作”呢？
 * 可执行代码
这就要说到 JavaScript 的可执行代码(executable code)的类型有哪些了？
其实很简单，就三种，全局代码、函数代码、eval代码。
举个例子，当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，
让我们用个更专业一点的说法，就叫做"执行上下文(execution context)"。
 */