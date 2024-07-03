let btns =document.querySelectorAll("button");
//console.log(btn);
for(btn of btns){
    // btn.onclick = sayHello;//no need to add paranthesis
    // btn.onmouseenter =function(){
    //     console.log("u enterd!");
    // };
    // console.log(btn);
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("db me");
    });


}

// btn.onclick = function(){
//     alert("button was clicked");
// };
function sayHello(){
    alert("Hello!");
}

function sayName(){
    alert("ello!");
}
