//原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它
var obj = new Object();

obj.name = 'Kevin';

console.log(obj.name);  //Kevin

/**Object.prototype 的原型呢
 * null
 * null 表示“没有对象”，即该处不应该有值。
 */
console.log(Object.prototype.__proto__ === null); //true


