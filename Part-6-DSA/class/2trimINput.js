let line = input.trim().split("\n");
let [n, arr] = line;
arr = line[1].trim().split(" ").map(Number); // split converts "string" into "array"
let string = arr.split("").join(""); // arr into string
let revStr = arr.split("").reverse().join(""); // arr into reverse string
