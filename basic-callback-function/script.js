// Create a function; to greetCustomer | logs "Your food is ready!" to console.
// Create a function; logs "Preparing Food" to console.
// Call prepareFood; pass greetCustomer as the callback function.
// *Hint; make sure the greetCustomer function runs only after "Preparing Food" is logged.

function greetCustomer() {
    console.log("Your food is ready!");
}

function prepareFood(callback) {
    console.log("Preparing Food...");
    callback(); // calling the callback function after preparing the food.
}

// call the prepareFood function; pass greetCustomer as callback.
prepareFood(greetCustomer);