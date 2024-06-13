// function with two parameters
function calculate(num1, num2) {
    // callback is a function that is passed to another function 
    function operation(num1, num2, callback) {
        // return the callback function with parameters num1 and num2
        return callback(num1, num2);

    }
    // Add function
    function addition(a, b) {
        // return the sum of a and b
        return a + b;
    }
    // Multiply function
    function multiplication(a, b) {
        // return the product of a and b
        return a * b;
    }
    // call the operation function with addition as the callback
    const Addition = operation(num1, num2, addition);
    // call the operation function with multiplication as the callback
    const Multiplication = operation(num1, num2, multiplication);


    console.log(`Addition: ${Addition}`);
    console.log(`Multiplication: ${Multiplication}`);
}
// call the calculate function with arguments 10 and 20
calculate(10, 20);