//The for...of loop is used to iterate over iterable objects 
// such as arrays, strings, maps, sets, and more. 
// It iterates over values, not keys.

//for (let value of iterable) {
    // Use value
//}
//with Array
let fruits = ['Apple', 'Banana', 'Mango'];
for (let fruit of fruits) {
    console.log(fruit);
}
let name = 'Debasish';
for (let char of name) {
    console.log(char);
}
let numbers = new Set([10, 20, 30]);

for (let num of numbers) {
    console.log(num);
}

//Common Issues and Correct Usage
let obj = { name: 'Alice', age: 25 };

for (let value of obj) {
    console.log(value);
}
