// array,,mix datatype,reiszable
const myArr = [0,1,2,3,4,true,"Kruti"]
const arr = new Array(1,2,3)
arr.push(5)

//console.log(arr);
//arr.pop()// remove last element
//arr.unshift(9)
//arr.shift()
//console.log(arr);
//console.log(arr.includes(9));
//console.log(arr.indexOf(3));
const newarr = arr.join();
//console.log(newarr);// type=string
// slice ,splice
//console.log("A",arr);
const my1 =arr.slice(1,3);// index 1 and 2 , 3 is not included
//console.log(my1);
//console.log("B ",arr);

const m2 =arr.splice(1,3)
// console.log(arr);// splice will chnage original array while slice wont
// console.log(m2);// includes 5 th index as well 

//concat-> combines two or more arrays and returns new array
const a1 =["blue"];
const a2 = ["red"];
const a3 = [...a1,...a2];
//console.log(a3);// blue,red-> this is spread operator

const a11 = [1,2,[8,7],[2,3,4,[7,4]]];
const a22 = a11.flat(Infinity);
//console.log(a22);
console.log(Array.isArray("Hitesh"));//false
console.log(Array.from("Hitesh"));// converted into array
console.log(Array.from({name:"hitesh"}));// interesting











