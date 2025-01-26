const myObject = {
    JS: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
};

for (const key in myObject) {
    console.log(`Shortcut of ${myObject[key]} is ${key}`);
}

const programming = ["js", "rb", "python", "cpp"];

for (const values in programming) { // basically values are here index i.e 0,1,2,3
   console.log(programming[values]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for(const key in map){
    console.log(key) // kuch output he ni aa raha(because maps are not iterable)
}

