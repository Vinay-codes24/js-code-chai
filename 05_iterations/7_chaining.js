const Numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// const newNums = Numbers.map( (num) => num + 10)
// console.log(newNums);

const newMuns = Numbers
.map( (num) => num *10  )
.map( (num) => num + 1 )
.filter( (num) => num >= 40 )  // jo true hoga filter whi

console.log(newMuns);

