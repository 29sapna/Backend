// ***********datatype***********
//  Stack (Primitive) ->call by value(copy is send not reference when call)
// 7 types: string, Number, boolean, Null, undefined, symbol,bigint

const score =100
const scorevalue =100.3

const isloggedIn =false
const oursidetemp = null
let userEmail;

const id =Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
const bignumber = 3456789n
//Heap(Non Primitive) or Reference type(memory ma enka refernce(original value ma change hota h) cerate kiya ja asakta h)
//->Array, Objects, function

const girls =["sapana", "dsaf", "dsps"];
let myobj={
    name:"sapna",
    age:2,
}

const myfunction =function(){
    console.log("sapna");
}
console.log(typeof myfunction);


//JS is dyanmically typed b/c we dont decare type while decalring.

let myyoutube ="sapnatiwari"
let anothername = myyoutube
anothername ="sonal"
console.log(anothername);
console.log(myyoutube);

let userOne ={
    email:"sapna@gmail.com",
    upi:"user@ybl"

}
let userTwo =userOne
userTwo.email="sonal@google.com"

console.log(userOne.email);
console.log(userTwo.email);
