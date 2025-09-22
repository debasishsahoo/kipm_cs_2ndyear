//forEach() is an array method that executes a provided function 
// once for each array element.
//It is not a loop, but an iterator method for arrays.
//It does not return a new array; it returns undefined.


//array.forEach(function(currentValue,index){});
//array.forEach((currentValue,index)=>{});
let fruits = ['Apple', 'Banana', 'Mango'];
fruits.forEach(function(fruit, i) {
    console.log(i + ': ' + fruit);
});
//Using Arrow Function
fruits.forEach((fruit) => console.log(fruit));

//Points;
//forEach() cannot be broken
//fruits.forEach(fruit => {if (fruit === 'Banana') break;});
//Correction: Use for or for...of if you need break/continue.
//forEach() does not return a new array
let numbers = [1, 2, 3];
let result = numbers.forEach(n => n * 2);
console.log(result); 
//Correction: Use map() to create a new array.
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
//forEach() works only on arrays
let obj = { a: 1, b: 2 };
obj.forEach(n=>n*2);
//- When you **need to perform side effects** (logging, modifying DOM, etc.) 
// on each array element.
//Not for creating new arrays (use `map`) or
//  breaking early (use `for` or `for...of`).
