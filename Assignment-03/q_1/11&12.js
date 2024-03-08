function checkCharType(char) {
    // Convert the character to its ASCII value
    let charCode = char.charCodeAt(0);

    // Check if the input is a number
    if (!isNaN(parseInt(char))) {
       document.write(char + " is a number.");
    }
    // Check if the input is an uppercase letter
    else if (charCode >= 65 && charCode <= 90) {
       document.write(char + " is an uppercase letter.");
    }
    // Check if the input is a lowercase letter
    else if (charCode >= 97 && charCode <= 122) {
       document.write(char + " is a lowercase letter.");
    }
    else {
       document.write(char + " is not a number or letter.");
    }
}

// Input character
let inputChar = prompt("Enter a character: ");

// Call the function to check the character type
checkCharType(inputChar);
