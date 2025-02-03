const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First filter the even numbers, then double them
// Write your code below:

// Create an array called numbers with the values [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Use the filter function to get only the even numbers.
// Use the map function to double each of the even numbers.
// Log the resulting array to the console.
// Hint: First use filter to get the even numbers, and then use map to multiply each of them by 2.

const evenNumbers = numbers.filter(num => num % 2 === 0); // filters out all numbers that are divisible by two.
const doubleNumbers = evenNumbers.map(num => num * 2); // this will double each number.

console.log(doubleNumbers);