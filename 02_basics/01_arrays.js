let myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray[0]); // 0

let superheroes = ["ironman", "spiderman", "Captian America"];
let myArray2 = new Array(0, 1, 2, 3);
console.log(myArray2.length); // 4

myArray.push(6);
console.log(myArray); // [0,1,2,3,4,5,6]

myArray.pop();
console.log(myArray); // [0,1,2,3,4,5]

myArray.unshift(9); // ham isse generally use nahi karte because first position pe add karne ke wajeh se ye sabke index ki aisi taisi kar deta hai ....but ha agar jaruri he hai use karna to kar lo
console.log(myArray); //[9,0,1,2,3,4,5]

myArray.shift();
console.log(myArray); // [0,1,2,3,4,5]

console.log(myArray.includes(9)); // false (a boolean dataType)
console.log(myArray.indexOf(9)); // -1 (iska matlab array ko nahi pata 9th index ke baare me kuss bhi)
console.log(myArray.indexOf(3)); // 3

const newArray = myArray.join(); //Adds all the elements of an array into a string, separated by the specified separator string.@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
console.log(myArray); //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArray); //0,1,2,3,4,5

console.log(typeof newArray); // string

// slice and splice

console.log("A ", myArray); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArray.slice(1, 3); // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.@param start The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.@param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
console.log(myn1); //[ 1, 2 ]
console.log("B ", myArray); //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray.splice(1, 3); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.@param start — The zero-based location in the array from which to start removing elements.@param deleteCount — The number of elements to remove.@returns — An array containing the elements that were deleted.
console.log(myn2); //[ 1, 2, 3 ]
console.log("C ", myArray); //C  [ 0, 4, 5 ]
