let score = 400;
console.log(score); // 400

let balance = new Number(100.3398);
console.log(balance); // [Number: 100.3398]

console.log(balance.toString().length); //8
console.log(balance.toFixed(2)); // 100.34(decimal ke baad kitni values tak round off karna hai)

let otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(4)); //1124(starting se number ko round off karega)

let hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000(10 lakh basically indian tarike se comma laga dega(agar ham en-IN likhenge brackets ke andar to) agar brackets ke andar kuch na likhte to english ki tarike se karta that is 100,000(100k))

// ++++++++++++++++++++++Maths+++++++++++++++++++++
// Java script ke saath math ki library by default aati hai(hame kuch import ni karnamath ki chije use karne ke liye...(dekh rahe ho python vaale))

console.log(Math); //Object [math] {} (console me print kara ke dekho)

console.log(Math.abs(-200)); // 200(it will give absolute value(modulus badmosh))
console.log(Math.round(-4.489)); // -4(round off karke de dega)
console.log(Math.ceil(4.1)); // 5 (ceiling value means top value de dega(its lik a greatest integer function))
console.log(Math.floor(4.9)); //4 (floor value means bottom value lega)
console.log(Math.min(4, 3, 6, 8)); // 3(min value out of given number of values)
console.log(Math.max(4, 3, 6, 8)); //8(max value out of given number of values)

console.log(Math.random()); // gives a random number between 0 and 1( 0 is inclusive and 1 is exlusive)

// maan lo dice hai jo 1 se 6 number tak de sakta hai
console.log(Math.ceil(Math.random() * 6));

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
