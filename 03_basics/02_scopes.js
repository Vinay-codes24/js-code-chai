// var c = 300
let a = 300
if (true) {

let a = 10
const b = 20
var c = 30
console.log("TNNER: ", a )

}      // {} is scope

//  console.log(a);
// console.log(b);
// console.log(c);  


function one(){
    const username = "hitesh "

    function two (){
       const website = " youtube"
       console.log(username);
    }
    // console.log(website);
        two()

    
}
// one()

if (true){
    const username = " hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//********************intresting*****************

function addone(num){
 return num +1             // called fucntion
}

addone(5)



const addTwo = function(num){  // called as expression
    return num + 2
}
addTwo(5)