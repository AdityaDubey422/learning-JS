// DATES

let myDate = new Date();
console.log(myDate); //2024-11-17T20:11:44.415Z
console.log(myDate.toString()); //Sun Nov 17 2024 20:11:44 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun Nov 17 2024
console.log(myDate.toLocaleString()); // 11/17/2024, 8:11:44 PM
console.log(myDate.toLocaleDateString()); // 11/17/2024
console.log(myDate.toISOString()); //2024-11-17T20:11:44.415Z
console.log(myDate.toJSON()); // //2024-11-17T20:11:44.415Z

console.log(typeof myDate); // Object

let myCreateDate = new Date(2023, 0, 23, 5, 3); // JS me month 0 se start hote hai
console.log(myCreateDate); //2023-01-23T05:03:00.000Z
console.log(myCreateDate.toString()); //Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

let myCreateDate1 = new Date("01-14-2023");
console.log(myCreateDate1.toString()); //Sat Jan 14 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myTimeStamp = Date.now();
console.log(myTimeStamp); // millisecond me time dega(mdn padh lo)
console.log(Math.floor(Date.now() / 1000)); // concverting to seconfs

let newdate = new Date();
console.log(newdate.getDay()); // 0(sunday)
console.log(newdate.getMonth() + 1); // 11(november)(+1 month is liye kiya because js 0 se month ginna shuru karega)

console.log(
  newdate.toLocaleString("default", {
    weekday: "long", // pura sunday aayega na ki sirf Sun
  })
);
