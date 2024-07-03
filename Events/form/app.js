let form = document.querySelector("form");
form.addEventListener("submit", function(e){
    event.preventDefault();

    let inp=document.querySelector("input");  //or let user = this.element[0];
    let user=document.querySelector("#user");
    // console.log(inp);
    // console.log(inp.innerText);
    // console.log(inp.value);
    console.log(user.value);
    alert(`Hi ${user.value}`)
    //alert("from submitted");
});

user.addEventListener("change", function(){
    console.log(" change event");
    console.log("Final value = ", this.value);
});


user.addEventListener("input", function(){
    console.log("input event");
    console.log("Final value = ", this.value);
});