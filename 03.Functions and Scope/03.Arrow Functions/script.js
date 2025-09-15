const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// Single parameter (parentheses optional)
const double = x => x * 2;
console.log(double(5)); // 10

// No parameters
const getRandom = () => Math.random();
console.log(getRandom()); // Random number

// Multiple statements (need curly braces and return)
const processName = name => {
    const trimmed = name.trim();
    const capitalized = trimmed.
    charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    return capitalized;
};

console.log(processName("  jOHN  ")); // "John"

// Arrow function returning object (wrap in parentheses)
const createPoint = (x, y) => ({x, y});
console.log(createPoint(3, 4));  // {x: 3, y: 4}

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);







