// Create a function; requestData that will:
    // log "Requesting Data..." to the console.
    // Simulates a delay using setTimeout(two seconds).
// Create a function; displayData that logs "Displaying Data..." to the console when called.
// Call requestData, passing displayData as the callback.

function requestData(callback){
    console.log("Requesting Data...");
    setTimeout(callback, 2000);
}

function displayData() {
    console.log("Displaying Data!");
}

requestData(displayData);