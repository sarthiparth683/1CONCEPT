// Problem 1: Create a function to check if a number is Prime or Not

function isPrime(num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++;
        }
    }


    if (count == 2) { 
        return "yes, It is prime number";
    }
    else {
        return "not a prime number";
    }

}

var result = isPrime(5);
console.log(result);