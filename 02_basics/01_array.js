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
console.log("A",arr);
const my1 =arr.slice(1,3);// index 1 and 2 , 3 is not included
console.log(my1);
console.log("B ",arr);

const m2 =arr.splice(1,3)
console.log(arr);// splice will chnage original array while slice wont
console.log(m2);// includes 5 th index as well 







