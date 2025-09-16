// Basic syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

// Can be chained (but use sparingly for readability)
let grade = 85;
let letterGrade = grade >= 90 ? "A" :
                 grade >= 80 ? "B" :
                 grade >= 70 ? "C" :
                 grade >= 60 ? "D" : "F";

console.log(letterGrade);  // "B"

// Nested ternary example
let score = 75;
let result = score >= 60 ? (score >= 90 ? "A" : "B") : "F";
console.log(result);  // "B"

// Using ternary for simple conditional assignments
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(discount);  // 0.1


// Ternary operator can be used in expressions
let x = 10, y = 20;
let max = x > y ? x : y;
console.log(max);  // 20

// Avoid using ternary for complex logic; prefer if-else for clarity
// Example of using ternary in a function
function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));  // "$2.00"
console.log(getFee(false)); // "$10.00"

// Example of using ternary in template literals
let user = { name: "Alice", isAdmin: true };
let greeting = `Hello, ${user.name}. You are ${user.isAdmin ? "an admin" : "a user"}.`;
console.log(greeting);
// "Hello, Alice. You are an admin."  // "Hello, Alice. You are an admin."\

// Example of using ternary in array methods
let numbers = [1, 2, 3, 4, 5];  
let evenOdd = numbers.map(num => num % 2 === 0 ? "even" : "odd");
console.log(evenOdd);  // ["odd", "even", "odd", "even", "odd"]
// Example of using ternary in object properties
let userType = "guest";
let userInfo = {
    name: "Bob",
    accessLevel: userType === "admin" ? "full" : userType === "member" ? "partial" : "none"
};
console.log(userInfo);  // { name: 'Bob', accessLevel: 'none' }
