const marvel_heros = ['thor' , 'ironman , "spiderman']
const dc_heros = [ "superman" , "flash" , "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][1]);  //flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(marvel_heros);
console.log(allHeros);
// concat add arrays

const allHeros = [...marvel_heros, ...dc_heros]

console.log(allHeros);
// spread is consis more bcz it can add more than 2

const another_array = [ 1, 2, 3 [4,  5, 6] , 7 , [6 , 7] ,[4 , 5]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("vinay")) // false
console.log(Array.from("vinay")); // v i  n a y
console.log(Array.from({name: vinay})); // intres

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3));


