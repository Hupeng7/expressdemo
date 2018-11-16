/**
 * 作用域
作用域是指程序源代码中定义变量的区域。
作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用词法作用域(lexical scoping)，
也就是静态作用域。
 */

/**
 * example 1 
 * 强调 js 是静态作用域
 */
var value = 1;

function foo() {
    // var value = 3;
    console.log('静态作用域--->');
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

/**
 * example 2 
 * 强调js 是词法作用域 函数的作用域基于函数创建的位置
 * 本例调用f()函数   在checkscope()函数中 有定义的局部变量
 */
console.log("词法作用域 1--->");
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        console.log(scope);
    }
    return f();
}
checkscope();

console.log("词法作用域 2--->");
function checkscope1() {
    var scope = "local scope";
    function f() {
        console.log(scope);
    }
    return f;
}
checkscope1()();