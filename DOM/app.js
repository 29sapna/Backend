const max = prompt("enter the max no.");

const random =Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the no.");

while(true) {
    if(guess == "quit" ){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! congrate!");
        break;
    }else{
        guess =prompt("your guess was wrong. please try again");
    }
}