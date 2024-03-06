
function compareIntegers(num1, num2) {
    if (num1 === num2) {
       document.write("The two integers are equal.");
    } else if (num1 > num2) {
       document.write("The larger integer is: " + num1);
    } else {
       document.write("The larger integer is: " + num2);
    }
}

// Input integers
let integer1 = parseInt(prompt("Enter the first integer: "));
let integer2 = parseInt(prompt("Enter the second integer: "));

// Call the function to compare the integers
compareIntegers(integer1, integer2);
