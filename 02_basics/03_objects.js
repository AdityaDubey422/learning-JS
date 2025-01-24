// singleton

// Object Literals
let mySym = Symbol("key1");

const JsUser = {
  name: "Aditya",
  "full name": "Aditya Dubey",
  [mySym]: "mykey1",
  age: 18,
  location: "Uttar Pradesh",
  email: "aditya@google.com",
  isLoggedIn: false,
  lastLoginDays: ["sunday", "monday"],
};

console.log(JsUser.age); // first way of accesing
console.log(JsUser["email"]); // second way of accesing (yaha pe key ko as a string dena)
console.log(JsUser["full name"]); // full name ko ham aise he aces kar sakte hai dot(.) se nahi kar sakte
console.log(JsUser[mySym]); // mykey1

JsUser.isLoggedIn = true;
console.log(JsUser);

JsUser.greeting = () => {
  console.log("Hello JS User");
};

console.log(JsUser.greeting); //[Function (anonymous)] (function execute nahi hua uska bas reference aaya hai)
console.log(JsUser.greeting()); //Hello JS User

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greetingTwo); //[Function (anonymous)]
console.log(JsUser.greetingTwo()); //Hello JS User, Aditya


Object.freeze(JsUser); // hamne Jsuser naam ke object ko freeze kar diya to ab uske keys ki value ham nahi badal payyenge
JsUser.email = "aditya@microsoft.com"; // yaha error nahi aaya but jab print karoge to you will gonna see ki value change nahi hui hai because hamne freeze kar diya hai object ko
console.log(JsUser.email); // aditya@google.com
