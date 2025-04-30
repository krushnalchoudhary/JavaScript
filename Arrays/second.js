const marvelHeroes = ["IronMan" , "Thor" , "SpiderMan"];
const dcHeroes = ["SuperMan" , "Flash" , "BatMan"];

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes)

console.log(marvelHeroes[3]);
console.log(marvelHeroes[3][1])

marvelHeroes.pop()
console.log(marvelHeroes)

const combinedArray = marvelHeroes.concat(dcHeroes)
console.log(combinedArray)


const speadedArray = [...marvelHeroes , ...dcHeroes]
console.log(speadedArray);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArray)

const anotherUsableArray = anotherArray.flat(Infinity);

console.log(anotherUsableArray);


console.log(Array.isArray("Krushnal"));
console.log(Array.from("Krushnal"));
console.log(Array.from({name:"krushnal"}));



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

