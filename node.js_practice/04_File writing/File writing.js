/*
需求：
新建一个文件，座右铭.txt，写入内容，三人行必有我师焉
*/

//1.导入fs模块
const fs = require('fs');

//2.写入文件
fs.writeFile('Motto.txt', 'When there are walking together,I am sure to find teachers among them',err =>{
    //err 写入失败：错误对象 写入成功null
    if(err){
        console.log('Fail to write');
        return;
    };
    console.log('Right');
});