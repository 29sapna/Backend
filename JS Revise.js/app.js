h1 = document.querySelector("h1");

function changeColor(color , delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1000, ()=> {
    changeColor("orange", 1000, () =>{
        changeColor("green", 2000);
    });
});

//callback nesting->callback hell
// changeColor("green", 2000);
// changeColor("purple", 3000);

// setTimeout(() =>{
//     h1.style.color ="red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color ="orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color ="green";
// }, 3000);
