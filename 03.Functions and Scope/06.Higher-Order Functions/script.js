// Function that takes another function as argument
function withLogging(fn, functionName) {
  return function (...args) {
    console.log(`Calling function ${functionName} with arguments:`, args);
    const result = fn(...args);
    console.log(`Function ${functionName} returned:`, result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add, "add");
console.log(loggedAdd(5, 3));

// Function that returns a function
function createMultiplier(factor) {
  return function (x) {
    return x * factor;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));
console.log(triple(5));
console.log(quadruple(5));

//Validator
function createValidator(rules) {
  return function (data) {
    const errors = [];
    for (const field in rules) {
      const value = data[field];
      const rule = rules[field];
      if (rule.required && (value === undefined || value === "")) {
        errors.push(`${field} is required`);
      }
      if (rule.minLength && value && value.length < rule.minLength) {
        errors.push(`${field} must be at least ${rule.minLength} characters`);
      }
      if (rule.pattern && value && !rule.pattern.test(value)) {
        errors.push(`${field} format is invalid`);
      }
    }
    return {
      isValid: errors.length === 0,
      errors: errors,
    };
  };
}

const validateUser = createValidator({
  name: { required: true, minLength: 2 },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  age: { required: true },
});

console.log(
  validateUser({
    name: "John",
    email: "john@example.com",
    age: 25,
  })
); // {isValid: true, errors: []}

console.log(
  validateUser({
    name: "J",
    email: "invalid-email",
  })
); // {isValid: false, errors: [...]}

// Functional composition
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}
const addTax = price => price * 1.08;
const addShipping = price => price + 9.99;
const formatCurrency = price => `$${price.toFixed(2)}`;
const calculateTotal = compose(formatCurrency, addShipping, addTax);
console.log(calculateTotal(100)); 