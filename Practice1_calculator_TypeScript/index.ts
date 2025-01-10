// Import prompt-sync using the correct TypeScript configuration
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true }); 

// Function to obtain a valid number from the user
function getNumberInput(promptText: string): number {
    let input: string = prompt(promptText);
    let number = parseFloat(input);
    while (isNaN(number)) {
        console.log("Error: Please enter a valid number.");
        input = prompt(promptText);
        number = parseFloat(input);
    }
    return number;
}

// Request two numbers given by the user
const num1 = getNumberInput("Enter the first number: ");
const num2 = getNumberInput("Enter the second number: ");

// Display available operations
console.log("\nSelect an operation:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus (integers only)");
console.log("6. Square root (applied to the first number)");

// Obtain the operation option from the user
let option = parseInt(prompt("Please select your operation: "));
while (isNaN(option) || option < 1 || option > 6) {
    console.log("Error: Please select a valid option between 1 and 6.");
    option = parseInt(prompt("Please select your operation: "));
}

// Perform the selected operation
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
            console.log("Error: Division by zero is not allowed.");
        }
        break;

    case 5: // Modulus
        if (num2 !== 0) {
            console.log(`Result: ${Math.floor(num1)} % ${Math.floor(num2)} = ${Math.floor(num1) % Math.floor(num2)}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;

    case 6: // Square root
        if (num1 >= 0) {
            console.log(`Result: The square root of ${num1} is ${Math.sqrt(num1)}`);
        } else {
            console.log("Error: Cannot calculate the square root of a negative number.");
        }
        break;

    case 7: // Power
        console.log(`Result: ${num1} raised to ${num2} = ${Math.pow(num1, num2)}`);
        break;

    case 8: // Logarithm base 10
        if (num1 > 0) {
            console.log(`Result: Logarithm base 10 of ${num1} = ${Math.log10(num1)}`);
        } else {
            console.log("Error: Logarithm base 10 is only defined for positive numbers.");
        }
        break;

    case 9: // Natural logarithm
        if (num1 > 0) {
            console.log(`Result: Natural logarithm of ${num1} = ${Math.log(num1)}`);
        } else {
            console.log("Error: Natural logarithm is only defined for positive numbers.");
        }
        break;

    case 10: // Average
        console.log(`Result: The average of ${num1} and ${num2} = ${(num1 + num2) / 2}`);
        break;

    default:
        console.log("Invalid option.");
        break;
}
