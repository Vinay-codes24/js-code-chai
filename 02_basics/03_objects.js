// singleton
// constructor se singleton bnega 

// object literals
 // Object.create
const Jsuser = {
    email = "sxy@gmail",
    name : "vinay",
    age : 18,
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);

const MySym = Symbol("key1")

console.log(typeof MySym) // it is not yet symbol
console.log(Jsuser[MySym]);

// type this [mysyn] = "mykey1" in body

Jsuser.email = "vinay@chatgpt.com" // over write
Object.freeze(Jsuser) // freezes

Jsuser.greeting = function(){
    console.log(`hellow JS user ${this.email} `);
}

consolelog(Jsuser.greeting()); // function







