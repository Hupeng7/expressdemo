function Person() { }

var person = new Person();

//__proto__
// 这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型
console.log(person.__proto__ === Person.prototype);  // true

//constructor
console.log(Person === Person.prototype.constructor); //true