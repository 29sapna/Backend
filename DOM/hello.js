// // let a = 2;
// // let b= 4;
// // //let c=6;
// // // a=b;
// // // b=c;
// // // c=a;
// // a=a+b;
// // b=a-b;
// // a=a-b;
// // console.log(a);
// // console.log(b);
// // // console.log(c);

// // function  add(x, y){
// //     z=x+y;
// //     console.log(z);
// // }
// // add(2,3);
// // console.log(z);

// var f = function(b,c){
//     return b+c
//     // console.log(total);
// }
// console.log(f(2,3));

// // ->higher order function
// // ->callback function
function hello(){
    console.log("hello");
}

function printName(name){  //name is argument
    console.log(name);
    // console.log("mouse");
}
//printName("Sapna"); //sapna is parameter here

function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
//print1to5();
function isAdult(){
    let age = 18;
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }
}
//isAdult();
function printPoem() {
    console.log("Twinkle, Twinkle, little star");
    console.log("how i wonder what you are");
}
//printPoem();

function rollDice(){
    let rand =Math.floor(Math.random() * 6)+1;
    console.log(rand);
}
//rollDice();
function sum(a, b){
    //console.log(a+b);
    return a+b;
}
//console.log(sum( 3, 4));
// sum(1, 2);
// sum(12, 2);
// sum(11, 2); 

function calAvg(a, b, c){
    let avg =(a+b+c)/2;
    console.log(avg);
}
//calAvg(2,5,7);
function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
//printTable(2);
function getSum(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        sum += 1;
    }
    return sum;
}
//getSum(5);

let str =["hi", "bye", "sit"];
function concat(str){
    let result ="";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
//this keyword
const student ={
    name: "sapna",
    age: 23,
    eng:34,
    hin: 67,
    math:34, 
    getAvg(){
        console.log(this);
        let avg =(this.eng + this.math + this.hin) /3;
        console.log(avg);

    }
}
//try catch
try{
    console.log(a);
}catch(error){
    console.log(("error occured!!"));
    console.log(error);
}
//arrow function
const sum =(a,b) =>{
    console.log(a+b);
}
sum(4,5);


const cube = (n) =>{
    return n*n*n;
};

const hell = () =>{
    console.log("byee");
}

const mul =(a,b) => a*b;
mul(2,3);
//settimeout

console.log("hi there");
setTimeout(() => {
    console.log("Apna Ghar");
},4000);
console.log("welcome to the world!");


setInterval(() =>{
    console.log("hi, sona");
}, 2000);


