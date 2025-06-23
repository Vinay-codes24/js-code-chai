const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    //DB calls , crypotography . network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
        
    }, 1000);
})

promiseOne.then(function(){         //consuming promise
    console.log("Promise consumed");
    
})

new Promise(function(resolve , reject){  //2nd method
    setTimeout(function(){          // 1part mei hogya
console.log('async task 2');
resolve()

    } , 1000)
}).then(function(){
    console.log("aysnc task 2 resolved");
    
})

const promiseThree = new Promise(function(resolve , reject){
   setTimeout(function(){
          resolve({username: "chai" , email : "chai@example.com"})
   } , 1000)
})
promiseThree.then(function(user){
console.log(user);

})

const PrmoiseFour = new Prmoise()