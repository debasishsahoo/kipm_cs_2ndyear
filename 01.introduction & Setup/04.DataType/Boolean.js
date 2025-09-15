// Boolean values
const isActive = true;
const isComplete = false;

// Boolean conversion (truthy/falsy values)
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean(NaN));    // false
// Logical operators
const a = true;
const b = false;    
// AND operator
console.log(a && b); // false
// OR operator
console.log(a || b); // true
// NOT operator
console.log(!a);     // false
console.log(!b);     // true

// Combining logical operators
const c = true;
console.log((a && b) || c); // true
console.log(!(a || b) && c); // false

// Conditional statements using booleans
if (isActive) {
    console.log("The system is active.");
} else {
    console.log("The system is inactive.");
}

// Ternary operator
const status = isActive ? "Active" : "Inactive";
console.log(`The system status is: ${status}`); 
const taskStatus = isComplete ? "Complete" : "Incomplete";
console.log(`The task status is: ${taskStatus}`);
// Boolean in functions
function checkAccess(isAdmin) {
    return isAdmin ? "Access granted." : "Access denied.";
}
console.log(checkAccess(true));  // Access granted.
console.log(checkAccess(false));
console.log(checkAccess());
console.log(checkAccess(0));
console.log(checkAccess(1));

// Access denied.
// Summary
// Booleans are essential for controlling the flow of a program through conditional statements and logical operations. Understanding how to work with boolean values is crucial for effective programming in JavaScript.
console.log("End of Boolean data type example.");