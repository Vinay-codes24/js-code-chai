const name = "vinay"
const repoCount = 1

// console.log(name + repoCount + "  value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
// use back stciks as it is more proffesional

const gameName = new String (`vinay-hhc`)
// this givesus length prototype andmany other datas
// use it in console to udnerstand bettter

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2)); // 2nd postion pe konsa hai
console.log(gameName.indexOf('v')) // to check where postion is v at

const newString = gameName.substring(0, 4) ;
console.log(newString); // ans will be vina

const anotherString = gamerName.slice(0, 4) ;
 // we can give - values also ut will reverse and try
 const newStringOne = "  hitest.     "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 
 const url = "https://vinay.com/vnay%30gupta"

 console.log(url.replace(`%30`, `-`))
 console.log(url.includes(`vinay`))   // true

 console.log(gameName.split(`-`));  // [ `vinay` , `hhc`]
 // use mdn help to understand better
 
