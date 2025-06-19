const myNums = [ 1,, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc , cv) {
   
//    console.log( `${acc} and ${cv}`);
//     return acc + cv 
// }, 0)

console.log(myTotal);

const myTotal =myNums.reduce( (acc,cv) => acc+cv , 0)
