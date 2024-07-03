class User{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@qwe", "22345")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

function User(username, email, password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.encryptPassword=function(){
    return `${this.username.toUpperCase()}`
}


const tea =new User("tea", "tea@tyuio","1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());