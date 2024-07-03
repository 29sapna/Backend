let btn =document.querySelector("button");
// let h3 = document.querySelector("h3");
// let randomColor = getRandomListener();

btn.addEventListener("click", function(){
    //console.log("generate random color");let h3 = document.querySelector("h3");
//let randomColor = getRandomListener();
let h3 = document.querySelector("h3");
let randomColor = getRandomListener();
h3.innerText = randomColor;

let div = document.querySelector("div");
div.style.background = randomColor;

console.log("color updated");


});

function getRandomListener() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color =`rgb(${red}, ${green}, ${blue})`;
    return color;
}
getRandomListener();