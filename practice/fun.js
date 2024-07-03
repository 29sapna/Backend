// var shoes=100
// var tie=1.1
// function totalPrice(price, tie){
//     return price * tie;
// }
// var topay =totalPrice(shoes, tie);

// var currencyOne = 100;
// var currencyTwo=0;
// var exchangeRate = 1.2;

// function convertCurrency(amount, rate){
//     return amount*rate;

// }
// currencyTwo = convertCurrency(currencyOne, exchangeRate)

let counter =3;
function example(){
    console.log(counter)
    counter = counter - 1;
    if( counter === 0) return;
    example();
}

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy)

let user;
console.log(user)
