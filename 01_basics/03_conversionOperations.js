let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) // string ko bhi uske kr skte
console.log(typeof valueInNumber);
console.log(valueInNumber)
    //NaN
 // "33" => 33
 // "33abc" => NaN
 // true => 1 and fasle => 0

 let isLoggedIn = 1

 let booleanIsLoogedIn = Boolean(isLoogedIn)
console.log(booleanIsLoogedIn);

// 1 true and 0 flase
// "" false and "some value" true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(someNumber);

// ****************Operations ****************

let value = 3
let negValue = -value
console.log(negValue);
// -3

let str1 = "hellow"
let str2 = " vinay"

let str3 = str1 + str2 ; // minus nhi hota

console.log("1" + 2 + 2); // 122
console.log(1 + 2 +"2");  // 32 jismei convert hoga depends on 1st input

console.log(true); // true
console.log(+true) // 1 increment nhi hua
console.log(+"");  // 0

let num1 , num2 , num3 

num1 = num2 = num3 = 2+2 // this is not good way

let gameCounter = 100
gameCounter++ // 101
 ++gameCounter // 101
