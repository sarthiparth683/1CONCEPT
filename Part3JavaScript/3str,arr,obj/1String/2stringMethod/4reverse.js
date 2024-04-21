function reverseString(str) {
    return str.split('').reverse().join('');
}

let str1 = "Hello World!";
let str2 = "Parth Sarthi";
console.log(reverseString(str1));  // !dlroW olleH
console.log(reverseString(str2));  // ihtraS htraP
