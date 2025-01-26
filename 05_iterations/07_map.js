const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNewNums = myNums.map((num) => {
  return num + 10;
});
console.log(myNewNums);

const chaining = myNums
  .map((num) => num * 10)
  .map((num) => ++num)
  .filter((num) => num % 3 === 0);
console.log(chaining);

