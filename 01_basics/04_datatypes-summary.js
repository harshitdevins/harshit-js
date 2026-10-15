// Primitive
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') 
const anotherId = Symbol('123') 

//console.log(id === anotherId);

// Reference (Non primitive) 

// Array , Objects , Functions

 const myArray = ["Ram", "Sita", "Laxman"];
  // array datatype => object {imp} 

  let myObj = {
    name: "Hariom",
    age: 22,
  }
//  obj can also be stored in variable

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myFunction);
 

