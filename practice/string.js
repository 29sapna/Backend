const name="sapna"
const repoconst =89

console.log(name + repoconst + "value");

console.log(`hello my name is ${name} and my repoconst is ${repoconst}`);

const gamename = new String('Sapna')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('p')); 

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Sapna    "
console.log(newStringOne);
console.log(newStringOne.trim());

const score =400
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 32.5523
console.log(othernumber.toPrecision(3));

const hundred =1000000
console.log(hundred.toLocaleString());


//+++++++++++Maths++++++++++++++++++++
//abs->-ve to +ve only
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.3));
console.log(Math.random());  //val b/w 0 to 1
console.log(Math.random()*10 + 1 );
console.log(Math.floor(Math.random()*10) + 1 );

const min= 10
const max =20

console.log(Math.floor(Math.random()*(max-min+1)+min));

//++++++++Date+++++++
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocalString());
// console.log(typeof myDate);

let myCreateddate = new Date(2020, 0, 23)
console.log(myCreateddate.toDateString());  

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());