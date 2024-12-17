const greet = function greetFunction() {
    console.log("Hello, World!");
    greetFunction();           // This is valid because greetFunction is visible inside its own scope
};

greet();
// This will call itself recursively, but without a base case, it will cause a stack overflow.
