const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consmed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@aurcode"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})

const promiseFour =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"sapna", password:"123"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() =>console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject)
{
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"js",password:"123"})
        }else{
            reject('Error: Somrthing went wrong')
        }

    },100)
});
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);

    }
}

consumePromiseFive() 
async function getAllUsers(){
    const response = await fetch("")
        const data= response.json()
        console.log(data);
    
}  
getAllUsers()