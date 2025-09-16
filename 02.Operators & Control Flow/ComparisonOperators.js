let x = 5;
let y = "5";

// Equality (loose - type coercion)
console.log(x == y);   // true (5 == "5")
console.log(x != y);   // false

// Strict equality (no type coercion)
console.log(x === y);  // false (number !== string)
console.log(x !== y);  // true

// Relational operators
console.log(x > 3);    // true
console.log(x < 10);   // true
console.log(x >= 5);   // true
console.log(x <= 4);   // false
console.log(x > y);    // false (5 is not greater than 5)
console.log(x < y);    // false (5 is not less than 5)


