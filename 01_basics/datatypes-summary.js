// primitive (7)- call by value
// String,Number,Boolean,null,undefined,Symbol,BigInt

//Reference type(Non Premitive)
//Array,Objects,Functions
// js is dynamically typed
const num=90;
const n =987.98;
let userEmail;//undefined
const id=Symbol('123')
const anotherId=Symbol('123');
//console.log(id===anotherId);
const bigNumber=3459764231203142857934560n
const heros = ["Shaktiman","doga"];
let myObj = {
    name:"hitesh",
    age:40


}
const myFunction = function(){
    console.log("hello");
    
    
}

//console.log(typeof(anotherId));
/*
Stack(primitive datatype),heap (Non primtive datatype) ref is shared


 */
let youTubename ="hiteshc"
let anothername = youTubename
anothername="chaiaurcode"
console.log(youTubename);//hiteshc
console.log(anothername);//chaiaurcode
let userone ={
    email:"@.com",
    upi:"user"
}
