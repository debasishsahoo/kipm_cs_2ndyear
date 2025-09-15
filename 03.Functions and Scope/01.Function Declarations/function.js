// Basic function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function with multiple parameters
function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(5, 3)); // 15

// Function with default parameters (ES6)
function createUser(name, age = 18, role = "user") {
  return {
    name: name,
    age: age,
    role: role,
    createdAt: new Date(),
  };
}
console.log(createUser("Bob"));
console.log(createUser("Alice", 25, "admin"));

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20));
console.log(sum()); // 0
// Function with destructured parameters
function displayUser({ name, age, email }) {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}

displayUser({ name: "John", age: 30, email: "john@example.com" });

// Hoisting example
console.log(hoistedFunction()); // "I'm hoisted!"

function hoistedFunction() {
  return "I'm hoisted!";
}
// Function with validation
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Throws error
} catch (error) {
    console.error(error.message);
}