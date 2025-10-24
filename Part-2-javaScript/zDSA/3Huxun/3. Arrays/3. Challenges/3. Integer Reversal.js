// 1. Convert number to string (toString method)
// 2. Convert String to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6. Return the number

// const reverseInt = (n) => {
//   const reversed = n.toString().split("").reverse().join("");
//   return parseInt(reversed) * Math.sign(n);
// };
// console.log(reverseInt(-123));
// console.log(reverseInt(483));
// console.log(reverseInt(0));
// console.log(reverseInt(-5));
// console.log(reverseInt(5));
//-----------------------------------------------------------------------------
//parsInt(stirng, radix value) - converts a string into an integer
// value right to left = (digitₙ × radixⁿ) + (digitₙ₋₁ × radixⁿ⁻¹) + ... + (digit₀ × radix⁰)
// (1 × 5⁰ = 1) + (2 × 5¹ = 10) + (3 × 5² = 75)

// console.log(parseInt("123")); // ➝ 123 (number)
// console.log(parseInt("123.45")); // ➝ 123 (it ignores decimal part)
// console.log(parseInt("abc")); // ➝ NaN (not a number)
// console.log(parseInt("1548 years")); // ➝ 100 (stops at first non-digit)
// console.log(parseInt("years 100")); // ➝ NaN (starts with non-digit)
// console.log(parseInt("1010", 2)); // ➝ 10  (binary: 1×2³ + 0×2² + 1×2¹ + 0×2⁰)
// console.log(parseInt("1024", 8)); // ➝ 66  (only "102" is valid octal: 1×8² + 0×8¹ + 2×8⁰)
// console.log(parseInt("488", 10)); // ➝ 488 (decimal as-is)
// console.log(parseInt("185", 16)); // ➝ 389 (hex: 1×16² + 8×16¹ + 5×16⁰)

//-----------------------------------------------------------------------------------------
//Math.sign
// console.log(Math.sign(10));     // 1
// console.log(Math.sign(-20));    // -1
// console.log(Math.sign(0));      // 0
// console.log(Math.sign(-0));     // -0
// console.log(Math.sign(NaN));    // NaN
// console.log(Math.sign("5"));    // 1 (coerced to number)
// console.log(Math.sign("abc"));  // NaN
