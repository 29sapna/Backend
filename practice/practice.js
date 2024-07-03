
const balance =1000
if(balance < 500){
    console.log("less than 500")
}else if(balance < 740){
    console.log("less than 740")        

         }
         else
         console.log("not defined")
//SWITCH
let month= `${"enter month name: "}`

switch(month){
    case "January":
        console.log("jan")
        break;
    case "Febuary":
        console.log("feb")
        break;
    case "March":
        console.log("I am bad girl")
        break;
            
     case "April":
        console.log("April")
        break;
    default:
        console.log("not month name") 
        break;           

    
}
//falsy values
// false , 0, -0 ,BigInt, 0n,"",null,undefined,NaN
//Truthy value
//"0","false"," ", [],{},function(){}
const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
console.log(val1)

//ternary operator
//condition ? true :false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");