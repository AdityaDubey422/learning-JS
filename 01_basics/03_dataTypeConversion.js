let score0 = "334";
console.log(typeof score0); //string

let score0InNumber = Number(score0);
console.log(typeof score0InNumber); //number
console.log(score0InNumber); // 334

let score = "123abc";
console.log(typeof score); //string

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber); //number
console.log(scoreInNumber); // Nan(not a number)

// ye sab dikkate isiliye hoti hai js me because ye itna stricutly chijo check ni karta thats why log typescript use hoti hai

let score2 = undefined;
console.log(typeof score2); //undefined

let score2InNumber = Number(score2);
console.log(typeof score2InNumber); //number
console.log(score2InNumber); // Nan(not a number)

let score3 = null;
console.log(typeof score3); //object

let score3InNumber = Number(score3);
console.log(typeof score3InNumber); //number
console.log(score3InNumber); // 0

let score4 = true;
console.log(typeof score4); //boolean

let score4InNumber = Number(score4);
console.log(typeof score4InNumber); //number
console.log(score4InNumber); // 1

let score5 = false;
console.log(typeof score5); //boolean

let score5InNumber = Number(score5);
console.log(typeof score5InNumber); //number
console.log(score5InNumber); // 0

// Number converter
// "33" => 33
// "33abc" => NaN
// "" => 0
// undefined => NaN
// true => 1
// false => 0
// null => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); //true

let isLoggedIn2 = 0;

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn2); // boolean
console.log(booleanIsLoggedIn2); //false

let isLoggedIn3 = "";

let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(typeof booleanIsLoggedIn3); // boolean
console.log(booleanIsLoggedIn3); //false

let isLoggedIn4 = undefined;

let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(typeof booleanIsLoggedIn4); // boolean
console.log(booleanIsLoggedIn4); //true

//Bollean Conveter
// 1 or any number other than 0 => true
// 0 => false
// "" => false
// "text" => true
// null => false
// undefined => false

let someNumber = 33;
console.log(someNumber);

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);





