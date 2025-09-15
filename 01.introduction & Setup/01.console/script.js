// Basic logging when page loads
console.log("Web App Initialized");

document.getElementById("infoBtn").addEventListener("click", function () {
  console.info("Info button clicked");
});
document.getElementById("warnBtn").addEventListener("click", function () {
  console.warn("Warning button clicked");
});

document.getElementById("errorBtn").addEventListener("click", function () {
  console.error("Error button clicked");
});




document.getElementById('groupBtn').addEventListener('click', () => {
    console.group("User Details");
    console.log("Name: John Doe");
    console.log("Age: 30");
    console.log("Email: john@example.com");
    console.groupEnd();
});

// Button: Measure Execution Time
document.getElementById('timerBtn').addEventListener('click', () => {
    console.time("Loop Timer");
    for (let i = 0; i < 1e7; i++) {}  // Simulated heavy task
    console.timeEnd("Loop Timer");
});

// Button: Show Table Data
document.getElementById('tableBtn').addEventListener('click', () => {
    const users = [
        { name: "Alice", age: 25, role: "Developer" },
        { name: "Bob", age: 30, role: "Designer" },
        { name: "Charlie", age: 35, role: "Manager" }
    ];
    console.table(users);
});

// Button: Clear Console
document.getElementById('clearBtn').addEventListener('click', () => {
    console.clear();
    console.log("Console cleared!");
});