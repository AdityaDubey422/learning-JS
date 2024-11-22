let a = 10;
const b = 20;
// var c = 30;

if (true) {
  let a = 100;
  console.log("INNER:", a);
}

console.table([a, b]);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

function one() {
  const username = "aditya";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}
one(); // aditya

if (true) {
  const username = "aditya";
  if (username === "aditya") {
    const website = " youtube";
    console.log(username + website); // aditya youtbbe
  }
  //   console.log(website); //not defined
}
// console.log(usernmae); //not defined

// +++++++++++++++++Interesting+++++++++++++++++++++

console.log(addone(5)); // 6
function addone(num) {
  return ++num;
}

console.log(addTwo(5)); // eror (cannot accces addTwo before initialization)
const addTwo = function(num) {
    return num + 2;
}


