// for of loop

// ["","",""]
// [{},{},{}]

// const myArray = [1,2,3,4,5]
// for (const element of myArray) {
//     console.log(element)
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each alphabet of greeting is ${greet}`)
// }

// Looping in Objects
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
// for (const key of myObject) {
//   console.log(`${key}`); // giving a error that myObject is not iterable
// }

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

// Looping in maps

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}

