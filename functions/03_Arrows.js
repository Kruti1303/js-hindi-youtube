const user={
    name:"Kruti",
    price:90,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to website`);// this=refer current context
        console.log(this);
        
    }
}
//user.welcomeMessage()

// function one(){
//     name="kruti"
//     console.log(this.name);// not possible in function
    
// }
//one()// undefined

const one = ()=>{
    let name="kruti"
    console.log(this);
}
//one();
// arrow function - ()=>{}
const addTwo =(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4));
// const addTwo = (n1,n2)=>n1+n2
// like lambda

