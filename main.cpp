#include <iostream> 
#include <cmath> //This library is to use the function sqrt() and more math functions
using namespace std;

int main() {
    //Variables to store numbers given by the user.
    double num1, num2;

    //Ask the user both numbers.
    cout<<"Enter the first number: ";
    cin>>num1;

    cout<<"Enter the second number: ";
    cin>>num2;

    //Create a list to show the operations.
    cout<<"\nSelect an operation:\n ";
    cout<<"1. Addition\n";
    cout<<"2. Subtraction\n";
    cout<<"3. Multiplication\n";
    cout<<"4. Division\n";
    cout<<"5. Modulus (Integers only)\n";
    cout<<"6. Square Root (applied to first number)\n";

    //Now we need to read the user option
    int option;
    cout<<"Please, enter your operation20:\n ";
    cin>>option;

    //To evaluate the option given by the user we'll use a Switch
    switch (option) {
        case 1: // Add
            cout << "Result: " << num1 << " + " << num2 << " = " << (num1 + num2) << endl;
        break;

        case 2: // Sub
            cout << "Result: " << num1 << " - " << num2 << " = " << (num1 - num2) << endl;
        break;

        case 3: // Multiply
            cout << "Result: " << num1 << " * " << num2 << " = " << (num1 * num2) << endl;
        break;

        case 4: // Division
            if (num2 != 0) {
                cout << "Result: " << num1 << " / " << num2 << " = " << (num1 / num2) << endl;
            } else {
                cout << "Error: Division by zero is not allowed!" << endl;
            }
        break;

        case 5: // Modulus
            if (static_cast<int>(num2) != 0) {
                cout << "Result: " << static_cast<int>(num1) << " % " << static_cast<int>(num2)
                     << " = " << (static_cast<int>(num1) % static_cast<int>(num2)) << endl;
            } else {
                cout << "Error: Division by zero is not allowed!" << endl;
            }
        break;

        case 6: // Squart Root
            if (num1 >= 0) {
                cout << "Result: Square root of " << num1 << " = " << sqrt(num1) << endl;
            } else {
                cout << "Error: Cannot calculate square root of a negative number!" << endl;
            }
        break;

        default: // Invalid option
            cout << "Invalid option selected. Please try again and select a correct operation." << endl;
        break;
    }

    return 0;


}