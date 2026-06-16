class Stack {
  constructor() {
    this.items = []; // Array used to implement stack operations
  }

  // Push: Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the top element. Returns null if empty.
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Peek: Return the top element without removing it
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size: Get the number of elements in the stack
  size() {
    return this.items.length;
  }
}

// Usage:
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // Output: 20
console.log(myStack.pop());  // Output: 20