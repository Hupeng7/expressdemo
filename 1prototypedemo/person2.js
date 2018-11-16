function Person() {
}
// 虽然写在注释里，但是你要注意：
//prototype 是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();

// Kevin
console.log(person1.name);
// Kevin
console.log(person2.name);