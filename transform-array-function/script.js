// Add 5 to the start of the array
// Remove the last element
// Create and return a new array where each value is incremented by 1

function transformArray(nums) {
    nums.unshift(5); // this adds 5 to the start of the array.
    nums.pop(); // removes the last element; leave brackets empty.

    const incrementedArray = []; // this will create a new array.
    for (let i = 0; i < nums.length; i++) {
        incrementedArray.push(nums[i] + 1); // this will add an increment of one to each value.
    }
    return incrementedArray; // return the new array.
}
    console.log(transformArray([10, 20, 30])); // Expected output: [6, 11, 21]