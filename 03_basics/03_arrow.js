const user = {
    username: "hitesh",
    price: "999",

    weclomeMessage: function(){
        console.log(` ${this.username} , welcome to website`);
        
    }

}

// user.weclomeMessage

// console.log(this);  // {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()        this only work in object not in function


const chai = () => {

let username = "hitesh"
   console.log(this);
             // we can use this
}

//chai()

// const addTwo = (num1 , num2) => {
//  return num1 + num2
// }

// const addTwo = (num1 , num2) =>   num1 + num2


// const addTwo = (num1 , num2) =>  ( num1 + num2 )
// curly mei return likhna pdega 

const addTwo = (num1 , num2) =>  ( {username: "hitesh"})
console.log(addTwo(5,7));



// const myArray = [ 2, 3, 4, 4,7]

// myArray.forEach()