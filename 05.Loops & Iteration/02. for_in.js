//The for...in loop is used to iterate over 
//enumerable properties (keys) of an object.
//for (let key in object) {
    // Access property using object[key]

let person = {
    name: 'Alice',//key:value
    age: 25,
    country: 'India'
};
console.log(person['age'])
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

//Important Notes (Correctors / Pitfalls)
//Mistake #1: Using for...in with Arrays (Beware!)
let arr = ['Apple', 'Banana', 'Mango'];

for (let index in arr) {
    console.log(index, arr[index]);
}
//Correct Way to Loop Arrays
for (let fruit of arr) {
    console.log(fruit);
}
arr.forEach(fruit => console.log(fruit));
