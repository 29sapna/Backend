var shoes=100
var tax=1.2

function total(shoes,tax){
    return shoes * tax
}

var topay =total(shoes, tax)
console.log(topay)

var purch1 = {
    soe:100,
    boe:1.2, 
    totalPrice: function(){
        var cal=purch1.soe * purch1.boe;
        console.log('totalp:' , cal);
    }
}
purch1.totalPrice();

var purch1 = {
    soe:100,
    boe:1.2, 
    totalPrice: function(){
        var cal=this.soe * this.boe;
        console.log('totalp:' , cal);
    }
}
purch1.totalPrice();

var bird={
    haswings: true,
    canfly: true,
    hasfeathers: true
}
var eagle1 =object.create(bird);
console.log("eagle1:", eagle1)

console.log("eagle1 has wings:", eagle1.haswings)

var eagle2 =object.create(bird);
console.log("eagle2:", eagle2)

console.log("eagle1 has wings:", eagle1.haswings)