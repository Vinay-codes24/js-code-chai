function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("h");
    console.log("e");
    console.log("h");
}
// sayMyName() execute

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1 , number2){
    
    // let result = number1 + number2
    // return result  // return ke baad koii kaam nhi hoga
    // console.log("hitest");

    return number1+number2
    
}
const results = addTwoNumbers(3 , 4)

// console.log("result :", result);

function loginUserMessage(username){

if(!undefined){  //undefind ya empty ko falselete
console.log(`please enter name`);
return

}   if(username === undefined){
  console.log(`please enter username`);
  return 
  // kaam hi nhi hoga
    }
 return `${username} just logged in`   
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
// agr kuch pass hi nakre toh undefined aata hain