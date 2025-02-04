// a callback function is a function that is passed as an argument to another function, The callback function is executed inside the other function. -->
// function processData(number, callback) {
//    let result = number + 5; // process the number
//    callback(result); // call the callback function with the result.
// }

// function logResult(result) {
//    console.log('Process Result: ' + result);
// }

// processData(5, logResult); // logResult is our callback function | Output: 10; because we logged 5 and then the callback ran the code again, adding another 5, making it 10.




// <!-- Arrow functions: Writing Cleaner Functions -->

// function double(number) { // Regular Function
//    return double * 2;
// }
// console.log(double(5)); // number times two will multiply two by five; Output: 10.

// const double = (number) => number * 2; // Arrow Function
// console.log(double(5));




// <!-- Higher-order functions are functions that take other functions as arguments or return functions as output. -->

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // 2, 4, 6, 8

// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens); // Output: 2, 4

// numbers.forEach((num) => console.log(num)); // .forEach is a built-in method.




// <!-- Timing functions in JavaScript are used to delay or repeat actions -->

// setTimout(() => { // will call the function after a set amount of time.
//    console.log('This message is shown after three seconds');
// }, 3000); // time will always be in milliseconds. // Takes two arguments; the function and time.

// setInterval(() => {
//    console.log('This message is shown every two seconds');
// }, 5000); // repeats the function over a set amount of time.