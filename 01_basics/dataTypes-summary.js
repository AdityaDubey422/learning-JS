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
console.log(typeof heroes);

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(typeof car);

const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof myFunction);
