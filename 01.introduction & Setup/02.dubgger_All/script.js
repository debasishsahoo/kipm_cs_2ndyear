function calculateTotal(price, tax) {
    debugger;
    const total= price + (price * tax);
    return total;
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const result = calculateTotal(100, 0.15);
    console.log(`Total Price with Tax: $${result}`);
});