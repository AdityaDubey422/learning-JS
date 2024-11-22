// kis tareh data ko memory me rakha jaata hai aur acces kiya jaata hai uss basis par do type me data ko baata jaata hai :-
// i) primitive datatype and ii) non-primitive datatype(or reference type)

// Primitive (they are call by value)
// 7 types : String , Number , Boolean , null , undefined , BigInt , Symbol

let name = "Shubh Dubey";

let score = 100;
let scoreValue = 100.3;

let isLoggedIn = false;

let outsideTemp = null;
console.log(typeof outsideTemp); // Object

let userEmail;

let bigNumber = 537939n;
console.log(typeof bigNumber); // bigInt

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false(because symbol is used for uniqueness)

// Reference (Non primitive) (memory me inka reference allocate kiya jaata hai);
// Array , Objects , Functions

let heroes = ["thor", "spiderman", "superman"];
console.log(typeof heroes); // object

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(typeof car); // object

const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof myFunction); // function(actually me its a object function)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) (jab bhi stack memories use hoti hai to jo bhi ham variable define karte hai hame uski copy milti hai) ,

//Heap (Non-Primitive) (jab bhi kuch heap memory ke andar chala jaata hai to hame milta hai uska reference(original value ka) to ham jo bhi change karenge vo original value me bhi change hoga)

let myYoutubeName = "shubhDubey.com";
let anotherName = myYoutubeName;
anotherName = "hello.com"

console.log(myYoutubeName); //shubhDubey.com
console.log(anotherName); // hello.com

let userOne = {
  email : "user@google.com",
  upi : "user@ybl",
};

let userTwo = userOne;
userTwo.email = "hello@google.com"

console.log(userOne);  //{ email: 'hello@google.com', upi: 'user@ybl' }
console.log(userTwo); //{ email: 'hello@google.com', upi: 'user@ybl' }


