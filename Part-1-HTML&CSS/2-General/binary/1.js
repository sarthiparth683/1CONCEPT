// Introduction to Binary Language

// expand_less
// Binary language is foundational to understanding how computers operate. It uses only two symbols, 0 and 1, to represent data. These symbols are known as bits, which are the smallest unit of data in computing. Binary is used for all levels of computer operations, from executing simple instructions to complex programming.

// Example

// Decimal 5 in binary is 101.
//--------------------------------------------------------------------
// Converting Decimal to Binary

// expand_less
// The process of converting from decimal (base 10) to binary (base 2) involves dividing the decimal number by 2 repeatedly until you reach 0, and then noting the remainder (either 0 or 1) in reverse order. This method helps in understanding how numerical values are stored and processed in computers.

// Example

let decimalNumber = 69;
let binaryNumber = '';
while(decimalNumber > 0) {
  binaryNumber = (decimalNumber % 2) + binaryNumber;
  decimalNumber = Math.floor(decimalNumber / 2);
}
console.log(binaryNumber); // Outputs: 1000101
//--------------------------------------------------------------------
// ASCII—American Standard Code for Information Interchange

// expand_less
// ASCII is a character encoding standard used for representing text in computers. It maps unique numbers to characters, allowing computers to store and manipulate text. Each letter, digit, or symbol is represented by a 7-bit binary code. ASCII standardizes communication between devices, making it a crucial part of text file formats, data transmission, and storage.

// Example

// The ASCII value for character 'A' is 65 in decimal or 1000001 in binary.
//-----------------------------------------------------------------------
// Understanding Number Systems

// expand_less
// Computers use number systems to represent data. The most familiar is the decimal system (base 10), used commonly by humans. However, computers operate using the binary system (base 2). Other number systems, like octal (base 8) and hexadecimal (base 16), are also used in computing to represent binary numbers in a more compact form, easing human readability.

// Example

// A hexadecimal number 0x1A3F translates to binary as 1101000111111.
//-----------------------------------------------------------------------
// Signals and Binary Representation

// expand_less
// In computing, signals are binary and can represent two states: ON (1) and OFF (0). This concept is crucial for understanding how computers process commands and data. An electrical system can use voltage levels to represent these binary states, forming the basis of digital computing.

// Example

// If a high voltage level represents 1 and a low level represents 0, then a sequence like 1010 could represent an alternating signal pattern.
//-----------------------------------------------------------------------
// Converting Alphabets to Binary

// expand_less
// Characters on a keyboard are converted to binary using their ASCII codes, allowing them to be read and processed by computers. Each character typed is converted into its corresponding ASCII code, then to binary, facilitating user interaction with computer systems beyond numerical data.

// Example

function charToBinary(char) {
  const ascii = char.charCodeAt(0);
  return ascii.toString(2);
}
console.log(charToBinary('A')); // Outputs: 1000001
//-----------------------------------------------------------------------
// Introduction to React

// expand_less
// React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components and manage the state and lifecycle of those components. React's declarative nature makes it efficient and intuitive for building complex user interfaces.

// Example

import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return <h1>Hello, world!</h1>;
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------