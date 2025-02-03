// Regular function
function multiply(a, b) {
    return a * b;
  }
  
  // Now, convert the 'multiply' function to an arrow function below:

  // Create a regular function "multiply" that takes two numbers a and b as parameters and returns their product (a * b).
  // Rewrite the multiply function using an arrow function. It should do the exact same thing but in a more compact syntax.
  // Call both the regular and arrow functions with the numbers 3 and 4; log results.
  // *HINT* Use => to convert the function.

// Rewrite a regular function as an arrow function
const multiplyArrowFunction = (a, b) => a * b;

console.log(multiply(3, 4));
console.log(multiplyArrowFunction(3, 4));