function HIII(){
    console.log("Sonal");
    console.log("Sapna");
}
HIII();

function add(n1, n2){   //jab func ki definition banate h tho uske andar jo lete h wo parameter aur jab funct ko call karte h tho dete h  wo aragument 
    console.log(n1+n2);
}
add(2,3)

function mul(m1, m2){
    let result = m1 * m2;
    return result
}
const result = mul(2,3)
console.log("Result: ",result);

function login(username){
    return `${username} just logged in`
}
console.log(login("Sapna"));  // if i dont pass anything then it return undefined

function calculate(val1, val2, ...num1){ //... rest or spread
    return num1

}
console.log(calculate(300, 400, 500, 800));

const user ={
    username: "Sapna",
    price: 12

}
function handleobject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}
handleobject(user)


const array =[200,300,400,500]
function returnSecond(getarray){
    return getarray[1]
}
console.log(returnSecond(array));