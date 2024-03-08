var num1=+prompt('Enter first integer: ')
var num2=+prompt('Enter second integer: ')

    if (num1 === num2) {
       document.write('The two integers are equal.');
    } else if (num1 > num2) {
       document.write("The larger integer is: " + num1);
    } else {
       document.write("The larger integer is: " + num2);
    }

