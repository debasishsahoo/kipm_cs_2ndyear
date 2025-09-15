function mainFunction(callback) {
    // Do some operation
    callback(); // Execute the callback function
}
function myCallback() {
    console.log("Callback function executed!");
}
mainFunction(myCallback); // Pass the function as an argument


const numbers = [1, 2, 3, 4, 5];
// forEach with callback
numbers.forEach(function(number) {
    console.log(number * 2);
});
button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);
