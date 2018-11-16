function foo(){
    console.log(this);
}

foo();  // MemberExpression is foo

function foo(){
    return function(){
        console.log(this);
    }
}

foo();

var foo = {
    bar: function(){
        return this;
    }
}

foo.bar(); //

