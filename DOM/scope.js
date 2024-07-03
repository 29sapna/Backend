let sum = 34; //global scope
function calSum(a, b){
    let sum =a+b; //functiom scope
    console.log(sum);
}
console.log(sum);
calSum(1,4);

{
    let a=25;//block scope
}
console.log(a);

function outerFunc(){
    let x= 5;
    let y=6;
    function innerFunc(){
        console.log(x);  //lexical scoping
    }
    innerFunc();
}
outerFunc();
//hoisting
let name ="sapna";

let summ = function(a, b){
    return a+b;
}
summ(1,4);

let namee= "Sapna";
let suum=function(a,b){
    return a+b;
}
console.log(suum(2,3));


//Method
const calc ={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
calc.add(1, 3);