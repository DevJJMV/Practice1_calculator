"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

// We have to import prompt-sync library using the correct configuration for TypeScript
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true }); 

// Function to get a valid number from the user
function getNumberInput(promptText) {
    let input = prompt(promptText);
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

// Get the operation option from the user
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
        }
        else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    case 5: // Modulus
        if (num2 !== 0) {
            console.log(`Result: ${Math.floor(num1)} % ${Math.floor(num2)} = ${Math.floor(num1) % Math.floor(num2)}`);
        }
        else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    case 6: // Square root
        if (num1 >= 0) {
            console.log(`Result: The square root of ${num1} is ${Math.sqrt(num1)}`);
        }
        else {
            console.log("Error: Cannot calculate the square root of a negative number.");
        }
        break;
    default:
        console.log("Invalid option.");
        break;
}
