
/**
 * 
 * $ node test1.js 
 * var 与 let 的不同
3
3
3


0
1
2
 */
var data = [];
var data1 = [];

for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    };
}

data[0]();
data[1]();
data[2]();

for (let j = 0; j < 3; j++) {
    data1[j] = function () {
        console.log(j);
    };
}

data1[0]();
data1[1]();
data1[2]();