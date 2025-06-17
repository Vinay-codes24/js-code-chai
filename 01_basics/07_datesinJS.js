// dates

  let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(typeof myDate); //object 

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString);

let myCreatedDate = new Date("2023-02-21")
// in india we use mm-dd-yy not dd-mm-yy

let myTimeStamp =  Date.now()
// mili second value

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: ''
}

)

