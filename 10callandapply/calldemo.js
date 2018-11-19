/**
 * 一句话介绍 call：
call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

注意两点：
call 改变了 this 的指向，指向到 foo
bar 函数执行了
 */

var foo = {
    value: 1
}
function bar() {
    console.log(this.value);
}

bar.call(foo); //1

//模拟实现第一步
var foo2 = {
    value2: 1,
    bar2: function () {
        console.log(this.value2);
    }
};
foo2.bar2(); //1

//模拟实现第二步
var foo3 = {
    value3: 1
};

function bar3(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value3);
}

bar3.call(foo3, 'kevin', 18);

//模拟实现第三步
//1 this 参数可以传null 当为null的时候 视为指向window
var value4 = 1;

function bar4() {
    console.log(this.value4);
}
bar4.call(null); //1

//
Function.prototype.callNew = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args + ')');
    delete context.fn
    return result;
}

var valueNew = 2;
var objNew = {
    valueNew: 1
}

function barNew(name, age) {
    console.log(this.valueNew);
    return {
        value: this.valueNew,
        name: name,
        age: age
    }
}

bar.callNew(null); //2

console.log(barNew.callNew(objNew, 'kevin111', 188));