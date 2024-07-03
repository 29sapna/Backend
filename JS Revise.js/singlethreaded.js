// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);


//js is single threaded-- it uses browser to contain the settimeout, it perform one one at one time
//synchronus nature -line by line code 
//asynchronus nature- not line by line like ex given below 

setTimeout(() => {
    console.log("apna college");
}, 2000);
console.log("hello...");