// dates
let myDate = new Date();
//console.log(myDate.toString());
// toDateString,toLocaleString -> you can define everything what you want
// 
let myCreateDate = new Date(2003,0,23,5,3)
//console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date("01-14-2023")
//console.log(myCreateDate1.toDateString());
let myTime = Date.now();
//console.log(myTime);//mili seconds
//console.log(myCreateDate1.getTime());
//console.log(Math.floor(Date.now()/1000));// in sec
console.log(myCreateDate.getMonth()+1);
console.log(myCreateDate.getDay());




