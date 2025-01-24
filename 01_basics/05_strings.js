let name = "Shubh";
let repoCount = 5;
// console.log(name + repoCount + " value"); //dont do this instead use template literals

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shubh-Dubey');
console.log(gameName); 

console.log(gameName[0]);  // S
console.log(gameName.__proto__); //{}

console.log(gameName.length); //11
console.log(gameName.toUpperCase()); //SHUBH DUBEY
console.log(gameName.charAt(0)); // S (charAt cant take negative index(matlab backward counting nahi kar sakta) and jab bhi isme index out of range hoga to ye empty string return karega) 
console.log(gameName.at(-1));// y (at accepts negative index and jab isme index out of range jaayega to it returns undefined)

console.log(gameName.indexOf("D")); //6

const newString = gameName.substring(0,4); // substring ke andar negative value kaam ni karengi vo 0 se he start kar dega
console.log(newString); // Shub(4 is exclusive)

const anotherString = gameName.slice(-8,4); // -8 matlab piche se 8va number
console.log(anotherString); // b

const newString1 = "     Shubh     ";
console.log(newString1.trim()); // Shubh(removes starting and ending spaces)

const url = "https://shubh.com/shubh%20dubey";
console.log(url.replace("%20","-")) // https://shubh.com/shubh-dubey

console.log(url.includes("shubh")); //true(means url string ke andar shubh hai)

console.log(gameName.split('-')); // ['Shubh' , 'Dubey'] (returns an array of all the parts that are differentiated by '-')

//EXtra learning  by myself
console.log(gameName.concat(" ","is my best friend")); // shubh-dubey is my best friend


//endsWith("searchString",endPosition) // end position is optional if you do not give it takes the last index+1 as default
console.log(gameName.endsWith("Dubey")); // true
console.log(gameName.endsWith("h-")); // false
console.log(gameName.endsWith("h-", 6)); // true 