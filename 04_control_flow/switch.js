// switch ( key ) {
// case value:

// break;

// default:
//     break;

// }

const month = 3
switch  (month ) {
case  1:    
console.log("january");
break;

case  2:    
console.log("febaury");
break;

case  3:    
console.log("april");
break;

default:
    console.log("feault case match");
    
    break;
// break tod deta hai control flow ko
}

// empty string is considered false
// empty array is conisdered true

/* falsy values

false, 0 , -0 , BigInt 0n , "" , null , undefined , NaN

other all are turthy values 

some truth values suprises are 
"0" , 'false' , " " , {} , {} , function(){} 
*/
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log(`object is empty`);
    
}    // to hceck object is empty or not

// Nullsih Coalescing Operator (??) : nulll undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10  // it will give now 10 as /// detects null
//  val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // first value get assign 10



console.log(val1);

// Terniary Operator

// conditon ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ?  console.log("less than 80"): console.log("more than 80");


