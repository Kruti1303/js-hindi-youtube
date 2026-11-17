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

console.log(loginInMessage("kruti"));//kruti just logged in
// if(condition) agar username na ho undefine ho to aur fir return use kro system.exit jaise
// default value bhi de skte hai function m paramter ke bju me ="name"


