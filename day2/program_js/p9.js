function validateAndProcessInput() {
    let userInput = document.getElementById('numberInput').value;
    
    // Regular Expression to check if input is a number between 1 and 5
    let regex = /^[1-5]$/;
    
    // Validate the input
    if (regex.test(userInput)) {
        let numbers = [2, 3, 5, 7, 9];
        let another = [...numbers]; // Create a copy of the numbers array
        
        numbers[2] = 90; // Change 5 to 90 in the numbers array
        
        // Combine the two arrays
        another = [...another, ...numbers];
        
        // Show the result in the console and on the page
        console.log('Updated numbers:', numbers);
        console.log('Combined array:', another);
        
        document.getElementById('output').innerHTML = `Updated numbers: [${numbers}]<br>Combined array: [${another}]`;
    } else {
        // Show error message if input is invalid
        document.getElementById('output').innerHTML = 'Invalid input. Please enter a number between 1 and 5.';
    }
}
