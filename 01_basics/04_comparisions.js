console.log("2" > 1); // true
console.log("02" > 1);  // true

console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

/* comapriosns 
convert null to a number treating it as 0 .. equality doesnt == */

console.log(undefined == 0); // true with any operations

// === conversion stop
console.log("2"===2);

