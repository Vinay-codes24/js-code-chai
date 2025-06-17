const tinderUser = new Object()  // {} empty object
// above is  singleton
 // const tinderUser = {} // not singleton

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false 
tinderUser.name = "sammy"

// console.log(tinderUser);

const regularUser = {
email = "some@gmail.com";
fullname: {
userfullname :{
    firstname: "vinay",
    lastname: "kumar"
}
}

}
// console.log(regularUser.fullname.userfullname.lastname)

// we use fullname? in code as somtimes value dont exist

const obj1 = { 1: "a" , 2 : "b"}
const obj2 = { 3: "a" , 4 : "b"}

const obj3 = { obj1 , obj2} // wrpng same like array

// console.log(obj3);

const obj4 =  Object.assign({}, obj1, obj2)
// console.log(obj4);

//Object.assign(target,source) we use empty thesis/array
// wrna saari value 1 mei jaa rhi hain

const obj5 = { ...obj1, ...obj2} 
// this is spread mthod

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
    ,
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
    ,
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//true aaega isse find kr skte hai 

const course = {
    name: "JShindi" ,
    price: "999"  ,
    courseInstructor: "hitest"
}

// course.courseInstructor
const {courseInstructor} = course 

console.log(courseInstructor);

// {
// "name" : "hirtesh" ,
// "coursename" : "js in hindi",
// "price" : "free"
// }  // this is JSON
