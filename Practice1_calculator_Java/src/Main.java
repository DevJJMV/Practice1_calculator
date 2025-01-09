import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void main(String[] args) {
        // Declare variables to store numbers given by the user.
        double num1, num2;

        //Ask the user both numbers.
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the first number: ");
        num1 = sc.nextDouble();


        System.out.print("Enter the second number: ");
        num2 = sc.nextDouble();

        // Create a list to show the operations.
        System.out.println("Select an operation:");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");
        System.out.println("5. Modulus (Integers only)");
        System.out.println("6. Square Root (applied to first number)");
        System.out.println("7: Power");
        System.out.println("8: Logarithm (Base 10)");
        System.out.println("9: Natural Logarithm");
        System.out.println("10: Average");


        // Read the operation option selected by the user using a Scanner.
        System.out.print("Please, enter your operation: ");
        int option = sc.nextInt();

        // Use a switch statement to handle the different operations based on the user's selection.
        switch (option) {
            case 1: // Addition
                System.out.println("Result: " + num1 + " + " + num2 + " = " + (num1 + num2));
                break;

            case 2: // Subtraction
                System.out.println("Result: " + num1 + " - " + num2 + " = " + (num1 - num2));
                break;

            case 3: // Multiplication
                System.out.println("Result: " + num1 + " * " + num2 + " = " + (num1 * num2));
                break;

            case 4: // Division
                if (num2 != 0) {
                    System.out.println("Result: " + num1 + " / " + num2 + " = " + (num1 / num2));
                } else {
                    System.out.println("Error: Division by zero is not allowed!");
                }
                break;

            case 5: // Modulus (Note: Only integers are valid for modulus)
                if (num2 != 0) {
                    System.out.println("Result: " + (int) num1 + " % " + (int) num2 + " = " + ((int) num1 % (int) num2));
                } else {
                    System.out.println("Error: Division by zero is not allowed!");
                }
                break;

            case 6: // Square Root (only of the first number)
                if (num1 >= 0) {
                    System.out.println("Result: Square root of " + num1 + " = " + Math.sqrt(num1));
                } else {
                    System.out.println("Error: Cannot calculate square root of a negative number!");
                }
                break;

            case 7: // Power
                System.out.println("Result: " + num1 + " raised to " + num2 + " = " + Math.pow(num1, num2));
                break;

            case 8: // Logarithm base 10
                if (num1 > 0) {
                    System.out.println("Result: Logarithm base 10 of " + num1 + " = " + Math.log10(num1));
                } else {
                    System.out.println("Error: Logarithm base 10 is only defined for positive numbers.");
                }
                break;

            case 9: // Natural logarithm
                if (num1 > 0) {
                    System.out.println("Result: Natural logarithm of " + num1 + " = " + Math.log(num1));
                } else {
                    System.out.println("Error: Natural logarithm is only defined for positive numbers.");
                }
                break;

            case 10: // Average
                System.out.println("Result: The average of " + num1 + " and " + num2 + " = " + ((num1 + num2) / 2));
                break;

            default: // Invalid option
                System.out.println("Invalid option selected. Please try again and select a correct operation.");
                break;
        }

        sc.close(); // Close the scanner
    }
}
