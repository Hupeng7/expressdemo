

//1. 工厂模式
// 缺点: 对象无法识别  因为所有的实例都指向一个原型
function createPerson(name) {
    var obj = new Object();
    obj.name = name;
    obj.getName = function () {
        console.log(this.name);
    };
    return obj;
}
var person1 = createPerson('Kevin');
person1.getName();


//2. 构造函数模式
// 优点: 实例可以识别为一个特定的类型
// 缺点： 每次创建实例时 每个方法都要被创建一次
function Person(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    };
}
var person2 = new Person('kevin')
person2.getName();


//2.1 构造函数模式优化
//优点：解决了每个方法都要被重新创建的问题
//缺点：这叫啥封装……
function Person2(name) {
    this.name = name;
    this.getName = getName;
}

function getName() {
    console.log(this.name);
}

var person3 = new Person2('kevin');
person3.getName();



// 3. 原型模式
// 优点：方法不会重新创建
// 缺点：1. 所有的属性和方法都共享 2. 不能初始化参数
function Person3(name) {
}

Person3.prototype.name = 'kevin';
Person3.prototype.getName = function () {
    console.log(this.name);
};

var person33 = new Person3();
person33.getName();

//3.1 原型模式优化
// 优点：封装性好了一点
// 缺点：重写了原型，丢失了constructor属性
console.log('3.1 原型模式优化');
function Person3_1(name) {
}

Person3_1.prototype = {
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};
var person3_1 = new Person3_1();
person3_1.getName();

//3.2 原型模式优化
//优点：实例可以通过constructor属性找到所属构造函数
//缺点：原型模式该有的缺点还是有 
console.log('3.2原型模式优化');
function Person3_2(name) { }

Person3_2.prototype = {
    constructor: Person3_2,
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};
var person3_2 = new Person3_2();
person3_2.getName();

//4. 组合模式
// 构造函数模式 与原型模式双剑合璧
// 优点：该共享的共享，该私有的私有，使用最广泛的方式
// 缺点：有的人就是希望全部都写在一起，即更好的封装性
console.log('4 组合模式');
function Person4(name) {
    this.name = name;
}

Person4.prototype = {
    constructor: Person4,
    getName: function () {
        console.log(this.name);
    }
};
var person4 = new Person4('kevin 4');
person4.getName();

//4.1 动态原型模式
//注意：使用动态原型模式时，不能用对象字面量重写原型
function Person4_1(name) {
    this.name = name;
    if (typeof this.getName != 'function') {
        Person4_1.prototype.getName = function () {
            console.log(this.name);
        }
    }
}
var person4_1 = new Person4_1();
person4_1.getName();

// 4.2
function Person4_2(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person4_2.prototype = {
            constructor: Person4_2,
            getName: function () {
                console.log(this.name);
            }
        }
    }
}

var person4_21 = new Person4_2('kevin');
var person4_22 = new Person4_2('daisy');

// 报错 并没有该方法
person4_21.getName();

// 注释掉上面的代码 这句是可以执行的
person4_22.getName();

//4.3 可行的
function Person4_3(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person4_3.prototype = {
            constructor: Person4_3,
            getName: function () {
                console.log(this.name);
            }
        }

        return new Person4_3(name);
    }
}

var person4_31 = new Person4_3('kevin');
var person4_32 = new Person4_3('daisy');

person4_31.getName(); // kevin
person4_32.getName();  // daisy

//5.1 寄生构造函数模式
function Person5(name) {
    var obj = new Object();
    obj.name = name;
    obj.getName = function () {
        console.log(this.name);
    };
    return obj;
}
var person5_1 = new Person5('kevin');
console.log(person5_1 instanceof Person5); //false
console.log(person5_1 instanceof Object); // true
/**
 * 寄生构造函数模式，我个人认为应该这样读：
寄生-构造函数-模式，也就是说寄生在构造函数的一种方法。
也就是说打着构造函数的幌子挂羊头卖狗肉，你看创建的实例使用 instanceof 都无法指向构造函数！
这样方法可以在特殊情况下使用。比如我们想创建一个具有额外方法的特殊数组，
但是又不想直接修改Array构造函数，我们可以这样写：
 */
function SpecialArray() {
    var values = new Array();

    for (var i = 0, len = arguments.length; i < len; i++) {
        values.push(arguments[i]);
    }

    values.toPipedString = function () {
        return this.join("|");
    }
    return values;
}

var colors = new SpecialArray('red', 'blue', 'green');
var colors2 = SpecialArray('red2', 'blue2', 'green2');

console.log(colors);
console.log(colors.toPipedString()); // red|blue|green

console.log(colors2);
console.log(colors2.toLocaleString()); //red2|blue2|green2
/**
 * 你会发现，其实所谓的寄生构造函数模式就是比工厂模式在创建对象的时候，多使用了一个new，
 * 实际上两者的结果是一样的。
但是作者可能是希望能像使用普通 Array 一样使用 SpecialArray，
虽然把 SpecialArray 当成函数也一样能用，但是这并不是作者的本意，也变得不优雅。
在可以使用其他模式的情况下，不要使用这种模式。
但是值得一提的是，上面例子中的循环：
for (var i = 0, len = arguments.length; i < len; i++) {
    values.push(arguments[i]);
}
可以替换成：
values.push.apply(values, arguments);
 */

//5.2 稳妥构造函数模式
/**
 * 所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。
与寄生构造函数模式有两点不同：
新创建的实例方法不引用 this
不使用 new 操作符调用构造函数
稳妥对象最适合在一些安全的环境中。
稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。
 */
function person5_2(name) {
    var obj = new Object();
    obj.sayName = function () {
        console.log(name);
    };
    return obj;
}

var person5_21 = person5_2('kevin');
person5_21.sayName(); // kevin
person5_21.name = "daisy";
person5_21.sayName(); // kevin
console.log(person5_21.name); //daisy

