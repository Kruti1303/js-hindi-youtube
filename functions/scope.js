let a=100;
if(true){
    let a =10;//accessible
const b=20;// not accessible
var c =30;// accessible
//console.log("Inner ",a);//10

}
//console.log(a);//100
//console.log(b);
//console.log(c);

{}//scope
// is ke andr ka block scope ,bhr ka global scope

function one(){
    
    const name="hitesh"
    function two(){
        const website="youtube"
         console.log(name);//hitesh
    }
   // console.log(website);
    two()
   
    
}
one()

//////////////////////////
console.log(one(2));

function one(n){
    return n*2;
}


const add = function(num){
    return num+2;
}
console.log(add(2));// this we cant write up
