//The promise object represent the eventual completion of an asynchronous operation and its resulting value
// function savetodb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success(); 
//     }else{
//         failure();
//     }
// }

// savetodb("apna collage", () => {
//     console.log("success: your data was saved", data);
// },
// () => {
//     console.log("failure: weak connection, data not saved");
// }
// ); 
// promises-> resolve & reject 
function savetodb(data){
    return new Promise((resolve, reject)=> {
        let internetSpeed = Math.floor(Math.random() * 10) +1;
        if(internetSpeed > 4){
            resolve("data was saved");
        }else{
            reject("data is fail");
        }
    });
}
savetodb("hello world");

//fulfill->then, reject->catch these two are methods
savetodb("apna college")
.then((result) =>{
    console.log("Promises was resolved");
    console.log(result);
    return savetodb("helloworld")
})
.then((result) =>{
    console.log("data2 saved");
    console.log(result);
    return savetodb("sapna")
})
.catch((error) => {
    console.log("promise was rejected");
    console.log(error);
});
//then->fulfilled hone k baad kuch kam karata h
//catch ->error ko handle karta karta h jab promise reject hota h tho

//promises are rejected and resolved with some data
//promise chaining



