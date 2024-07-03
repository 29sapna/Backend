const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
console.log(Math.PI);
Math.PI =5
console.log(Math.PI);   

const chai ={
    name: 'ginger chai',
    price:789,
    IsAvailable: true

}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key, value]  of Object.entries (chai)) {
    console.log(`${key} : ${value}`);
    
}