//singleton--made byy constructor not literal
//object literal


const jsuser={
    name: "Sapna" ,   //key:Value
    age: 18,
    location: "jaipur",
    friends: ["sonu", "monu"]
}
console.log(jsuser.name);
console.log(jsuser["location"]);
console.log(jsuser);

//const tinderUser = new Object() //singlton object
const tinderUser ={}  //non-singleton object

tinderUser.id="123abc"
tinderUser.name ="sam"
console.log(tinderUser);

const regular={
    email: "Sonal@w910",
    fullname:{
        userfulname:{
            firstname: "saona",
            lastname:"tiwari"
        }

    }
}
console.log(regular.fullname?.userfulname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3 = Object.assign(obj1,obj2)
const obj3={...obj1, ...obj2} //sprade
console.log(obj3)


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course = {
    coursename: "js",
    price: "990"
}
//course.coursename
const {coursename} =course
console.log(coursename);


const navbar =({company}) =>{

}
navbar (company = "Sapamnaa")


// {
//     "namee": "baby",
//     "placee": "jaipurr"
// }
[
    {},
    {}
]