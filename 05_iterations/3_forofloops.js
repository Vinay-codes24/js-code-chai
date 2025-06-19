// for of

const arr = [ 1, 2, 3, 4 , 5]

for (const num of arr) {
    // console.log(num);
    
}

const myStrings = "hellow world "
for (const just of myStrings) {
    console.log(`each char is ${just}`);
    
}

// Maps  give unique value

const map = new Map()
map.set(`IN`, "INDIA")
map.set(`FR`, "FRANCE")
map.set(`AU`, "AUSTRALIA")

console.log(Map);

for (const KEY of map) {
    console.log(KEY);
    
}

const myObj = {
    'game1' : 'nfs' ,
    'game2' : 'gta'
}
for (const [key , value] of myObj) {
console.log(key , ': ' , value);
  
}   // not work