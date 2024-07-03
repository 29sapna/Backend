const user = true
const temp = 51

if(temp===34){
    console.log("less than 60");
}
else{
    console.log("bye byeee");
}
console.log("temp is greater than 50");
// <,>,<=,>=, ==, ===(it checks type to), !=

const score = 200
if(score > 100){
    let power ="fly"
    console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);


const userlogin =true
const debitcard = true
const loggedingoole = false

if(userlogin && debitcard && 2==3){
    console.log("allow to buy course");
}

const month =2
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    default:
        console.log("default code");
        break;
}

//falsy value
// false, 0, -0, Bigint on, "", null, underfined, Nan

//truthy value
//"0", 'false', " ", [], {}, function(){}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

//ternary operator
//condition ? true : false

const val2 =30;
val2 <= 3 ?  console.log("than than 3") : console.log("more than 3");;
