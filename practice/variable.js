const accountId= 123
let name=" Sapna "
var height=1234688

name="Sonal"
height=1234567890
console.log(accountId);
console.log(name);
console.log(height);

// don't use var b/c of issue in block scope & function scope{}

console.table([accountId, name, height]);

/*DATA-TYPE*/
/* number=> 2 to power 53
bigint
string =>""
boolean =>T/F
null=>Standlone vale(empty value)
undefined=>
symbol=>unique
*/
console.log(typeof undefined);//undefined
console.log(typeof null);//object

// Converstioon
let score ="hitesh"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//NaN---Not a number

//"33"=>33
//"33abc" =>NaN
//true=>1; False=>0


//**************operation**************
let value =3
let negval = -value
console.log(negval);
console.log("1" + 2 + 2); //string pehle h tho sabko string treat kate h
let gameCounter=100;
gameCounter++;
console.log(gameCounter);


//===  strict check it check value as weell as datatype
console.log("2" === 2);

