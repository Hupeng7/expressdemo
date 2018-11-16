// 作用域
console.log("作用域 1--->");
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        console.log(scope);
    }
    return f();
}
checkscope();

console.log("作用域 2--->");
function checkscope1() {
    var scope = "local scope";
    function f() {
        console.log(scope);
    }
    return f;
}
checkscope1()();

for (let i = 1; i < 10; i++) {
    console.log('随机数--->', Math.random());
}
