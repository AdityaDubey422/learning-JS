function sayMyName() {
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}
sayMyName();

// function addTwoNumbers(number1, number2) {
//   // number1 and number2 are named as parameters
//   console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5); // 3 and 5 are named as arguments
// console.log(`Result: ${result}`); // Result: undefined (because ye function koi value return thodi kar raha hai jo ham usse sotre karane me lage hai ye function to bas console me print karva raha hai maamla)

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

let result = addTwoNumbers(3, 4);
console.log(`Result: ${result}`); //Result: 7

function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage()); //undefined just logged in
console.log(loginUserMessage("Aditya")); //Aditya just logged in

function updatedLoginUserMessage(username) {
  if (!username) {
    console.log("please enter a username");
  } else {
    return `${username} just logged in`;
  }
}
console.log(updatedLoginUserMessage()); //undefined just logged in
console.log(updatedLoginUserMessage("Aditya")); //Aditya just logged in

function calculateCartPrice(...num1) {
  //rest operator
  return num1;
}
console.log(calculateCartPrice(200, 300, 900, 23, 9999)); //[ 200, 300, 900, 23, 9999 ]

const user = {
  username: "Aditya",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
handleObject(user); //Username is Aditya and price is 199
handleObject({
  username: "sam",
  price: 299,
}); //Username is sam and price is 299

let myNewArray = [100, 200, 400, 600];
function returnSecondValue(getArray) {
  console.log(getArray[1]);
}
returnSecondValue(myNewArray); //200
returnSecondValue([0,1,2,3,4]); //1
