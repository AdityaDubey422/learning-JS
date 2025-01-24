"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using nodejs , not browser

let name = "Shubh";
let age = 18;
let isLoggedIn = true;
let state;

// number => 2^53
// bigint 
// string => "" or '' or ''' ''' (teen waala multi line string ke liye)
// boolean => true/false
// null => standalone value
// undefined => abhi value assign nahi hui hai
// symbol => unique

// object 

console.table([typeof name,typeof age,typeof true,typeof "hello",typeof 22,typeof isLoggedIn,typeof null,typeof state,typeof undefined]);
console.log(typeof null); //object
let number = BigInt(2**70)
console.log(typeof number)
console.log(number)