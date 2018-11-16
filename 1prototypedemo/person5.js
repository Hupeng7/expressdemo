function Person() { }

//实例与原型
Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name); // Daisy

delete person.name;
console.log(person.name);  //Kevins