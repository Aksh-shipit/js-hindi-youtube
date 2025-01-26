//Primitive


//7 types; String ,Number,Boolean,null, undefined, Symbol,BigInt
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);
const bigNumber=345673456n

//Reference(Non Primitive)
//arrays, Objects, Functions, 
const heroes=["shaktiman","nagraj","doga"];
let myObj={
    name:"hitesh",
    age:22,

    

}
const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof scoreValue);
console.log(typeof myFunction);