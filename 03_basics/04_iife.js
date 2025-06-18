// Immediately Ivolved Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})()    ;
// semi colon ko bhi lgna hain

// global scope se pollution hota hai usko htane ke liye IIFE
( function aurcode(){
    console.log(`DB CONNCTED`)
}   

)()