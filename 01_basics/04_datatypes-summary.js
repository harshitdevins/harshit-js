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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap (non-primitive)

let myYoutubename = "user1@gmail.com"

let anothername = myYoutubename
anothername = "atmosphere"
console.log(myYoutubename);
console.log(anothername);
/*
Remember this concept: Strings are primitive values in JavaScript. 
When you assign one string variable to another, the value is copied. 
Reassigning the second variable doesn't affect the first one.
*/

// Example for Non-Primitive
let cart1 = {
    item: "Laptop",
    price: 50000
};

let cart2 = cart1;

cart2.price = 40000;

console.log(cart1.price);
console.log(cart2.price);
  
 /*
 Explanation:
1. cart1 stores a reference to an object.
2. cart2 = cart1 copies the reference, not the object.
3. Both variables refer to the same object.
4. Changing cart2.price also affects the value accessed through cart1.
Remember: Primitive values are copied by value, whereas objects are assigned by sharing a reference.
 */
