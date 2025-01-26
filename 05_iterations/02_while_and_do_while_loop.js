// while loop

let i = 0;
while (i <= 10) {
  console.log(`Value of i is ${i}`);
  i = i + 2;
}
console.log(i) // 12

let myArray = ["hello","my","name","is","Aditya"]
let arrayIndex = 0
while(arrayIndex < myArray.length){
    console.log(myArray[arrayIndex])
    arrayIndex++
}

// do while loop
let score = 11
do {
    console.log(`Score is ${score}`)
    score++
} while (score < 10);