const coding =["js", "ruby", "java", "python"]
const values = coding.forEach( (item) => {
    console.log(item);
    return item

})
console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9]
const newNums = myNums.filter( (num) =>{
     return num>4
})
console.log(newNums)

const myNumss = [1,2,3,4,5,6,7,8,9]
// const newNumes = myNumss.map( (num) => num + 10)
// console.log(newNumes); 

const newNumes = myNumss
                 .map( (num) => num * 10)
                 .map( (num) => num + 1)
                 .filter( (num) => num >=40)
console.log(newNumes); 

const arr =[1, 2, 3, 4]

const mytotal = arr.reduce(function (acc, currval){
    return acc + currval
}, 0)
console.log(mytotal);

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);
 