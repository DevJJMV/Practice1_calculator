//Using javascript we don't have to create a project, with just an Index.js file and NPM dependences 
//we may develop the logic of the calculator

//First we have to declare the variables
let num1, num2;

// Function to get user input 
const prompt = require('prompt-sync')();

// Ask both numbers to user.
num1 = parseFloat(prompt("Enter the first number: "));
num2 = parseFloat(prompt("Enter the second number: "));

// Display the available operations.
console.log("\nSelect an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus (Integers only)");
console.log("6. Square Root (applied to first number)");

// Read the operation option selected by the user.
let option = parseInt(prompt("Please, enter your operation: "));

// Use a switch statement to handle the different operations based on the user's selection.
switch (option) {
    case 1: // Addition
        console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
        break;

    case 2: // Subtraction
        console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
        break;

    case 3: // Multiplication
        console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
        break;

    case 4: // Division
        if (num2 !== 0) {
            console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Error: Division by zero is not allowed!");
        }
        break;

    case 5: // Modulus 
        if (num2 !== 0) {
            console.log(`Result: ${Math.floor(num1)} % ${Math.floor(num2)} = ${Math.floor(num1) % Math.floor(num2)}`);
        } else {
            console.log("Error: Division by zero is not allowed!");
        }
        break;

    case 6: // Square Root 
        if (num1 >= 0) {
            console.log(`Result: Square root of ${num1} = ${Math.sqrt(num1)}`);
        } else {
            console.log("Error: Cannot calculate square root of a negative number!");
        }
        break;
    case 7: // Power
        console.log('Result: ${ num1 } raised to ${ num2 } = ${ Math.pow(num1, num2) }');
        break;

    case 8: // Logarithm base 10
        if (num1 > 0) {
            console.log('Result: Logarithm base 10 of ${ num1 } = ${ Math.log10(num1) }');
        } else {
            console.log("Error: Logarithm base 10 is only defined for positive numbers.");
        }
        break;

    case 9: // Natural logarithm
        if (num1 > 0) {
            console.log('Result: Natural logarithm of ${ num1 } = ${ Math.log(num1) }');
        } else {
            console.log("Error: Natural logarithm is only defined for positive numbers.");
        }
        break;

    case 10: // Average
        console.log('Result: The average of ${ num1 } and ${ num2 } = ${(num1 + num2) / 2}');
break;

    default: // Invalid option
console.log("Invalid option selected. Please try again and select a correct operation.");
break;
}
