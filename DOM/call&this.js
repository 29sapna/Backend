function SetUsername(username){
    this.username= username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email=email
    this.password = password
}

const chai=new createUser("chai","chai@iop","1223")
;console.log(chai);