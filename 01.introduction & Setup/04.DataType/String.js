// Different ways to create strings
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const backticks = `Hello World`;// Template literals

// String concatenation
const greeting = singleQuotes + ' from JavaScript!';

// Template literals (preferred for interpolation)
const firstName = "John";
const lastName = "Doe";
const fullGreeting = `Hello, ${firstName} ${lastName}!`;

// String methods
const text = "JavaScript is awesome";
console.log(text.length);          // Length of the string  
console.log(text.toUpperCase());   // Convert to uppercase
console.log(text.toLowerCase());   // Convert to lowercase
console.log(text.includes("Java")); // Check if substring exists
console.log(text.split(" "));// Split string into an array
console.log(text.slice(0, 10));// Extract substring
console.log(text.replace("awesome", "fun")); // Replace substring
console.log(text.charAt(2)); // Get character at specific index
console.log(text.indexOf("is")); // Find index of substring
console.log(text.trim()); // Remove whitespace from both ends
console.log(text.startsWith("Java")); // Check if string starts with a substring
console.log(text.endsWith("fun")); // Check if string ends with a substring
console.log(text.repeat(2)); // Repeat the string multiple time
console.log(text.concat(" Let's code!")); // Concatenate strings


const tags = "javascript,es6,nodejs";
const tagArray = tags.split(',');
console.log(tagArray);
const newTags = tagArray.join(' ||');
console.log(newTags);







// Multiline strings using template literals
const multilineString = `This is a
multiline string
using template literals.`;