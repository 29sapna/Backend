let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2= document.querySelector("h2");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor ="blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);

let inp = document.querySelector("input");
inp.addEventListener("keydown", function(e){
    //console.log("key was pressed");
    console.log("code =", event.code);
});

