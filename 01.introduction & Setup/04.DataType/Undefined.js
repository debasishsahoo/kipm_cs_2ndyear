// Variables declared but not initialized
let a;
console.log(a); // Output: undefined
console.log(typeof a); // Output: "undefined"

// Function without return statement
function noReturn() {}
console.log(noReturn()); // Output: undefined
console.log(typeof noReturn()); // Output: "undefined"

// Accessing non-existent object properties
const obj = {};
console.log(obj.nonExistentProp); // Output: undefined
console.log(typeof obj.nonExistentProp); // Output: "undefined"

// Accessing out-of-bounds array elements
const arr = [1, 2, 3];
console.log(arr[5]); // Output: undefined
console.log(typeof arr[5]); // Output: "undefined"





// Function parameters not provided
function greet(name) {
    console.log(`Hello, ${name}`);
}       

greet(); // Output: Hello, undefined
console.log(typeof greet()); // Output: "undefined"

// Explicitly setting a variable to undefined
let b = undefined;
console.log(b); // Output: undefined
console.log(typeof b); // Output: "undefined"

// Checking for undefined
if (a === undefined) {
    console.log("Variable 'a' is undefined");
}
if (typeof obj.nonExistentProp === "undefined") {
    console.log("Property 'nonExistentProp' is undefined");
}
if (typeof arr[5] === "undefined") {
    console.log("Array element at index 5 is undefined");
}


// Summary
// The undefined data type in JavaScript indicates the absence of a value. It is commonly encountered with uninitialized variables, missing function parameters, and non-existent object properties. Understanding how to work with undefined is crucial for effective error handling and debugging in JavaScript.
