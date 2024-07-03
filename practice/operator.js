
console.log("before if");
let age =23;
if(age>=18){
    console.log("u can vote");
}
console.log("after if");

let color ="red"
if(color=="red"){
    console.log("Stop");
}
 else if(color =="yellow"){
    console.log("slow down");
}
else if(color =="green"){
    console.log("move");
}
else{
    console.log("traffic light is not working");
}

let str="apple";
if(str[0] === 'a'&& str.length > 3){
    console.log("good string");
}else{
    console.log("not a good string");
}

let color1="red";
switch(color1){
    case "red":
       console.log("stop");
       break;
    case "yellow":
        console.log("sloe");
        break;
    default:
        console.log("broke like");


}

alert("something is wrong")
console.error("this is an error")

let name=prompt("enter your name: ");
console.log(name);