let isLoggedIn = true;
let hasPermission = false;
let age = 25;

// AND (&&) - both must be true
console.log(isLoggedIn && hasPermission);  // false
console.log(isLoggedIn && age > 18);       // true

// OR (||) - at least one must be true
console.log(isLoggedIn || hasPermission);  // true
console.log(false || false);               // false

// NOT (!) - flips the boolean
console.log(!isLoggedIn);     // false
console.log(!hasPermission);  // true
console.log(!!age);           // true (double negation converts to boolean)

// Combining multiple operators
let canAccess = isLoggedIn && (hasPermission || age > 18);
console.log(canAccess);  // true

