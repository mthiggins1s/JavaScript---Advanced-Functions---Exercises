// Using setInterval to log a message every 4 seconds
// Write your code below:

// Write a function that logs the message "Repeating action!" to the console.
// Use setInterval to repeat this message every 4 seconds (4000 milliseconds).
// Test your code by running it in the browser console or a JavaScript environment.
// Hint: The first argument to setInterval is the function to run, and the second argument is the interval in milliseconds.

// function that logs the message
function logMessage() {
    console.log("Repeating Action!")
}

// Use setInterval to repeat this message every 4 seconds
setInterval(logMessage, 4000);