// singleton object -> const user = new Object()
const user ={}// non singleton obj
user.id="12ec"
user.name="Sam"
//console.log(user);//{ id: '12ec', name: 'Sam' }
 const user1 ={
    email:"some@gmail",
    fullname:{
        userName:"Hitesh",
        lastName:"Choudhary"
    }
 }
// console.log(user1.fullname);//{ userName: 'Hitesh', lastName: 'Choudhary' }
// console.log(user1.fullname.lastName);//Choudhary

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
//const obj3 = Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 ={...obj1,...obj2}
//console.log(obj3);
//console.log(Object.keys(user1));//[ 'email', 'fullname' ]
//console.log(Object.values(user1));//[ 'some@gmail', { userName: 'Hitesh', lastName: 'Choudhary' } ]
//console.log(Object.entries(user1));// key and value both
//console.log(user1.hasOwnProperty(fullname));



// *** obj destructure ***//
const course={
    name:"js",
    price:1000,
    instructor:"Hitesh"
}
const {instructor} = course;
console.log(instructor);

// json-> key and value strings

// {
//     "name":"hitesh",
//     "courseName":"js",
//     "price":"free"
// }







