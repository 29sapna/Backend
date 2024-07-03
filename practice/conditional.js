//if else
var result=50;
if(result > 40)
console.log("Congratulation you passed.")
else
console.log("Unfortunately you did not pass.")

//else if
var place ='first';
if(place == 'first'){
    console.log("gold")
}
else if(place == 'second')
console.log("silver")
else if(place == 'third')
console.log('Bronze')
else{
    console.log("no medal")
}

//if else with switch case
switch(place){
    case 'first':
        console.log("gold");
        break;
    case 'second':
        console.log("silver")
        break;
    case 'third':
        console.log("bronze")
        break;
    default:
        console.log('no medal')
        break;

}
//for loop
for(var i=0; i<5; i++){
    console.log(i);
}
console.log("go!!")
//while loop
var i =1;

while(i<5){
    console.log(i);
    i=i+1;
}
for(var i=10;i>0;i--){
    console.log(i);
}
console.log("Happy New Year!")

var counter = 3;
while(counter>0){
    console.log(counter);
    counter=counter-1;
}
for(var i=5;i>=1;i--){
    console.log(i);
}
console.log("Counting completed!")

var i=1;
while(i<=5){
    console.log(i);
    i++;
}
console.log("Task completed!")
//nested for loop
for( var i=2023;i<2025;i++){
    console.log(i);
    for(var j=6;j<9;j++){
        console.log(j);
    }
}
var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
//function
function addno(a,b){
    var c=a+b;
    console.log(c);
}
addno(2,2);
//array
var train1= ["wheat", "rice", "potato","salt"];
console.log(train1[0]);

function listArrayItems(arr){
    for(var i=0; i< arr.length;i++){
        console.log(arr[i])

    }

}
//object literals and dot notation
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
console.log(assistantManager)

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);
console.log(table.color);

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house); 
house.windows = 10;
console.log(house);

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}