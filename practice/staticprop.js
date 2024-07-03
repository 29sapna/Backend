class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}
const sapna = new User("sapna")
console.log(sapna.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}
const iphone=  new Teacher("iphone", "I@phone.in")
console.log(iphone.createId());  