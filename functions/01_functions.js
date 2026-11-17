// functions (like methds in java)
function name(){
    console.log("Kruti");
    
}
//name()// kruti

// function add(n1,n2){ // paramters
//  console.log( n1+n2);
 
// }
// add(3,4)//7 // arguments

function add1(n1,n2){
    return n1+n2;
}
const result = add1(3,5);
//console.log(result);// directly we cant console log functions

function loginInMessage(username){
    return `${username} just logged in`
}

//console.log(loginInMessage("kruti"));//kruti just logged in
// if(condition) agar username na ho undefine ho to aur fir return use kro system.exit jaise
// default value bhi de skte hai function m paramter ke bju me ="name"

function calculateCartPrice(...n){// rest operator (like vargs)
    return n
}
//console.log(calculateCartPrice(20,40,90));

//(val1,val2,....n)->(10,20,30,40,50)->val1=10,val2=20,remaining in n
const user ={
    name :"kruti",
    price:100
}
function handleObject(anyobj){
    console.log(`username ${anyobj.name} and price is ${anyobj.price}`);
    
}
//handleObject(user)//username kruti and price is 100
const arr=[10,20,30]
function returnarr(a1){
    return a1[1]
}
console.log(returnarr(arr));//20
// returnarr([100,200,300])
