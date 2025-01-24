let mavelHeroes = ["thor", "ironman", "spiderman"];
let dcHeroes = ["superman", "flash", "batman"];

// mavelHeroes.push(dcHeroes);
// console.log(mavelHeroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(mavelHeroes[3][1]); // flash

let heroes = mavelHeroes.concat(dcHeroes); // combines two or more arrays,returns a new array
console.log(heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

let allHeroes = [...mavelHeroes, ...dcHeroes]; // spread operator(jyaada kar time isse he use karenge)
console.log(allHeroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

let anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);// [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]


console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name : "hitesh"})); // [](agar ye array nahi bana paayega to empty array dega(isse samajh nahi aya because hamne bataya he nahi kin chjijo ko leke array banao(keys ko leke ya value ko leke)))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]




