/**
 * 变量对象
变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。
因为不同执行上下文下的变量对象稍有不同，所以我们来聊聊全局上下文下的变量对象和函数上下文下的变量对象。
全局上下文
我们先了解一个概念，叫全局对象。在 W3School 中也有介绍：
全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，
可以访问所有其他所有预定义的对象、函数和属性。
在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。因为全局对象是作用域链的头，
这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。
例如，当JavaScript 代码引用 parseInt() 函数时，它引用的是全局对象的 parseInt 属性。
全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。
 */

//1.可以通过 this 引用，在客户端 JavaScript 中，全局对象就是 Window 对象。
console.log(this);

//2.全局对象是由 Object 构造函数实例化的一个对象。
console.log(this instanceof Object);

//3.预定义了一堆，嗯，一大堆函数和属性。
console.log(Math.random());
//console.log(this.Math.random());

//4.作为全局变量的宿主。
var a = 1;
console.log(this.a);

//5.客户端 JavaScript 中，全局对象有 window 属性指向自身。
var b = 1;
//console.log(window.b);

//this.window.b1 = 2;
//console.log(b1);