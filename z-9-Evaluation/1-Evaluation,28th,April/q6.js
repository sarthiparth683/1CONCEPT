// Ensure that the function takes a single parameter representing the number to be checked.
// The function should return true if the number is prime and false otherwise.
function prime(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            count = count + 1;
    }
    if (count > 0) {
        console.log("false")
    } else {
        console.log("true")
    }
};
prime(13);