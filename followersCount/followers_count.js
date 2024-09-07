let count = 0; // initialize count to 0

// Function to incrementing count
function increaseCount() {
    count++; // this will be add counting by 1 every call.
    displayCount(); // Display count here
    checkCountValue(); // check count value and display message.
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display count value on HTML page under id "displayCount"
}

function checkCountValue(){
    if (count === 10) {
        alert("Your IG post gained 10 follower! Congratulations!");
    } else if (count === 20) {
        alert("Your IG post gained 20 followers! Keep it up!")
    }
}
