//Immediately Invoked Function Expressions
//()() - function is defined and immediately invoked

// Basic IIFE
(function () {
  console.log("IIFE executed immediately!");
})();

// IIFE with parameters
(function (name, version) {
  console.log(`Welcome to ${name} v${version}`);
})("MyApp", "1.0.0");

// IIFE returning a value
const result = (function (x, y) {
  return x * y + 10;
})(5, 3);
console.log(result); // 25

// IIFE for module pattern
const MyModule = (function () {
  let privateVariable = 0;
  let privateArray = [];
  function privateFunction() {
    console.log("This is private");
  }
  return {
    publicMethod: function () {
      privateVariable++;
      privateFunction();
      console.log("Public method called", privateArray);
      return privateVariable;
    },
    addItem: function (item) {
      privateArray.push(item);
    },
    getItems: function () {
      return [...privateArray]; // Return copy, not reference
    },
    reset: function () {
      privateVariable = 0;
      privateArray = [];
    },
  };
})();
console.log(MyModule.publicMethod());
MyModule.addItem("apple");
MyModule.addItem("banana");
console.log(MyModule.getItems());

// IIFE for configuration
const AppConfig = (function () {
  const environment = "development";
  const apiUrl =
    environment === "development"
      ? "http://localhost:3000/api"
      : "https://api.myapp.com";
  const config = {
    api: {
      baseUrl: apiUrl,
      timeout: 5000,
    },
    features: {
      enableLogging: environment === "development",
      enableAnalytics: environment === "production",
    },
  };
  return Object.freeze(config); // Make config immutable
})();
console.log(AppConfig.api.baseUrl);