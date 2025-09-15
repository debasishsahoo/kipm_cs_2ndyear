// Function that takes another function as argument
function withLogging(fn, functionName) {
    return function(...args){
        console.log(`Calling function ${functionName} with arguments:`, args);
         const result = fn(...args);
        console.log(`Function ${functionName} returned:`, result);
        return result;
    };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add, 'add');
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