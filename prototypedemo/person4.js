function Person() { }

var person = new Person();
console.log(person.__proto__ === Person.prototype);

Person.prototype.name = 'Kevin';
person.name = 'Daisy';
console.log(person.name);

delete person.name;
console.log(person.name);