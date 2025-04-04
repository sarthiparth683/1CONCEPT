// difference between for in and for of loop


let a = [10, 20, 30];

for (let num in a) { // in index
    console.log(num); // Output: "0", "1", "2" (indexes)
}

for (let num of a) { // of value
    console.log(num); // Output: 10, 20, 30 (values)
}
