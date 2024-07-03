//iteration --for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for(let j =1; j<= 10; j++){
        console.log(i + '*' + j + '=' + i*j);
    }
    
    
} 
let myArray =["sapna", "sonal", "shalu", "nandu"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
}

//break & continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
       // break
       continue
    }
    console.log(`Value of i is ${index}`);
    
}

//while loop
let index=0
while( index<=10){
    console.log(`Value of index is ${index}`);
    index= index+2

}
let myArrayy =["flashman", "batman", "superman"]
let arr =0
while(arr < myArrayy.length){
    console.log(`value is ${myArrayy[arr]}`);
    arr= arr +1
}

//do while -pehle kam phie condition check
let score = 11
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);

//for of

const ar = [1,2,3,4,5]
for(const num of ar){
    console.log(num);

}


const greet = "helloworld"
for (const greets of greet){
    console.log(`Each char is ${greet}`);
}

//Map ->object hold key value pair(unique value)
const map =new Map()
map.set('IN', "India")
map.set('USA', 'United state of america')
map.set('Fr', "France")

console.log(map);

for (const [key, Value] of map){
    console.log(key, ':-', Value);
}

const myobject ={
    'game1': 'NFs',
    'game2': 'Spiderman'
}

const myObject ={
    js:" javascript",
    cpp: "c++"
}
for (const key in myObject) {
    console.log(myObject[key]);
    
}

const coding =["js", "ruby", "cpp"]
coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (val) =>{
    console.log(val);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

const mycoding ={
    languagename: "ja",
    languagefilename: "app"
}
