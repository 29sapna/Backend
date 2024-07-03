//globe scope & local scope
let a=10
const b=20
var c =30
if(true){
    var c =222
    // let a =100
    // console.log("ineer", a)
}
for(let i=0; i< array.length; i++){
    const element =array[i];
}
console.log(c);
// console.log(b);
// console.log(c);


function one(){
    const username ="sapna"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    console.log(website);

    two()
}
one()

if(true){
    const username ="sapnat"
    if(username === "sapnat"){
        const website ="youtube"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);

//+++++++++++++interesting++++++++++++
addone(5)//easily execute
function addone(value){
    return num + 1
}
// addone(5)



addtwo(5) //here it give error
const addtwo = function(num){
    return num +2
}
// addtwo(5)