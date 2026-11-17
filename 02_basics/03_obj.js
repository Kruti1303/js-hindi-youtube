// objects
// singleton 
// object literals
// Object.create// singleton
const mySym = Symbol("key1");
const jsUser ={
    name:"Kruti",
    age:23,
    location:"Hyd",
    [mySym]:"mykey1",
    isLogin:false,
    lastLoginDays:["Mon","tue"]
}// obj created
// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser[mySym]);

jsUser.email="hitest.com"// to chnge
//Object.freeze(jsUser);// lock chnges
jsUser.email="micros.com";
//console.log(jsUser.email);//hitest.com
jsUser.greetinng = function(){
    console.log(`Hello Js, ${this.name}` );
    
}
console.log(jsUser.greetinng());


