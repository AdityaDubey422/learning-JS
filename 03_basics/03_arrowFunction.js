const user = {
  username: "aditya",
  price: 999,

  welcomeMessage: function () {
    console.log(`Hello ${this.username} , welcome to the website`);
    console.log(this);
  },
};
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);

// function chai() {
//   let username = "aditya";
//   console.log(this.username);
// }
// chai(); // undefined

const chai = () => {
  let username = "aditya";
  console.log(this.username);
};
chai(); // undefined

const addition = (num1, num2) => {
  return num1 + num2;
};

console.log(addition(2, 3));

const addOne = (num) => ++num
const addTwo = (num) => (num + 2)
console.log(addTwo(5));//7

const returnObject  = () => ({username : "aditya"})
console.log(returnObject());

