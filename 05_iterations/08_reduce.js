const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumWithInital = myNums.reduce((accumulator, currentvalue) => {
  console.log(`accumluator : ${accumulator} , currentValue : ${currentvalue}`);
  return accumulator + currentvalue;
}, 0);
console.log(sumWithInital);

const shoppingCart = [
  {
    courseName: "JS course",
    coursePrice: 2999,
  },
  {
    courseName: "python course",
    coursePrice: 999,
  },
  {
    courseName: "mobile dev course",
    coursePrice: 5999,
  },
  {
    courseName: "data scince course",
    coursePrice: 12999,
  },
];

// let totalPrice = 0;
// shoppingCart.forEach((course) => {
//   totalPrice += course.coursePrice;
// });
// console.log(totalPrice);

const totalPrice = shoppingCart.reduce( (accumluator, currentCourse) => accumluator + currentCourse.coursePrice, 0);
console.log(totalPrice);
