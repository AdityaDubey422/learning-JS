const userEmail = "aditya@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values :
// "0", 'fasle', " ", [], {}, function(){}

// how to check if array is empty or not (do not use these truthy falsy shit)

const myArray = []

if(myArray.length === 0){
    console.log("array is empty")
}

// how to check if object is empty or not

const myObject = {}

if(Object.keys(myObject).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = null ?? 10
val1 = undefined ?? 20
console.log(val1);

// Ternary Operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

