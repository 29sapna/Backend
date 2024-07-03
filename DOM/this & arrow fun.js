const user ={
    username: "sapna",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this=current context ko refer karta h
        console.log(this);
    }
}

user.welcomeMessage()
user.username ="sonal"
user.welcomeMessage()

console.log(this);

const chai=()=>{  // arrow function
    let username ="sapna"
    console.log(this.username);//function ka andar hm this ko nahi use kar sakte only in object
}
//chai()

const addtwo =(num1, num2)=>{
    return num1 + num2
}
//this is also run by implict return in one line
const addtwoo =(num1, num2)=>num1 + num2

console.log(addtwo(3,4))

//Immediatly invoked function Expression (IIfe). global  polluton se bachne k liye use karte h 

(function chai(){  //named iife
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`Db connected two ${name}`);
} )(`sapna`)

const student ={
    name: "aman",
    marks: 56,
    prop: this, //global scope
    getname: function(){
        console.log(this);
        return this.name;
    },
    getmarks: () => {
        console.log(this); //parent scope
        return this.name;
    }
};