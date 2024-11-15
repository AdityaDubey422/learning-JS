// *********************** Operation ****************************
let value = 3;
let negValue = -value;
console.log("negValue =", negValue); // -3

//arithmetic operators
console.table([2 + 2, 2 - 2, 2 * 2, 2 / 2, 2 ** 2, 2 % 2]);

// adding strings(strings cant be subtracted)
let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;
console.log("str3 =", str3); // Hello World

// dont do these type of things because it just kills the readability and make the code overcomplicated
console.log("1" + 2); // 12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // dont do these type of things because it just kills the readability and make the code overcomplicated

let gameCounter = 100;
gameCounter++; // you can use this
console.log("gameCounter =", gameCounter);

// comparison operators
console.table([2 > 1, 2 >= 1, 2 < 1, 2 <= 1, 2 == 1, 2 != 1]);

// we avoid doing all this
console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is that an equality check == and comparisons > < >= <= work differently.comparisons convert null to a number and treat it as 0. thats why (3) null>= 0 is true and (1) null > 0 is false.

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Strict check (check value and data type and two data type can never be equal)

console.log("2" === 2); // false

