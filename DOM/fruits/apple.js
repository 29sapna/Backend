let arr =[1,2,3,4,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);

let num =[1,2,3,4]
let double = num.map((el) => {
    return el * el;

});
let nums =[1,2,3,4]
let even = nums.filter((num) => (num % 2 == 0));
console.log(even);
