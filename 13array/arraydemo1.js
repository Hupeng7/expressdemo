/**
 * 类数组对象
 *  所谓的类数组对象
 *  拥有一个length 属性和若干索引属性的对象
 */

var array = ['name', 'age', 'sex'];

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}

//为什么叫类数组对象
// 读写
console.log(array[0]); // name
console.log(arrayLike[0]);

array[0] = 'new name';
arrayLike[0] = 'new name';

//长度
console.log(array.length); // 3
console.log(arrayLike.length); // 3

//遍历
for (var i = 0, len = array.length; i < len; i++) {
    //todu
}

for (var i = 0, len = arrayLike.length; i < len; i++) {
    //todu
}

/**
 * 是不是很像？
那类数组对象可以使用数组的方法吗？比如：
arrayLike.push('4');
然而上述代码会报错: arrayLike.push is not a function
所以终归还是类数组呐……
 */

/**
 * 调用数组方法
如果类数组就是任性的想用数组的方法怎么办呢？
既然无法直接调用，我们可以用 Function.call 间接调用：
 */
var arrayLike1 = { 0: 'name', 1: 'age', 2: 'sex', length: 3 }

Array.prototype.join.call(arrayLike1, '&'); // name&age&sex

Array.prototype.slice.call(arrayLike1, 0); //["name","age","sex"]
//slice 可以做到类数组转数组

Array.prototype.map.call(arrayLike1, function (item) {
    return item.toUpperCase();
}); //["NAME","AGE","SEX"]

/**
 * 类数组转数组
在上面的例子中已经提到了一种类数组转数组的方法，再补充三个：
 */

var arrayLike2 = { 0: 'name', 1: 'age', 2: 'sex', length: 3 };

//1.slice 
Array.prototype.slice.call(arrayLike2); //["name","age","sex"]

//2.splice
Array.prototype.splice.call(arrayLike2, 0); //["name","age","sex"]

//3.ES6 Array.from
var es6arr = Array.from(arrayLike1); //["name","age","sex"]
console.log('es6arr to array is :', es6arr);
//4. apply
Array.prototype.concat.apply([], arrayLike2);

/**
 * Arguments 对象
 * 接下来重点讲讲 Arguments 对象。
Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。
在函数体中，arguments 指代该函数的 Arguments 对象。
 */

function foo3(name, age, sex) {
    console.log(arguments);
}
foo3('name', 'age', 'sex');

//length属性
/**
 * Arguments 对象的length属性 表示实参的长度
 */
console.log('length 属性');
function foo4(b, c, d) {
    console.log("实参的长度为:" + arguments.length);
}

console.log("形参的长度为:" + foo4.length);
foo4(1);

// callee属性
/**
 * Arguments 对象callee属性 通过它可以调用函数自身
 */
console.log('callee 属性');
var data = [];

for (var i = 0; i < 3; i++) {
    (data[i] = function () {
        console.log(arguments.callee.i);
    }).i = i;
}

data[0]();
data[1]();
data[2]();