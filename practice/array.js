//arr are resizable
//1.shallow copy
//2.deep copy

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["sapna", "sonal"]
console.log(myArr[0])

//arr methods
myArr.push(6)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

//slice, splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("S", myArr);


const myn2 = myArr.splice()
console.log(myn2);


const marvel = ["sapna", "saonal", "shau"]
const dc = ["super", "osm", " csa"]

// marvel.push(dc)
// console.log(marvel[3][1]);

// const bs = marvel.concat(dc);
// console.log(bs);

const bsc =[...marvel, ...dc]   
console.log(bsc);

const another =[1,2,3,4,5,[1,2,3],7,[2,4,6]]
const real=another.flat(Infinity)
console.log(real);

console.log(Array.isArray("sapna"));
console.log(Array.from("sapna"));
console.log(Array.from({name:"sapna"}));

let score1 =100
let score2 =200
console.log(Array.of(score1,score2))

