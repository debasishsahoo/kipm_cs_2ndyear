//map() is an array method that creates a
// new array by applying a function to each element of the original array.
//unlike forEach(), map() returns a new array without 
//modifying the original array 
//(unless the function modifies the elements themselves).

// let newArray = array.map(function(currentValue, index) {
    // Return the new value
// });
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); 
console.log(numbers); 

let squared = numbers.map(num => num * num);
console.log(squared);

//Always returns a new array
let arr = [1, 2, 3];
let result = arr.map(n => n + 1);
// console.log(result);
// console.log(arr); 

arr.map(n => console.log(n));
result = arr.map(n => { n * 2; });
console.log(result);

result = arr.map(n => n * 2);
console.log(result); 