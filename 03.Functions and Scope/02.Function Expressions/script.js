const greet = function(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
// Named function expression (useful for debugging)
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // Can reference itself by name
};
console.log(factorial(5)); // 120
// Function expression with complex logic
const processOrder = function(order) {
     const tax = 0.08;
     const shipping = order.total > 50 ? 0 : 9.99;
     return {
        ...order,
        tax:order.total * tax,
        shipping: shipping,
        finalTotal: order.total + (order.total * tax) + shipping
     };
};
const order = { id: 1,items: ["laptop"], total:999.00 };
console.log(processOrder(order));


// Conditional function assignment
const isDevelopment = true;
const logger = isDevelopment ? 
    function(message) { console.log(`[DEV] ${message}`); } :
    function(message) { /* Do nothing in production */ };

logger("Application started"); // [DEV] Application started

// Function expression in object
const mathUtils = {
    square: function(x) {
        return x * x;
    },
    cube: function(x) {
        return x * x * x;
    },
    power: function(base, exponent) {
        return Math.pow(base, exponent);
    }
};
console.log(mathUtils.square(4)); // 16
console.log(mathUtils.cube(3)); // 27
console.log(mathUtils.power(2, 5)); // 32







