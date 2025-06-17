// array

const myArr = [ 0 , 2 , 1, 3 ,4]

console.log(myArr[0]); // 0 index
const myHero = [ "tanjiro" , "bheem"]

const myArr2 = new Array(1, 2 ,3 , 4, 5)
// array does shallow copy mtlb same reference
// not hard copy

// array methods

myArr.push(6)     // last mei jod dega
// console.log(myArr);
myArr.unshift(9) // phe;e jod dega
myArr.shift()  // 9 ko hta dega
console.log(myArr);

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1 as he dont know


const newArr = myArr.join() // it changed type and maked string


// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
// slice dont manipulate roginal calue
// splice manipulate and just change the org