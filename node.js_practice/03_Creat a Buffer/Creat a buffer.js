//1.alloc
let buf = Buffer.alloc(10);
console.log(buf);
//2.allocUnsafe
let buf_2 = Buffer.allocUnsafe(1000);
console.log(buf_2);
//3.from
let buf_3 = Buffer.from('hello world');
console.log(buf_3);
let buf_4 = Buffer.from([100,105,108,109,210,111,117]);
console.log(buf_4);
