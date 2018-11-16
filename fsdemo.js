'use strict';
var fs = require('fs');

/**
 * fs 操作文件
 * 异步 readFile
 * 同步 readFileSync
 */
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
        console.log(err.message);
        console.log(err.code);
        console.log(err.name);
        console.log(err.path);
    } else {
        console.log(data);
    }
});


try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}

/**
 * fs 写文件
 */
var dataWrite = 'Hello,Node.js';
fs.writeFile('output.txt', dataWrite, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('all under control');
    }
});

/**
 * 获取文件信息
 */
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件
        console.log('isFile: ' + stat.isFile());
        // 是否是目录
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小
            console.log('size: ' + stat.size);
            // 创建时间 Date对象
            console.log('birth time: ' + stat.birthtime);
            // 修改时间 Date对象
            console.log('modified time: ' + stat.mtime);

        }
    }
})