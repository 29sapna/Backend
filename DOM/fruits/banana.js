function sum(...args){
    for(let i=0; i< args.length; i++)
        console.log("you gave us: ", args[i]);

}
sum(1,2);

const student ={
    name: "Sapna",
    age: 12,
    class: 9,
    username: "sapnatiwari",
    password: "1234"
};

let {username, password} = student;
console.log(username);


let p1 = document.createElement('p');
p1.innerText ="hey! buddyyy";
document.querySelector("body").append(p1);

p1.classList.add("red");

let div = document.createElement("div");
let p1 =document.createElement("p1");

div.append(h1);
